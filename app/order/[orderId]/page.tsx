import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getAuthenticatedUserId } from "@/app/actions/auth";

async function getOrderDetails(orderId: string) {
  const { userId, error } = await getAuthenticatedUserId();
  if (error || !userId) {
    return { error: "Unauthorized" };
  }

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        user: {
          select: {
            username: true,
            email: true,
          },
        },
      },
    });

    if (!order) {
      return { error: "Order not found" };
    }

    if (order.userId !== userId) {
      return { error: "Unauthorized" };
    }

    return { order };
  } catch (error) {
    console.error("Error fetching order:", error);
    return { error: "Failed to fetch order" };
  }
}

export default async function OrderPage({
  params,
}: {
  params: { orderId: string };
}) {
  const { order, error } = await getOrderDetails(params.orderId);

  if (error || !order) {
    if (error === "Order not found") {
      notFound();
    }
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto bg-white shadow-md">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Back to Orders link */}
            <Link href="/orders" className="flex items-center mb-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">My Orders</span>
            </Link>

            {/* Thank You message and Order ID */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">
                THANK YOU {order.user.username}
              </h1>
              <p className="text-gray-600">Order ID: {order.id}</p>
            </div>

            {/* Order Details Section */}
            <div className="mb-6 border rounded-lg overflow-hidden">
              <div className="flex flex-wrap">
                {/* Order number */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 border-b sm:border-b-0 sm:border-r">
                  <div className="font-semibold text-sm mb-1">
                    ORDER NUMBER:
                  </div>
                  <div>{order.id}</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 border-b sm:border-b-0 sm:border-r">
                  <div className="font-semibold text-sm mb-1">
                    ORDER STATUS:
                  </div>
                  <div>{order.status}</div>
                </div>

                {/* Order date */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 border-b md:border-b-0 md:border-r">
                  <div className="font-semibold text-sm mb-1">DATE:</div>
                  <div>{format(order.createdAt, "MMM d, yyyy")}</div>
                </div>

                {/* Customer email */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 border-b sm:border-b-0 sm:border-r">
                  <div className="font-semibold text-sm mb-1">EMAIL:</div>
                  <div className="truncate">{order.user.email}</div>
                </div>

                {/* Total amount */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                  <div className="font-semibold text-sm mb-1">TOTAL:</div>
                  <div>₹{order.total.toFixed(2)}</div>
                </div>
              </div>

              {/* Payment method */}
              <div className="border-t p-4">
                <div className="font-semibold text-sm mb-1">
                  PAYMENT METHOD:
                </div>
                <div>{order.paymentMethod}</div>
                {order.isPaid && order.paidAt && (
                  <div className="text-sm text-green-600 mt-1">
                    Paid on {format(order.paidAt, "MMM d, yyyy")}
                  </div>
                )}
              </div>
            </div>

            {/* Order confirmation and delivery information */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {/* Shipping address */}
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h2 className="font-semibold mb-2">Shipping Address</h2>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">
                      {order.shippingAddress?.firstName}{" "}
                      {order.shippingAddress?.lastName}
                    </span>
                    <span className="text-gray-600">
                      {order.shippingAddress?.phoneNumber}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {order.shippingAddress?.address1}
                    <br />
                    {order.shippingAddress?.address2 && (
                      <>
                        {order.shippingAddress.address2}
                        <br />
                      </>
                    )}
                    {order.shippingAddress?.city},{" "}
                    {order.shippingAddress?.state}
                    <br />
                    ZipCode: {order.shippingAddress?.zipCode}
                    <br />
                    {order.shippingAddress?.country}
                  </p>
                </div>

                {/* Ordered items list */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">
                      {order.products.length} Item(s)
                    </span>
                    <span className="font-medium">
                      ₹{order.totalBeforeDiscount?.toFixed(2)}
                    </span>
                  </div>

                  {/* Product details */}
                  <div className="space-y-4">
                    {order.products.map((product, index) => (
                      <div key={index} className="flex items-center">
                        <img
                          src={product.image || ""}
                          alt={product.name || "Product Image"}
                          className="mr-4 w-[60px] h-[60px] object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-gray-600">
                            {product.size} • Qty {product.qty}
                          </p>
                          <div className="flex items-center mt-1">
                            <span className="font-medium mr-2">
                              ₹{product.price?.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Billing and Savings Section */}
              <div className="flex-1">
                {order.totalSaved && order.totalSaved > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-green-700">
                        Yay! You have saved ₹{order.totalSaved.toFixed(2)} on
                        this order
                      </span>
                    </div>
                  </div>
                )}

                {/* Bill details */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
                  <div className="space-y-2">
                    {/* Total MRP */}
                    <div className="flex justify-between">
                      <span>Total MRP</span>
                      <span>₹{order.totalBeforeDiscount?.toFixed(2)}</span>
                    </div>

                    {/* Total discount */}
                    {order.totalSaved && order.totalSaved > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Total Discount</span>
                        <span>- ₹{order.totalSaved.toFixed(2)}</span>
                      </div>
                    )}

                    {/* Shipping charges */}
                    <div className="flex justify-between">
                      <span>Shipping Charges</span>
                      <span>₹{order.shippingPrice.toFixed(2)}</span>
                    </div>

                    {/* Tax */}
                    {order.taxPrice && order.taxPrice > 0 && (
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>₹{order.taxPrice.toFixed(2)}</span>
                      </div>
                    )}

                    {/* Subtotal */}
                    <div className="flex justify-between font-semibold pt-2 border-t">
                      <span>Total Amount</span>
                      <span>₹{order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Continue shopping button */}
                <Link href="/">
                  <Button className="w-full mt-3">CONTINUE SHOPPING</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
