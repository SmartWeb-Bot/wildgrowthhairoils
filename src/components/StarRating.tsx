import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="star-rating">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`star ${index < rating ? 'filled' : 'empty'}`}
        />
      ))}
    </div>
  );
}