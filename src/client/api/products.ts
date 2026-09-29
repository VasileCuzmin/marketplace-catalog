
import type { ApiResponse } from '../../types/ApiResponse';
import type { Product } from '../../types/Product';
import type { Review } from '../../types/Review';
import { apiRequest } from './apiRequest';

export async function getProducts(): Promise<ApiResponse<Product[]>> {
    return apiRequest<ApiResponse<Product[]>>('/api/products');
}

export async function getProductById(id: string): Promise<ApiResponse<Product>> {
    return apiRequest<ApiResponse<Product>>(`/api/products/${id}`);
}

export function getProductReviews(id: string): Promise<ApiResponse<Review[]>> {
    return apiRequest<ApiResponse<Review[]>>(
        `/api/products/${id}/reviews`,
    );
}