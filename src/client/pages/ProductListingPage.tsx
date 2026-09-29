import { useState, useEffect } from 'react';
import { getProducts } from '../api/products.ts';
import ProductGrid from '../components/ProductGrid.tsx';
import type { Product } from '../../types/Product.ts';
import type { ApiResponse } from '../../types/ApiResponse.ts';
import { ApiError } from '../../types/ApiError.ts';
import { ValidationError } from '../../types/ValidationError.ts';
import LoadingSpinner from '../shared/components/LoadingSpinner.tsx';

export default function ProductListingPage() {
  const [response, setResponse] = useState<ApiResponse<Product[]> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const data = await getProducts();
        setResponse(data);
      }
      catch (err) {
        setError(
          err instanceof ApiError ?
            err :
            err instanceof ValidationError
              ? err
              : new Error('Failed to load products'),
        )
      }
      finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);


  if (error instanceof ValidationError) {
    return (
      <div className="flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-2xl shadow-card p-10 max-w-lg w-full text-center">
          <p className="text-5xl mb-6">🔍</p>
          <h1 className="text-xl font-bold text-ps-inky-blue mb-1">We received unexpected data</h1>
          <p className="text-sm text-ps-purple-gray mb-8">
            Something about this response didn't match what we expected. Our team has been notified.
          </p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (error instanceof ApiError) {
    return (
      <div className="flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-2xl shadow-card p-10 max-w-lg w-full text-center">
          <p className="text-5xl mb-6">🥀</p>
          <h1 className="text-xl font-bold text-ps-inky-blue mb-1">Our servers are having a moment</h1>
          <p className="text-sm text-ps-purple-gray mb-8">
            We're having trouble reaching our servers. Please try again later.
          </p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (error) throw error;

  if (loading) return <LoadingSpinner message="Loading plants..." />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ps-inky-blue">Our Collection</h1>
        {response?.meta.total && <p className="text-gray-500 mt-1">{response.meta.total} plants</p>}
      </div>
      <ProductGrid products={response?.data ?? []} />
    </div>
  );
}
