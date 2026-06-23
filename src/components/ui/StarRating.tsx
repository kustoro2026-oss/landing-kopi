import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md";
  showNumber?: boolean;
}

export default function StarRating({
  rating,
  max = 5,
  size = "md",
  showNumber = false,
}: StarRatingProps) {
  const starSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < Math.floor(rating)
              ? "text-amber fill-amber"
              : "text-gray-300"
          }`}
        />
      ))}
      {showNumber && (
        <span className="ml-2 text-sm font-medium text-coffee/70">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
