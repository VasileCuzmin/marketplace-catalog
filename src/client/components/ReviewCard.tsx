import { formatDistanceToNow } from 'date-fns';
import type { Review } from '../../types/Review';
import StarRating from '../shared/components/StarRating';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formattedDate = formatDistanceToNow(new Date(review.createdAt), { addSuffix: true });

  return (
    <article className="bg-white rounded-lg p-5 shadow-card">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-ps-inky-blue">{review.author}</span>
            {review.verified && (
              <span className="text-xs text-green-600 font-medium">✓ Verified</span>
            )}
          </div>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </div>
      </div>
      <StarRating rating={review.rating} />
      <h4 className="font-semibold text-ps-inky-blue mt-2 mb-1">{review.title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
    </article>
  );
}
