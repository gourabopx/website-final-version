"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/store/useCart";
import { CheckCircle2 } from "lucide-react";

export default function OrderSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearCart } = useCart();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      router.push("/");
      return;
    }

    // Clear the cart after successful payment
    clearCart();

    // You could also fetch the order details here using the session ID
    // and show more specific order information
  }, [searchParams, clearCart, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Payment Successful!
          </h1>
          <p className="mt-2 text-gray-600">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          <div className="mt-8 space-y-4">
            <button
              onClick={() => router.push("/orders")}
              className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors"
            >
              View Orders
            </button>
            <button
              onClick={() => router.push("/")}
              className="w-full bg-gray-100 text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
