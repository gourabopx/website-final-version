"use server";

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({
      success: false,
      error: "No search query provided",
    });
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        images: true,
        sizes: true,
      },
      take: 8,
    });

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Error searching products:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to search products",
    });
  }
}

export async function GET_RECOMMENDED(request: Request) {
  try {
    const products = await prisma.product.findMany({
      take: 4,
      orderBy: {
        sold: "desc",
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        images: true,
        sizes: true,
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
