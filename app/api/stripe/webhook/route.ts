import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { createOrder } from "@/app/actions/orders";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = headers().get("stripe-signature")!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 }
      );
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderData = JSON.parse(session.metadata?.orderData || "{}");

      // Create order in database
      const result = await createOrder({
        ...orderData,
        isPaid: true,
        paymentResult: {
          id: session.payment_intent as string,
          status: "completed",
          email: session.customer_details?.email,
        },
      });

      if (result.error) {
        console.error("Failed to create order:", result.error);
        return NextResponse.json(
          { error: "Failed to create order" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
