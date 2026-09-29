import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { getProductById, getProductReviews } from '../api/products.ts';
import { submitReview } from '../api/reviews.ts';
import ReviewList from '../components/ReviewList.tsx';
import type { ProductDetail } from '../../types/ProductDetail.ts';
import type { ApiResponse } from '../../types/ApiResponse.ts';
import type { Review } from '../../types/Review.ts';
import { ApiError } from "../../types/ApiError";
import LoadingSpinner from '../shared/components/LoadingSpinner.tsx';
import ProductImage from '../shared/components/ProductImage.tsx';
import StarRating from '../shared/components/StarRating.tsx';

const BADGE_CLASSES: Record<string, string> = {
  New: 'badge-new',
  Bestseller: 'badge-bestseller',
  'Low Stock': 'badge-limited',
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [productData, setProductData] =
    useState<ApiResponse<ProductDetail> | null>(null);
  const [productLoading, setProductLoading] = useState<boolean>(true);
  const [productError, setProductError] = useState<Error | null>(null);

  const [reviewsData, setReviewsData] = useState<ApiResponse<Review[]> | null>(
    null,
  );
  const [reviewsLoading, setReviewsLoading] = useState<boolean>(true);

  const [formData, setFormData] = useState({
    rating: 0,
    title: '',
    comment: '',
    author: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [ratingError, setRatingError] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      if (!id) return;
      setProductLoading(true);
      try {
        const data = await getProductById(id);
        setProductData(data as ApiResponse<ProductDetail>);
      } catch (err) {
        setProductError(
          err instanceof ApiError ? err : new Error('Failed to load product'),
        );
      } finally {
        setProductLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  useEffect(() => {
    async function loadReviews() {
      if (!id) return;
      setReviewsLoading(true);
      const data = await getProductReviews(id);
      setReviewsData(data);
      setReviewsLoading(false);
    }
    loadReviews();
  }, [id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!id) return;
    if (formData.rating === 0) {
      setRatingError(true);
      return;
    }

    const optimisticReview: Review = {
      id: `optimistic-${Date.now()}`,
      productId: id,
      author: formData.author,
      rating: formData.rating,
      title: formData.title,
      comment: formData.comment,
      verified: false,
      createdAt: new Date().toISOString(),
    };

    setReviewsData((prev) =>
      prev
        ? { ...prev, data: [optimisticReview, ...(prev.data ?? [])] }
        : { data: [optimisticReview], meta: {} },
    );
    setFormData({ rating: 0, title: '', comment: '', author: '' });
    setRatingError(false);

    setSubmitting(true);
    await submitReview(id, formData);
    setSubmitting(false);
  }

  if (productError instanceof ApiError && productError.status === 404) {
    return (
      <div className="flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-2xl shadow-card p-10 max-w-lg w-full text-center">
          <p className="text-5xl mb-6">🪴</p>
          <h1 className="text-xl font-bold text-ps-inky-blue mb-1">Plant not found</h1>
          <p className="text-sm text-ps-purple-gray mb-8">
            This plant may have been moved or is no longer in our collection.
          </p>
          <Link to="/module2/products" className="btn-primary">
            Browse all plants
          </Link>
        </div>
      </div>
    );
  }

  if (productError instanceof ApiError) {
    return (
      <div className="flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-2xl shadow-card p-10 max-w-lg w-full text-center">
          <p className="text-5xl mb-6">🥀</p>
          <h1 className="text-xl font-bold text-ps-inky-blue mb-1">Our servers are having a moment</h1>
          <p className="text-sm text-ps-purple-gray mb-8">
            We're having trouble reaching our servers. Please try again later.
          </p>
          <Link to="/module2/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (productError) throw productError;

  if (productLoading) return <LoadingSpinner message="Loading product..." />;
  if (!productData) return null;

  const product = productData.data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        to="/module2/products"
        className="inline-flex items-center gap-1 text-sm text-ps-purple-gray hover:text-ps-inky-blue transition-colors mb-8"
      >
        ← Back to Products
      </Link>

      {/* Product layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left — image */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-50">
            <ProductImage
              src={product!.imageUrl}
              alt={product!.name}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right — details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-ps-purple-gray uppercase tracking-wide">
              {product!.category}
            </span>
            {product!.badge && (
              <span className={BADGE_CLASSES[product!.badge]}>
                {product!.badge}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold text-ps-inky-blue">
            {product!.name}
          </h1>

          <div className="flex items-center gap-2">
            <StarRating rating={product!.rating} showValue />
            <span className="text-sm text-gray-500">
              {product!.reviewCount} reviews
            </span>
          </div>

          <div className="text-3xl font-bold text-ps-inky-blue">
            $
            {product!.price.toLocaleString('en-US', {
              minimumFractionDigits: 2,
            })}
          </div>

          <div className="flex items-center gap-4">
            <p
              className={`text-sm font-medium ${product!.inStock ? 'text-green-600' : 'text-red-500'}`}
            >
              {product!.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </p>
            <p
              className={`text-sm font-medium ${product!.petSafe ? 'text-ps-ada-green' : 'text-rose-500'}`}
            >
              {product!.petSafe ? '✦ Pet safe' : '✗ Not pet safe'}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product!.description}</p>

          <div>
            <h2 className="text-sm font-semibold text-ps-inky-blue uppercase tracking-wide mb-2">
              Features
            </h2>
            <ul className="space-y-1.5">
              {product! .features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-ps-pink mt-0.5 flex-shrink-0">✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button
            disabled={!product!.inStock}
            className="btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {product!.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Care guide */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-ps-inky-blue mb-6">
          Care guide
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {(
            [
              {
                label: 'Watering',
                value: product!.careInstructions.watering,
                style: 'bg-ps-blue text-ps-inky-blue',
              },
              {
                label: 'Light',
                value: product!.careInstructions.light,
                style: 'bg-ps-lime-green text-ps-inky-blue',
              },
              {
                label: 'Humidity',
                value: product!.careInstructions.humidity,
                style: 'bg-ps-limited-green text-ps-inky-blue',
              },
              {
                label: 'Temperature',
                value: product!.careInstructions.temperature,
                style: 'bg-ps-pink text-white',
              },
              {
                label: 'Fertilizing',
                value: product!   .careInstructions.fertilizing,
                style: 'bg-ps-lime-green text-ps-inky-blue',
              },
              {
                label: 'Repotting',
                value: product!.careInstructions.repotting,
                style: 'bg-ps-inky-blue text-white',
              },
            ] as const
          ).map(({ label, value, style }) => (
            <div key={label} className={`${style} rounded-lg p-4`}>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
                {label}
              </p>
              <p className="text-sm font-medium leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-ps-inky-blue mb-4">
          Specifications
        </h2>
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {product! .specifications.map(({ label, value }, i) => (
                <tr
                  key={label}
                  className={i % 2 === 0 ? 'bg-ps-surface' : 'bg-white'}
                >
                  <td className="px-5 py-3 font-medium text-ps-inky-blue w-1/3">
                    {label}
                  </td>
                  <td className="px-5 py-3 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Review form */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-ps-inky-blue mb-4">
          Write a Review
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 shadow-card"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-ps-inky-blue mb-1">
                Your name
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                placeholder="e.g. Clara M."
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ps-pink"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ps-inky-blue mb-1">
                Rating
              </label>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, rating: n });
                      setRatingError(false);
                    }}
                    className={`text-2xl leading-none transition-transform hover:scale-110 ${n <= formData.rating ? 'text-ps-pink' : 'text-gray-300'
                      }`}
                    aria-label={`${n} star${n !== 1 ? 's' : ''}`}
                  >
                    ★
                  </button>
                ))}
              </div>
              {ratingError && (
                <p className="text-xs text-red-500 mt-1">
                  Please select a rating.
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-ps-inky-blue mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Summarise your experience"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ps-pink"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-ps-inky-blue mb-1">
              Review
            </label>
            <textarea
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              rows={3}
              placeholder="What did you love about this plant?"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ps-pink resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting…' : 'Submit Review'}
          </button>
        </form>
      </section>

      {/* Reviews */}
      {reviewsLoading ? (
        <LoadingSpinner message="Loading reviews..." />
      ) : (
        reviewsData && (
          <ReviewList
            reviews={reviewsData.data as Review[]}
            total={reviewsData.data!.length}
          />
        )
      )}
    </div>
  );
}
