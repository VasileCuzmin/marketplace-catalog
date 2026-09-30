
import { validateApiItemResponse, validateApiResponse, type ApiResponse } from '../../types/ApiResponse';
import { validateCursorResponse, type CursorResponse } from '../../types/CursorResponse';
import { validateProduct, type Product } from '../../types/Product';
import { ProductDetail, validateProductDetail } from '../../types/ProductDetail';
import { validateReview, type Review } from '../../types/Review';
import { apiRequest, buildUrl } from './apiRequest';
import type { PaginatedResponse } from '../../types/PaginatedResponse';
import { Cache } from './cache';

const productsCache = new Cache<PaginatedResponse<Product>>();
const PRODUCTS_CACHE_TTL = 60_000;// Time to live for the products cache in milliseconds - 60 seconds

export async function getProducts(
    page?: number,
    pageSize?: number,
    abortSignal?: AbortSignal)
    : Promise<PaginatedResponse<Product>> {

    const cacheKey = buildUrl('/api/products/offset', { page, pageSize }).toString();
    const cached = productsCache.get(cacheKey);
    if (cached) {
        return cached;
    }

    const response = await apiRequest<PaginatedResponse<Product>>('/api/products/offset',
        {
            method: 'GET',
            validate: (data) => validateApiResponse(data, validateProduct),
            signal: abortSignal,
            params: { page, pageSize },
        }
    );

    productsCache.set(cacheKey, response, PRODUCTS_CACHE_TTL);

    return response;
}

export function getProductsCursor(
    cursor?: string,
    limit: number = 10,
    abortSignal?: AbortSignal,
): Promise<CursorResponse<Product>> {
    return apiRequest<CursorResponse<Product>>(
        '/api/products/cursor',
        {
            params: { cursor, limit },
            validate: (data) => validateCursorResponse(data, validateProduct),
            signal: abortSignal,
        },
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

export async function* streamProducts(): AsyncGenerator<Product[]> {
    let cursor: string | undefined = undefined;
    while (true) {
        const response = await getProductsCursor(cursor);
        if (response.data.length === 0) {
            break;
        }
        yield response.data;
        if (response.meta.nextCursor == null) return;
        cursor = response.meta.nextCursor;
    }
}