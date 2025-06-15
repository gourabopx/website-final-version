"use server";

import prisma from "@/lib/prisma";
import { CartItem } from "@/store/useCart";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { format } from "date-fns";
import { OrderConfirmationEmail } from "@/emails/OrderConfirmationEmail";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function createOrder(orderData: {
  userId: string;
  products: Array<{
    productId: string;
    name: string;
    image: string;
    size: string;
    qty: number;
    price: number;
  }>;
  shippingAddress: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  total: number;
  totalBeforeDiscount?: number;
  couponApplied?: string;
  totalSaved?: number;
  isPaid?: boolean;
  status?: string;
  paymentResult?: {
    id: string;
    status: string;
    email?: string;
  };
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
}) {
  try {
    // Create the order
    const order = await prisma.order.create({
      data: {
        userId: orderData.userId,
        products: orderData.products,
        shippingAddress: orderData.shippingAddress,
        paymentMethod: orderData.paymentMethod,
        total: orderData.total,
        totalBeforeDiscount: orderData.totalBeforeDiscount || orderData.total,
        couponApplied: orderData.couponApplied,
        totalSaved: orderData.totalSaved || 0,
        shippingPrice: 0, // You can modify this based on your shipping calculation
        status: orderData.status || "Processing",
        paymentResult: orderData.paymentResult,
        razorpay_order_id: orderData.razorpay_order_id,
        razorpay_payment_id: orderData.razorpay_payment_id,
      },
      include: {
        user: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    });

    // Send order confirmation email
    await sendOrderConfirmationEmail(order);

    return {
      success: true,
      data: order,
    };
  } catch (error) {
    console.error("Error creating order:", error);
    return {
      success: false,
      error: "Failed to create order",
    };
  }
}

async function sendOrderConfirmationEmail(order: any) {
  try {
    const emailHtml = await render(
      OrderConfirmationEmail({
        orderId: order.id,
        customerName: order.user.username,
        orderDate: format(order.createdAt, "MMMM d, yyyy"),
        products: order.products,
        shippingAddress: order.shippingAddress,
        paymentMethod: order.paymentMethod,
        orderStatus: order.status,
        subtotal: order.totalBeforeDiscount || 0,
        discount: order.totalSaved || 0,
        shippingPrice: order.shippingPrice || 0,
        taxPrice: order.taxPrice || 0,
        total: order.total,
      })
    );

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: order.user.email,
      subject: `Order Confirmation - Order #${order.id}`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending order confirmation email:", error);
    return { error: "Failed to send order confirmation email" };
  }
}
