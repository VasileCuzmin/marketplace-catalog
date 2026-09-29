import { Router } from 'express';
import type { Request, Response } from 'express';
import type { ApiResponse } from '../../types/ApiResponse.js';
import { products } from '../data/products.js';

type CategoryName =
    | 'Tropical'
    | 'Succulents & Cacti'
    | 'Ferns'
    | 'Herbs'
    | 'Flowering'
    | 'Air Plants';

interface Category {
    id: string;
    name: CategoryName;
    slug: string;
    description: string;
    plantCount: number;
}

export const categoriesRouter = Router();

const CATEGORY_META: Record<CategoryName, { id: string; slug: string; description: string }> = {
    Tropical: {
        id: 'cat-tropical',
        slug: 'tropical',
        description:
            "Lush, statement-making plants from the world's rainforests and tropical regions, bringing bold foliage and dramatic presence to any indoor space.",
    },
    'Succulents & Cacti': {
        id: 'cat-succulents-cacti',
        slug: 'succulents-cacti',
        description:
            'Water-storing plants built for bright light and dry conditions, offering extraordinary variety in form, texture, and color with minimal care.',
    },
    Ferns: {
        id: 'cat-ferns',
        slug: 'ferns',
        description:
            'Ancient, non-flowering plants prized for their intricate, feathery fronds that thrive in shaded, humid conditions most other plants avoid.',
    },
    Herbs: {
        id: 'cat-herbs',
        slug: 'herbs',
        description:
            'Aromatic and culinary plants that do double duty as living pantry essentials and fragrant windowsill companions throughout the year.',
    },
    Flowering: {
        id: 'cat-flowering',
        slug: 'flowering',
        description:
            'Blooming beauties selected for their ability to flower reliably indoors, bringing lasting color and fragrance to homes and offices.',
    },
    'Air Plants': {
        id: 'cat-air-plants',
        slug: 'air-plants',
        description:
            'Soil-free epiphytes from the Tillandsia genus that absorb water and nutrients directly through their leaves, requiring almost no conventional plant care.',
    },
};


categoriesRouter.get('/', (_req: Request, res: Response<ApiResponse<Category[]>>) => {
    const countByCategory = products.reduce<Record<string, number>>((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {} as Record<CategoryName, number>);

    const categories: Category[] = Object.entries(CATEGORY_META).map(([name, meta]) => ({
        id: meta.id,
        name: name as CategoryName,
        slug: meta.slug,
        description: meta.description,
        plantCount: countByCategory[name as CategoryName] || 0,
    }));

    const response: ApiResponse<Category[]> = { data: categories, meta: { total: categories.length } };
    res.json(response);
});