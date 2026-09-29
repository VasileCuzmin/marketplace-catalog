import type { Diagnostic, ValidationResult } from './validation.ts';

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  verified: boolean;
  createdAt: string;
}

export function validateReview(data: unknown): ValidationResult {
  if (typeof data !== 'object' || data === null) {
    return {
      valid: false,
      diagnostics: [
        {
          field: '',
          expected: 'object',
          received: data === null ? 'null' : typeof data,
        },
      ],
    };
  }

  const review = data as Review;
  const diagnostics: Diagnostic[] = [];

  if (typeof review.id !== 'string') {
    diagnostics.push({
      field: 'id',
      expected: 'string',
      received: typeof review.id,
    });
  }
  if (typeof review.productId !== 'string') {
    diagnostics.push({
      field: 'productId',
      expected: 'string',
      received: typeof review.productId,
    });
  }
  if (typeof review.author !== 'string') {
    diagnostics.push({
      field: 'author',
      expected: 'string',
      received: typeof review.author,
    });
  }
  if (typeof review.title !== 'string') {
    diagnostics.push({
      field: 'title',
      expected: 'string',
      received: typeof review.title,
    });
  }
  if (typeof review.comment !== 'string') {
    diagnostics.push({
      field: 'comment',
      expected: 'string',
      received: typeof review.comment,
    });
  }
  if (typeof review.createdAt !== 'string') {
    diagnostics.push({
      field: 'createdAt',
      expected: 'string',
      received: typeof review.createdAt,
    });
  }
  if (typeof review.rating !== 'number') {
    diagnostics.push({
      field: 'rating',
      expected: 'number',
      received: typeof review.rating,
    });
  }
  if (typeof review.verified !== 'boolean') {
    diagnostics.push({
      field: 'verified',
      expected: 'boolean',
      received: typeof review.verified,
    });
  }

  return diagnostics.length === 0
    ? { valid: true }
    : { valid: false, diagnostics };
}

export function isReview(data: unknown): data is Review {
  return validateReview(data).valid;
}
