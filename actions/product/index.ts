import prisma from "@/lib/prisma";

export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        slug: slug,
      },
      include: {
        category: true,
        productSubCategories: {
          include: {
            subCategory: true,
          },
        },
        productReviews: {
          include: {
            review: {
              include: {
                reviewBy: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      return {
        success: false,
        error: "Product not found",
      };
    }

    return {
      success: true,
      data: product,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      success: false,
      error: "Failed to fetch product",
    };
  }
}

export async function getRelatedProducts(
  categoryId: string,
  currentProductId: string,
  limit: number = 4
) {
  try {
    const relatedProducts = await prisma.product.findMany({
      where: {
        categoryId: categoryId,
        id: {
          not: currentProductId,
        },
      },
      take: limit,
      include: {
        category: true,
      },
    });

    return {
      success: true,
      data: relatedProducts,
    };
  } catch (error) {
    console.error("Error fetching related products:", error);
    return {
      success: false,
      error: "Failed to fetch related products",
    };
  }
}
