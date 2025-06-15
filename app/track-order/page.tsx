"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, SearchIcon } from "lucide-react";
import { useState } from "react";

type orderDetails = {
  orderId: string;
  status: string;
  estimatedDelivery: string;
};

const lookupOrder = (orderId: string): Promise<orderDetails | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (orderId === "12345") {
        resolve({
          orderId: "12345",
          status: "In Transit",
          estimatedDelivery: "2023-06-15",
        });
      } else {
        resolve(null); // Return null if the orderId is not found
      }
    }, 1000); // Simulate network delay of 1 second
  });
};

const TrackOrderPage = () => {
  // State to manage orderId input, order details, error messages, and loading status
  const [orderId, setOrderId] = useState<string>(""); // For tracking user input
  const [orderDetails, setOrderDetails] = useState<orderDetails | null>(null); // Store fetched order details
  const [error, setError] = useState<string>(""); // For error messages
  const [loading, setLoading] = useState<boolean>(false); // For showing loader during fetch

  // Handle form submission for tracking the order
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submit
    setLoading(true); // Set loading state during order lookup
    setError(""); // Reset error message
    setOrderDetails(null); // Clear previous order details if any

    // Validate that the orderId input is not empty
    if (!orderId.trim()) {
      setError("Please enter an order number"); // Show error if empty
      setLoading(false); // Stop loader
      return;
    }

    // Try to fetch the order details using the lookupOrder function
    try {
      const result = await lookupOrder(orderId);
      if (result) {
        setOrderDetails(result); // Set order details if found
      } else {
        setError(
          "Order not found. Please check your order number and try again."
        ); // Show error if not found
      }
    } catch (err: any) {
      // Handle any unexpected errors during the lookup
      setError(
        "An error occurred while looking up your order. Please try again later: " +
          err
      );
    } finally {
      setLoading(false); // Stop loader after lookup is complete
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-4 sm:p-6 ms:p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Page heading */}
        <h1 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-center tracking-[0.6px]">
          Track Your Order
        </h1>

        {/* Form for order tracking */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="">
            <label
              htmlFor="orderId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Order Number
            </label>
            {/* Order number input field */}
            <div className="relative">
              <Input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)} // Update orderId state on input change
                placeholder="Enter your order number"
                className="pl-10 w-full"
                aria-describedby="orderIdHelp"
              />
              {/* Search icon inside the input field */}
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <p
              id="orderIdHelp"
              className="mt-1 text-xs sm:text-sm text-gray-500"
            >
              Enter the order number from your confirmation email
            </p>
          </div>

          {/* Submit button, with loading spinner if loading */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}{" "}
            {/* Show loader when searching */}
            {loading ? "Searching..." : "Track Order"}
          </Button>
        </form>

        {/* Display error message if any */}
        {error && (
          <div
            role="alert"
            className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm"
          >
            {error}
          </div>
        )}

        {/* Display order details if found */}
        {orderDetails && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded ">
            <h2 className="text-lg font-semibold mb-2">Order Found</h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <span className="font-medium">Order ID:</span>{" "}
                {orderDetails.orderId}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                {orderDetails.status}
              </p>
              <p>
                <span className="font-medium">Estimated Delivery:</span>{" "}
                {orderDetails.estimatedDelivery}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;
