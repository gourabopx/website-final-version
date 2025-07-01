import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      take: 4,
      orderBy: {
        sold: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        rating: true,
        images: true,
        sizes: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching recommended products:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch recommended products",
    });
  }
}
