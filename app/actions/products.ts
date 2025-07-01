"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export interface ProductFilters {
  categories?: string[];
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  pageSize?: number;
}

type ProductWithIncludes = Prisma.ProductGetPayload<{
  include: {
    images: true;
    sizes: true;
    productSubCategories: {
      include: {
        subCategory: true;
      };
    };
  };
}>;

export async function getProducts(filters: ProductFilters = {}) {
  try {
    const {
      categories = [],
      minPrice,
      maxPrice,
      sort = "recommended",
      page = 1,
      pageSize = 12,
    } = filters;

    const where = {
      AND: [
        categories.length > 0
          ? {
              productSubCategories: {
                some: {
                  subCategory: {
                    id: { in: categories },
                  },
                },
              },
            }
          : {},
        minPrice !== undefined
          ? {
              sizes: {
                some: {
                  price: {
                    gte: minPrice,
                  },
                },
              },
            }
          : {},
        maxPrice !== undefined
          ? {
              sizes: {
                some: {
                  price: {
                    lte: maxPrice,
                  },
                },
              },
            }
          : {},
      ],
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput =
      sort === "price-asc"
        ? { sizes: { _count: "asc" } }
        : sort === "price-desc"
          ? { sizes: { _count: "desc" } }
          : sort === "rating"
            ? { rating: "desc" }
            : sort === "newest"
              ? { createdAt: "desc" }
              : { updatedAt: "desc" };

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          productSubCategories: {
            include: {
              subCategory: true,
            },
          },
        },
      }),
      prisma.product.count({ where }),
    ]);

    return {
      products: products as ProductWithIncludes[],
      total,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subCategories: true,
      },
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function getPriceRange() {
  try {
    // Get the lowest and highest prices from all product sizes
    const products = await prisma.product.findMany({
      select: {
        sizes: true,
      },
    });

    let minPrice = Infinity;
    let maxPrice = -Infinity;

    products.forEach((product) => {
      product.sizes.forEach((size) => {
        minPrice = Math.min(minPrice, size.price);
        maxPrice = Math.max(maxPrice, size.price);
      });
    });

    return {
      success: true,
      data: {
        min: minPrice === Infinity ? 0 : Math.floor(minPrice),
        max: maxPrice === -Infinity ? 1000 : Math.ceil(maxPrice),
      },
    };
  } catch (error) {
    console.error("Error fetching price range:", error);
    return { success: false, error: "Failed to fetch price range" };
  }
}
