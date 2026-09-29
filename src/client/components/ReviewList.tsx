import type { Review } from '../../types/Review.ts';
import ReviewCard from './ReviewCard.tsx';

interface ReviewListProps {
  reviews: Review[];
  total?: number;
}

export default function ReviewList({ reviews, total }: ReviewListProps) {
  if (reviews.length === 0) {
    return <p className="text-gray-500 text-sm py-4">No reviews yet.</p>;
  }

  return (
    <section>
      <h2 className="text-xl font-semibold text-ps-inky-blue mb-4">
        Customer Reviews
        <span className="text-ps-purple-gray font-normal text-base ml-2">({total})</span>
      </h2>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
