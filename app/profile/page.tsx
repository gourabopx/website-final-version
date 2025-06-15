import { redirect } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import ProfileClient from "./ProfileClient";

export default async function ProfilePage() {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect("/");
  }

  // Fetch orders
  const ordersData = await prisma.order.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      total: true,
      createdAt: true,
      isPaid: true,
      products: true,
    },
  });

  // Transform orders to match the client component's type
  const orders = ordersData.map((order) => ({
    id: order.id,
    total: order.total,
    createdAt: order.createdAt,
    isPaid: order.isPaid,
    products: order.products.map((product) => ({
      name: product.name || "",
      qty: product.qty || 0,
      price: product.price || 0,
    })),
  }));

  // Fetch shipping address
  const userData = await prisma.user.findUnique({
    where: { id: user.id },
    select: { address: true },
  });

  // Transform shipping address to match the client component's type
  const shippingAddress = userData?.address
    ? {
        firstName: userData.address.firstName || "",
        lastName: userData.address.lastName || "",
        phoneNumber: userData.address.phoneNumber || "",
        address1: userData.address.address1 || "",
        address2: userData.address.address2 || undefined,
        city: userData.address.city || "",
        state: userData.address.state || "",
        zipCode: userData.address.zipCode || "",
        country: userData.address.country || "",
      }
    : null;

  return (
    <ProfileClient
      initialUser={user}
      initialOrders={orders}
      initialShippingAddress={shippingAddress}
    />
  );
}
