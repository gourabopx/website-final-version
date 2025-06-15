import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main container for the order page content */}
      <div className="max-w-full mx-auto bg-white shadow-md">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Back to Home link */}
            <div className="flex items-center mb-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Home</span>
            </div>

            {/* Thank You message and Order ID */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">THANK YOU Suraj M.</h1>
              <p className="text-gray-600">Order ID: VC-451633</p>
            </div>

            {/* Order Details Section */}
            <div className="mb-6 border rounded-lg overflow-hidden">
              <div className="flex flex-wrap">
                {/* Order number */}
                <div className="w-full sm:w-1/2 md:w-1/5 p-4 border-b sm:border-b-0 sm:border-r">
                  <div className="font-semibold text-sm mb-1">
                    ORDER NUMBER:
                  </div>
                  <div>VC-451633</div>
                </div>

                {/* Order date */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 border-b md:border-b-0 md:border-r">
                  <div className="font-semibold text-sm mb-1">DATE:</div>
                  <div>AUG 3, 2024</div>
                </div>

                {/* Customer email */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 sm:border-r">
                  <div className="font-semibold text-sm mb-1">EMAIL:</div>
                  <div className="truncate">surajm_89@email.com</div>
                </div>

                {/* Total amount */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                  <div className="font-semibold text-sm mb-1">TOTAL:</div>
                  <div>₹404.00</div>
                </div>
              </div>

              {/* Payment method */}
              <div className="border-t p-4">
                <div className="font-semibold text-sm mb-1">
                  PAYMENT METHOD:
                </div>
                <div>Cash on Delivery (COD)</div>
              </div>
            </div>

            {/* Order confirmation and delivery information */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {/* Confirmation message */}
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-[50px] h-[50px] text-green-500 mr-2 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold">
                      Your order is confirmed
                    </h2>
                    <p className="text-gray-600">
                      Order will be delivered to you in 2-3 days on the
                      following address
                    </p>
                  </div>
                </div>

                {/* Shipping address */}
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Suraj M.v</span>
                    <span className="text-gray-600">0123456789</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    450 Muldoon Rd, Anchorage
                    <br />
                    Alabama,
                    <br />
                    ZipCode: 99504,
                    <br />
                    United States.
                    <br />
                    Addison.
                  </p>
                </div>

                {/* Ordered items list */}
                <div className="border rounded-lg p-4">
                  {/* First item */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">1 Item</span>
                    <span className="font-medium">₹ 334</span>
                  </div>

                  {/* Product details */}
                  <div className="flex items-center">
                    <img
                      src="https://res.cloudinary.com/dtxh3ew7s/image/upload/v1727352106/2_upscaled_g6ibby.png"
                      alt="Product Image"
                      className="mr-4 w-[60px] h-[60px]"
                    />
                    <div>
                      <h3 className="font-medium">
                        High-End Fragrance Collection for Males
                      </h3>
                      <p className="text-sm text-gray-600">300ml • Qty 1</p>
                      <div className="flex items-center mt-1">
                        <span className="font-medium mr-2">₹334</span>
                        <span className="text-sm text-gray-500 line-through mr-2">
                          ₹468
                        </span>
                        <span className="text-sm text-green-600">29% off</span>
                      </div>
                    </div>
                  </div>

                  {/* Second item */}
                  <div className="flex items-center mt-4">
                    <img
                      src="https://res.cloudinary.com/dtxh3ew7s/image/upload/v1727352106/1_upscaled_pku7p3.png"
                      alt="Product Image"
                      className="mr-4 w-[60px] h-[60px]"
                    />
                    <div>
                      <h3 className="font-medium">
                        High-End Fragrance Collection for Males
                      </h3>
                      <p className="text-sm text-gray-600">300ml • Qty 1</p>
                      <div className="flex items-center mt-1">
                        <span className="font-medium mr-2">₹334</span>
                        <span className="text-sm text-gray-500 line-through mr-2">
                          ₹468
                        </span>
                        <span className="text-sm text-green-600">29% off</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing and Savings Section */}
              <div className="flex-1">
                {/* Savings message */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-700">
                      Yay! You have saved ₹134 on this order
                    </span>
                  </div>
                </div>

                {/* Bill details */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
                  <div className="space-y-2">
                    {/* Total MRP */}
                    <div className="flex justify-between">
                      <span>Total MRP</span>
                      <span>₹468</span>
                    </div>

                    {/* Total discount */}
                    <div className="flex justify-between text-green-600">
                      <span>Total Discount</span>
                      <span>- ₹134</span>
                    </div>

                    {/* Shipping charges */}
                    <div className="flex justify-between">
                      <span>Shipping Charges</span>
                      <span>₹50</span>
                    </div>

                    {/* COD charges */}
                    <div className="flex justify-between">
                      <span>COD Charges</span>
                      <span>₹20</span>
                    </div>

                    {/* Subtotal */}
                    <div className="flex justify-between font-semibold pt-2 border-t">
                      <span>Subtotal</span>
                      <span>₹404</span>
                    </div>
                  </div>
                </div>

                {/* Continue shopping button */}
                <Link href={"/"}>
                  <Button className="w-full mt-3">CONTINUE SHOPPING</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
