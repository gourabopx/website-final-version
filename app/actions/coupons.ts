"use server";

import prisma from "@/lib/prisma";

export async function validateCoupon(couponCode: string) {
  try {
    const coupon = await prisma.coupon.findUnique({
      where: {
        coupon: couponCode,
      },
    });

    if (!coupon) {
      return { success: false, error: "Invalid coupon code" };
    }

    // Check if coupon is expired
    const currentDate = new Date().toISOString().split("T")[0];
    if (currentDate > coupon.endDate || currentDate < coupon.startDate) {
      return { success: false, error: "Coupon has expired or not yet valid" };
    }
    console.log(coupon);

    return {
      success: true,
      data: {
        discount: coupon.discount,
        couponCode: coupon.coupon,
      },
    };
  } catch (error) {
    console.error("Error validating coupon:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to validate coupon",
    };
  }
}
