import { Diagnostic, ValidationResult } from "./validation";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  inStock: boolean;
  badge?: 'Bestseller' | 'New' | 'Low Stock';
}

export function validateProduct(item: unknown): ValidationResult {
  if (typeof item !== 'object' || item === null) {
    return {
      valid: false,
      diagnostics: [
        {
          field: '',
          expected: 'object',
          received: item === null ? 'null' : typeof item,
        },
      ],
    };
  }

  const product = item as Product;
  const diagnostics: Diagnostic[] = [];

  if (typeof product.id !== 'string') {
    diagnostics.push({
      field: 'id',
      expected: 'string',
      received: typeof product.id,
    });
  }
  if (typeof product.name !== 'string') {
    diagnostics.push({
      field: 'name',
      expected: 'string',
      received: typeof product.name,
    });
  }
  if (typeof product.category !== 'string') {
    diagnostics.push({
      field: 'category',
      expected: 'string',
      received: typeof product.category,
    });
  }
  if (typeof product.price !== 'number') {
    diagnostics.push({
      field: 'price',
      expected: 'number',
      received: typeof product.price,
    });
  }
  if (typeof product.rating !== 'number') {
    diagnostics.push({
      field: 'rating',
      expected: 'number',
      received: typeof product.rating,
    });
  }
  if (typeof product.reviewCount !== 'number') {
    diagnostics.push({
      field: 'reviewCount',
      expected: 'number',
      received: typeof product.reviewCount,
    });
  }
  if (typeof product.imageUrl !== 'string') {
    diagnostics.push({
      field: 'imageUrl',
      expected: 'string',
      received: typeof product.imageUrl,
    });
  }
  if (typeof product.inStock !== 'boolean') {
    diagnostics.push({
      field: 'inStock',
      expected: 'boolean',
      received: typeof product.inStock,
    });
  }

  if (
    product.badge !== undefined &&
    product.badge !== 'New' &&
    product.badge !== 'Bestseller' &&
    product.badge !== 'Low Stock'
  ) {
    diagnostics.push({
      field: 'badge',
      expected: "'New' | 'Bestseller' | 'Low Stock' | undefined",
      received: String(product.badge),
    });
  }

  return diagnostics.length === 0
    ? { valid: true }
    : { valid: false, diagnostics };
}

export function isProduct(data: unknown): data is Product {
  return validateProduct(data).valid;
}