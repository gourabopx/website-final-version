import { notFound } from "next/navigation";
import Image from "next/image";
import { ThumbsUp, ThumbsDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import prisma from "@/lib/prisma";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getProductReviews(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      productReviews: {
        include: {
          review: {
            include: {
              reviewBy: true,
            },
          },
        },
        where: {
          review: {
            verified: true,
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return product;
}

export default async function ProductReviewPage({ params }: PageProps) {
  const product = await getProductReviews(params.slug);

  if (!product) {
    notFound();
  }

  const reviews = product.productReviews.map((pr) => ({
    rating: pr.review.rating,
    comment: pr.review.review,
    author: pr.review.reviewBy.username,
    date: new Date(pr.review.reviewCreatedAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    helpful: 0, // You can add this feature later
    unhelpful: 0, // You can add this feature later
  }));

  const ratingCounts = reviews.reduce(
    (acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>
  );

  const totalRatings = reviews.length;
  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalRatings
  ).toFixed(1);

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:sticky md:top-6 md:self-start">
            <Card className="p-6">
              <Image
                src={product.images[0]?.url || "/placeholder.svg"}
                alt={product.title}
                width={400}
                height={300}
                className="w-full rounded-lg mb-4"
              />
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-bold">
                  ₹{product.sizes[0]?.price.toFixed(2)}
                </span>
                {product.discount && (
                  <>
                    <span className="text-gray-500 line-through">
                      ₹
                      {(
                        product.sizes[0]?.price /
                        (1 - product.discount / 100)
                      ).toFixed(2)}
                    </span>
                    <span className="text-orange-500">
                      ({product.discount}% OFF)
                    </span>
                  </>
                )}
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold">RATINGS</h2>
                <Star className="w-5 h-5" />
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
            </Card>

            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Customer Reviews ({reviews.length})
                  </h3>
                  <Select defaultValue="recent">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-primary stroke-primary"
                                : "stroke-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="mb-2">{review.comment}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <span>{review.author}</span>
                          <span>|</span>
                          <span>{review.date}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{review.helpful}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <ThumbsDown className="w-4 h-4" />
                            <span>{review.unhelpful}</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
