import { NextResponse } from "next/server";
import crypto from "crypto";
import { createOrder } from "@/app/actions/orders";

export async function POST(request: Request) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      orderData,
    } = await request.json();

    // Verify the payment signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 }
      );
    }

    // Create order in database
    const result = await createOrder({
      ...orderData,
      isPaid: true,
      paymentResult: {
        id: razorpay_payment_id,
        status: "completed",
      },
      razorpay_order_id,
      razorpay_payment_id,
    });

    if (result.error) {
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      orderId: result.data?.id,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
