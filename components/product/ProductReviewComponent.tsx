"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReviewModal from "./ReviewModal";
import { getAuthenticatedUserId } from "@/app/actions/auth";

interface Review {
  review: {
    rating: number;
    review: string;
    reviewCreatedAt: Date;
    reviewBy: {
      username: string;
    };
    verified: boolean;
  };
}

interface ProductReviewComponentProps {
  reviews: Review[];
  productId: string;
  productSlug: string;
}

export default function ProductReviewComponent({
  reviews,
  productId,
  productSlug,
}: ProductReviewComponentProps) {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const router = useRouter();

  const verifiedReviews = reviews.filter((r) => r.review.verified);
  const displayedReviews = verifiedReviews.slice(0, 3);

  const handleWriteReview = async () => {
    const { userId, error } = await getAuthenticatedUserId();
    if (error || !userId) {
      router.push("/auth");
      return;
    }
    setIsReviewModalOpen(true);
  };

  const ratingCounts = verifiedReviews.reduce(
    (acc, review) => {
      acc[review.review.rating] = (acc[review.review.rating] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>
  );

  const totalRatings = verifiedReviews.length;
  const averageRating = (
    verifiedReviews.reduce((sum, review) => sum + review.review.rating, 0) /
    totalRatings
  ).toFixed(1);

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">RATINGS</h2>
            <Star className="w-5 h-5" />
          </div>
          <Button
            variant="outline"
            onClick={handleWriteReview}
            className="border-2"
          >
            Write a Review
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold">{averageRating}</div>
            <div className="flex flex-col">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(Number(averageRating))
                        ? "fill-primary stroke-primary"
                        : "stroke-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                {totalRatings} Verified Reviews
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="w-3">{rating}</span>
                <Star className="w-4 h-4" />
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{
                      width: `${
                        ((ratingCounts[rating] || 0) / totalRatings) * 100
                      }%`,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-500 w-8">
                  {ratingCounts[rating] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {displayedReviews.map((review, index) => (
            <div key={index} className="border-b pb-4 last:border-0">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.review.rating
                        ? "fill-primary stroke-primary"
                        : "stroke-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-2">{review.review.review}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span>{review.review.reviewBy.username}</span>
                  <span>|</span>
                  <span>
                    {new Date(review.review.reviewCreatedAt).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalRatings > 3 && (
          <div className="mt-4 text-center">
            <Link
              href={`/review/${productSlug}`}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              View all {totalRatings} reviews
            </Link>
          </div>
        )}
      </Card>

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        productId={productId}
        productSlug={productSlug}
      />
    </div>
  );
}
