import { NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/app/actions/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, error } = await getAuthenticatedUserId();
    if (error || !userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { productId, rating, review } = await req.json();

    if (!productId || !rating || !review) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the review
    const newReview = await prisma.review.create({
      data: {
        rating,
        review,
        reviewCreatedAt: new Date(),
        reviewById: userId,
      },
    });

    // Create the product review relation
    await prisma.productReview.create({
      data: {
        productId,
        reviewId: newReview.id,
      },
    });

    // Update product rating and review count
    const productReviews = await prisma.productReview.findMany({
      where: {
        productId,
        review: {
          verified: true,
        },
      },
      include: {
        review: true,
      },
    });

    const verifiedReviewsCount = productReviews.length;
    let averageRating = 0;

    if (verifiedReviewsCount > 0) {
      const totalRating = productReviews.reduce(
        (sum, pr) => sum + pr.review.rating,
        0
      );
      averageRating = totalRating / verifiedReviewsCount;
    }

    await prisma.product.update({
      where: { id: productId },
      data: {
        rating: averageRating,
        numReviews: verifiedReviewsCount,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
