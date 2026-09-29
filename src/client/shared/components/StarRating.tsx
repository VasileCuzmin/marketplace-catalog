interface StarRatingProps {
  rating: number;
  showValue?: boolean;
}

export default function StarRating({ rating, showValue = false }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
      {showValue && <span className="text-xs text-gray-500 ml-1">({rating.toFixed(1)})</span>}
    </div>
  );
}
