import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    const options = {
      amount: amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    return NextResponse.json({
      id: "__id__",
      amount: 0,
      currency: "INR",
    });
  } catch (error) {
    console.error("Razorpay order creation error:", error);
    return NextResponse.json(
      { error: "Failed to create Razorpay order" },
      { status: 500 }
    );
  }
}
