import { apiRequest } from './apiRequest';

type ReviewBody = {
  rating: number;
  title: string;
  comment: string;
  author: string;
};

export async function submitReview(
  productId: string,
  review: ReviewBody,
): Promise<void> {
  return await apiRequest(`/api/products/${productId}/reviews`, {
    method: 'POST',
    body: review,
  });
}
