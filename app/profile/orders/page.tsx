// Import necessary components and libraries for the Orders page functionality
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { XCircle } from "lucide-react";
import { FaLink } from "react-icons/fa";
import Link from "next/link";

// Sample order data to display in the table
const orders = [
  {
    id: "66ed5ec9d316594990e71a19",
    products: [
      "https://res.cloudinary.com/dtxh3ew7s/image/upload/v1727352106/4_upscaled_hqhzq6.png",
    ],
    paymentMethod: "COD", // Cash on delivery payment method
    total: "₹ 2400", // Order total amount
    paid: false, // Payment status
  },
  {
    id: "66ec30c7671caca80b89518e",
    products: [
      "https://res.cloudinary.com/dtxh3ew7s/image/upload/v1727352106/2_upscaled_g6ibby.png",
      "https://res.cloudinary.com/dtxh3ew7s/image/upload/v1727352106/3_upscaled_smnoeu.png",
    ],
    paymentMethod: "COD",
    total: "₹ 5600",
    paid: false,
  },
  {
    id: "66dbb70be5922373191adf66",
    products: [
      "https://res.cloudinary.com/dtxh3ew7s/image/upload/v1727352106/1_upscaled_pku7p3.png",
    ],
    paymentMethod: "COD",
    total: "₹ 1280",
    paid: false,
  },
  {
    id: "66cab025fa11686711ff2fc8",
    products: [
      "https://res.cloudinary.com/dtxh3ew7s/image/upload/v1727352106/2_upscaled_g6ibby.png",
    ],
    paymentMethod: "RazorPay", // Payment made using RazorPay gateway
    total: "₹ 750",
    paid: false,
  },
];

// OrdersPage component to display user's order history
const OrdersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page heading */}
      <h1 className="heading text-center mb-6">MY ORDERS</h1>

      {/* Tabs to filter orders based on their payment status */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="paid">Paid Order</TabsTrigger>
          <TabsTrigger value="unpaid">Unpaid Order</TabsTrigger>
        </TabsList>

        {/* Tab content to display all orders */}
        <TabsContent value="all" className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-black">
                <TableHead className="w-[250px]">Order Id</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>View</TableHead>
              </TableRow>
            </TableHeader>

            {/* Table body displaying each order */}
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  {/* Order ID with a clickable link to view order details */}
                  <TableCell className="font-medium underline text-blue-500">
                    <Link href={`/order`}>{order.id}</Link>
                  </TableCell>

                  {/* Displaying product images for each order */}
                  <TableCell>
                    <div className="flex space-x-2">
                      {order.products.map((product, index) => (
                        <img
                          key={index}
                          src={product}
                          alt="_"
                          className="rounded-full bg-gray-200 w-[40px] h-[40px]"
                        />
                      ))}
                    </div>
                  </TableCell>

                  {/* Payment method used for the order */}
                  <TableCell>{order.paymentMethod}</TableCell>

                  {/* Total amount for the order */}
                  <TableCell>{order.total}</TableCell>

                  {/* Payment status: green checkmark for paid, red cross for unpaid */}
                  <TableCell>
                    {order.paid ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <XCircle className="text-red-500 h-5 w-5" />
                    )}
                  </TableCell>

                  {/* Link to view more details about the order */}
                  <TableCell>
                    <Link href={"/order"}>
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaLink size={24} color="black" />
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersPage;
