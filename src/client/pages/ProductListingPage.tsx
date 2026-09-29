import { useState, useEffect } from 'react';
import { getProducts } from '../api/products.ts';
import ProductGrid from '../components/ProductGrid.tsx';
import type { Product } from '../../types/Product.ts';
import type { ApiResponse } from '../../types/ApiResponse.ts';

export default function ProductListingPage() {
  const [response, setResponse] = useState<ApiResponse<Product[]> | null>(null);

  useEffect(() => {
    getProducts().then(data => setResponse(data));
  }, []);

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
