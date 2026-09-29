import { Router } from 'express';
import type { Product } from '../../types/Product.js';
import type { Review } from '../../types/Review.js';
import { products } from '../data/products.js';
import type { Request, Response } from 'express';
import type { ApiResponse } from '../../types/ApiResponse.js';
import { reviews } from '../data/reviews.js';

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