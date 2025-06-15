import { redirect } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import CheckoutClient from "./CheckoutClient";

export default async function CheckoutPage() {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect("/login");
  }

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

  return <CheckoutClient initialShippingAddress={shippingAddress} />;
}
