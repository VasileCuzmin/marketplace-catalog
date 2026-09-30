import { useState, useEffect } from 'react';
import { getProducts } from '../api/products.ts';
import ProductGrid from '../components/ProductGrid.tsx';
import type { Product } from '../../types/Product.ts';
import { ApiError } from '../../types/ApiError.ts';
import { ValidationError } from '../../types/ValidationError.ts';
import LoadingSpinner from '../shared/components/LoadingSpinner.tsx';
import ErrorCard from '../components/ErrorCard.tsx';
import CatalogNav from '../components/CatalogNav.tsx';
import PaginationControls from '../components/PaginationControls.tsx';

const PAGE_SIZE = 12;

interface PageMeta {
  total?: number;
  page?: number;
  pageSize?: number;
  totalPages?: number;
}


export default function ProductListingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [meta, setMeta] = useState<PageMeta>({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Runs after the initial render and whenever `page` changes.
    // Before a replacement effect runs, React invokes the previous cleanup,
    // which aborts that previous request. This new controller belongs only to
    // the request for the current page, so it remains active until replaced.
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const controller = new AbortController();

    async function loadProducts() {
      setLoading(true);
      try {
        const result = await getProducts(
          page,
          PAGE_SIZE,
          controller.signal,
        );
        // Ignore a result from a request that was cancelled during cleanup.
        if (controller.signal.aborted) return;
        setProducts(result.data);
        setMeta(result.meta as PageMeta);
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

    // Also runs when the component unmounts.
    return () => controller.abort();
  }, [page]);



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

  if (error?.name === 'TimeoutError') {
    return (
      <ErrorCard
        emoji="⏱️"
        title="Request timed out"
        message="The server took too long to respond. Please try again."
        actionLabel="Try again"
        onAction={() => window.location.reload()}
      />
    );
  }

  if (error) throw error;

  if (loading && products.length === 0) {
    return <LoadingSpinner message="Loading plants..." />;
  }

  const hasPagination =
    meta.totalPages !== undefined && meta.totalPages > 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <CatalogNav />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ps-inky-blue">
          Our Collection
        </h1>
        {meta.total !== undefined && (
          <p className="text-gray-500 mt-1">{meta.total} plants</p>
        )}
      </div>
      <div className="relative">
        {loading && products.length > 0 && (
          <div className="absolute inset-0 z-10 bg-ps-surface/60 flex items-start justify-center pt-12">
            <div className="bg-white rounded-2xl shadow-card w-32 h-32 flex items-center justify-center">
              <LoadingSpinner message="Loading..." />
            </div>
          </div>
        )}
        <ProductGrid products={products} />
      </div>
      {hasPagination && (
        <PaginationControls
          page={meta.page!}
          totalPages={meta.totalPages!}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
