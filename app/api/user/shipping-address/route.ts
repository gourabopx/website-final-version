import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: { address: true },
    });

    return NextResponse.json(userData?.address || null);
  } catch (error) {
    console.error("Error fetching shipping address:", error);
    return NextResponse.json(
      { error: "Failed to fetch shipping address" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const addressData = await request.json();

    // Update user's shipping address
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        address: addressData,
      },
      select: { address: true },
    });

    return NextResponse.json(updatedUser.address);
  } catch (error) {
    console.error("Error updating shipping address:", error);
    return NextResponse.json(
      { error: "Failed to update shipping address" },
      { status: 500 }
    );
  }
}
