
import { validateApiItemResponse, validateApiResponse, type ApiResponse } from '../../types/ApiResponse';
import { validateProduct, type Product } from '../../types/Product';
import { ProductDetail, validateProductDetail } from '../../types/ProductDetail';
import { validateReview, type Review } from '../../types/Review';
import { apiRequest } from './apiRequest';

export async function getProducts(): Promise<ApiResponse<Product[]>> {
    return apiRequest<ApiResponse<Product[]>>('/api/products',
        {
            method: 'GET',
            validate: (data) => validateApiResponse(data, validateProduct)
        }
    );
}

export function getProductById(
    id: string,
): Promise<ApiResponse<ProductDetail>> {
    return apiRequest<ApiResponse<ProductDetail>>(
        `/api/products/${id}`,
        {
            method: 'GET',
            validate: (data) =>
                validateApiItemResponse(data, validateProductDetail),
        },
    );
}

export function getProductReviews(id: string): Promise<ApiResponse<Review[]>> {
    return apiRequest<ApiResponse<Review[]>>(
        `/api/products/${id}/reviews`,
        {
            method: 'GET',
            validate: (data) => validateApiResponse(data, validateReview),
        },
    );
}