import { useState, useEffect, useRef } from 'react';
import { streamProducts } from '../api/products.ts';
import ProductGrid from '../components/ProductGrid.tsx';
import ErrorCard from '../components/ErrorCard.tsx';
import CatalogNav from '../components/CatalogNav.tsx';
import { Product } from '../../types/Product.ts';
import { ValidationError } from '../../types/ValidationError.ts';
import { ApiError } from '../../types/ApiError.ts';
import LoadingSpinner from '../shared/components/LoadingSpinner.tsx';

export default function ProductDiscoverPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const iterator = useRef(streamProducts()).current;

  async function loadMore() {
    const result = await iterator.next();
    if (result.done) {
      setDone(true);
      return;
    }
    addProducts(result.value);
  }

  async function handleLoadMore() {
    setLoading(true);
    setError(null);
    try {
      await loadMore();
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err
          : err instanceof ValidationError
            ? err
            : new Error('Failed to load products'),
      );
    } finally {
      setLoading(false);
    }
  }

  function addProducts(page: Product[]) {
    setProducts((prev) => [...prev, ...page]);
  }

  useEffect(() => {
    handleLoadMore();
  }, []);

  if (error instanceof ValidationError) {
    return (
      <ErrorCard
        emoji="🔍"
        title="We received unexpected data"
        message="Something about this response didn't match what we expected. Our team has been notified."
        actionLabel="Try again"
        onAction={() => window.location.reload()}
      />
    );
  }

  if (error instanceof ApiError) {
    return (
      <ErrorCard
        emoji="🥀"
        title="Our servers are having a moment"
        message="We're having trouble reaching our servers. Please try again later."
        actionLabel="Try again"
        onAction={() => window.location.reload()}
      />
    );
  }

  if (error) throw error;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <CatalogNav />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ps-inky-blue">
          Discover Plants
        </h1>
        {products.length > 0 && (
          <p className="text-gray-500 mt-1">
            {products.length} plants loaded
          </p>
        )}
      </div>
      <ProductGrid products={products} />
      {loading && <LoadingSpinner message="Loading more plants..." />}
      {!done && !loading && products.length > 0 && (
        <div className="flex justify-center mt-10">
          <button onClick={handleLoadMore} className="btn-primary">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
