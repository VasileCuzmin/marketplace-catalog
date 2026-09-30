import { Router } from 'express';
import type { CursorResponse } from '../../types/CursorResponse.js';
import type { Product } from '../../types/Product.js';
import type { Review } from '../../types/Review.js';
import type { PaginatedResponse } from '../../types/PaginatedResponse.js';
import type { CursorQuery } from '../../types/CursorQuery.js';
import { products } from '../data/products.js';
import type { Request, Response } from 'express';
import type { ApiResponse } from '../../types/ApiResponse.js';
import { reviews } from '../data/reviews.js';
import { ProductDetail } from '../../types/ProductDetail.js';
import { decodeCursor, encodeCursor } from '../cursor.js';

export const productsRouter = Router();

productsRouter.get('/', (_req: Request, res: Response<ApiResponse<Product[]>>) => {
    const response: ApiResponse<Product[]> = {
        data: products,
        meta: {
            total: products.length
        }
    }
    res.json(response);
});

productsRouter.get('/offset', (req: Request, res: Response<PaginatedResponse<ProductDetail>>) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || products.length;
    const response: PaginatedResponse<ProductDetail> = {
        data: products.slice((page - 1) * pageSize, page * pageSize),
        meta: {
            totalPages: Math.ceil(products.length / pageSize),
            total: products.length,
            page: page,
            pageSize: pageSize
        }
    }
    res.json(response);
});

productsRouter.get('/cursor', (req: Request<{}, {}, {}, CursorQuery>, res: Response<CursorResponse<Product>>) => {
    const limit = Math.min(parseInt(req.query.limit || '10', 10), 100);
    const cursorParam = req.query.cursor;
    const decodedCursor = cursorParam ? decodeCursor(cursorParam) : null;

    let startIndex = 0;
    if (decodedCursor) {
        const foundIndex = products.findIndex((p) => p.id === decodedCursor.id);
        if (foundIndex !== -1) {
            startIndex = foundIndex + 1;
        }
    }
    const slicedData = products.slice(startIndex, startIndex + limit + 1);
    const hasNextPage = slicedData.length > limit;
    const data = hasNextPage ? slicedData.slice(0, limit) : slicedData;

    let nextCursor: string | null = null;
    if (hasNextPage && data.length > 0) {
        const lastItem = data[data.length - 1];
        nextCursor = encodeCursor({
            id: lastItem.id,
            createdAt: lastItem.createdAt,
        });
    }

    const response: CursorResponse<Product> = {
        data,
        meta: {
            nextCursor
        }
    };

    res.json(response);
});

productsRouter.get('/:id', (req: Request, res: Response) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        res.status(404).json({ error: `Product not found: ${req.params.id}` });
        return;
    }

    const response: ApiResponse<Product> = {
        data: product,
        meta: {
            total: 1
        }
    };
    res.json(response);
});

productsRouter.get('/:id/reviews', (req: Request, res: Response) => {
    const productReviews = reviews
        .filter((r) => r.productId === req.params.id)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const response: ApiResponse<Review[]> = {
        data: productReviews,
        meta: { total: productReviews.length },
    };

    res.json(response);
});

productsRouter.post('/:id/reviews', (req: Request, res: Response) => {
    const { rating, title, comment, author } = req.body as { rating: number; title: string; comment: string; author: string };
    const newReview: Review = {
        id: `rev-${Date.now()}`,
        productId: req.params.id as string,
        rating,
        title,
        comment,
        author,
        verified: false,
        createdAt: new Date().toISOString()
    };

    reviews.push(newReview);

    const response: ApiResponse<Review> = {
        data: newReview,
        meta: {
            total: 1
        }
    };

    res.status(201).json(response);
});