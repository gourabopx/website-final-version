"use server";
import prisma from "@/lib/prisma";

export async function getBestSellerProducts(limit: number = 10) {
  try {
    const bestSellers = await prisma.product.findMany({
      orderBy: {
        sold: "desc",
      },
      take: limit,
      include: {
        category: true,
        productSubCategories: {
          include: {
            subCategory: true,
          },
        },
      },
    });

    return {
      success: true,
      data: bestSellers,
    };
  } catch (error) {
    console.error("Error fetching best seller products:", error);
    return {
      success: false,
      error: "Failed to fetch best seller products",
    };
  }
}

export async function getFeaturedProducts(limit: number = 10) {
  try {
    const featuredProducts = await prisma.product.findMany({
      where: {
        featured: true,
      },
      take: limit,
      include: {
        category: true,
        productSubCategories: {
          include: {
            subCategory: true,
          },
        },
      },
    });

    return {
      success: true,
      data: featuredProducts,
    };
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return {
      success: false,
      error: "Failed to fetch featured products",
    };
  }
}

export async function getNewArrivals(limit?: number) {
  try {
    const products = await prisma.product.findMany({
      take: limit,
      orderBy: {
        createdAt: "desc", // Order by creation date, newest first
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return { success: true, data: products };
  } catch (error) {
    console.error("Error fetching new arrivals:", error);
    return { success: false, error: "Failed to fetch new arrivals" };
  }
}

export async function searchProducts(query: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive", // Case-insensitive search
        },
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      take: 8, // Limit to 8 results
    });

    return { success: true, data: products };
  } catch (error) {
    console.error("Error searching products:", error);
    return { success: false, error: "Failed to search products" };
  }
}
export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        productSubCategories: {
          include: {
            subCategory: true,
          },
        },
      },
    });
    return { success: true, data: products };
  } catch (error) {
    console.error("Error fetching all products:", error);
    return { success: false, error: "Failed to fetch all products" };
  }
}

export async function sortProducts(sortBy: string) {
  try {
    let orderBy: any = {};

    switch (sortBy) {
      case "Featured":
        return await getFeaturedProducts();
      case "Price: Low to High":
        // For MongoDB, we need to sort by the minimum price in the sizes array
        const productsAsc = await prisma.product.findMany({
          include: {
            category: true,
            productSubCategories: {
              include: {
                subCategory: true,
              },
            },
          },
        });
        return {
          success: true,
          data: productsAsc.sort((a, b) => {
            const minPriceA = Math.min(...a.sizes.map((s) => s.price));
            const minPriceB = Math.min(...b.sizes.map((s) => s.price));
            return minPriceA - minPriceB;
          }),
        };
      case "Price: High to Low":
        // For MongoDB, we need to sort by the maximum price in the sizes array
        const productsDesc = await prisma.product.findMany({
          include: {
            category: true,
            productSubCategories: {
              include: {
                subCategory: true,
              },
            },
          },
        });
        return {
          success: true,
          data: productsDesc.sort((a, b) => {
            const maxPriceA = Math.max(...a.sizes.map((s) => s.price));
            const maxPriceB = Math.max(...b.sizes.map((s) => s.price));
            return maxPriceB - maxPriceA;
          }),
        };
      case "Newest":
        orderBy = { createdAt: "desc" };
        break;
      case "Best Sellers":
        orderBy = { sold: "desc" };
        break;
      default:
        orderBy = { createdAt: "desc" }; // Default sorting
    }

    const products = await prisma.product.findMany({
      orderBy,
      include: {
        category: true,
        productSubCategories: {
          include: {
            subCategory: true,
          },
        },
      },
    });

    return { success: true, data: products };
  } catch (error) {
    console.error("Error sorting products:", error);
    return { success: false, error: "Failed to sort products" };
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: { products: true },
        },
        subCategories: {
          include: {
            _count: {
              select: { productSubCategories: true },
            },
          },
        },
      },
    });

    return {
      success: true,
      data: categories.map((cat) => ({
        ...cat,
        productCount: cat._count.products,
      })),
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { success: false, error: "Failed to fetch categories" };
  }
}

export async function getProductStats() {
  try {
    const products = await prisma.product.findMany({
      select: {
        sizes: true,
      },
    });

    // Get unique sizes and price range
    const uniqueSizes = new Set<string>();
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let sizeStats: { [key: string]: number } = {};

    products.forEach((product) => {
      product.sizes.forEach((size) => {
        uniqueSizes.add(size.size);
        if (size.price < minPrice) minPrice = size.price;
        if (size.price > maxPrice) maxPrice = size.price;

        // Count products for each size
        if (sizeStats[size.size]) {
          sizeStats[size.size]++;
        } else {
          sizeStats[size.size] = 1;
        }
      });
    });

    return {
      success: true,
      data: {
        sizes: Array.from(uniqueSizes).map((size) => ({
          name: size,
          count: sizeStats[size],
        })),
        priceRange: {
          min: minPrice === Infinity ? 0 : minPrice,
          max: maxPrice === -Infinity ? 0 : maxPrice,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching product stats:", error);
    return { success: false, error: "Failed to fetch product stats" };
  }
}

export async function getFilteredProducts(filters: {
  categories?: string[];
  subCategories?: string[];
  sizes?: string[];
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}) {
  try {
    let whereClause: any = {};

    // Add category filter
    if (filters.categories && filters.categories.length > 0) {
      whereClause.category = {
        name: {
          in: filters.categories,
        },
      };
    }

    // Add subcategory filter
    if (filters.subCategories && filters.subCategories.length > 0) {
      whereClause.productSubCategories = {
        some: {
          subCategory: {
            name: {
              in: filters.subCategories,
            },
          },
        },
      };
    }

    // Add size filter
    if (filters.sizes && filters.sizes.length > 0) {
      whereClause.sizes = {
        some: {
          size: {
            in: filters.sizes,
          },
        },
      };
    }

    // Add price range filter
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      whereClause.sizes = {
        some: {
          AND: [
            filters.minPrice !== undefined
              ? { price: { gte: filters.minPrice } }
              : {},
            filters.maxPrice !== undefined
              ? { price: { lte: filters.maxPrice } }
              : {},
          ],
        },
      };
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      include: {
        category: true,
        productSubCategories: {
          include: {
            subCategory: true,
          },
        },
      },
    });

    // Handle sorting after fetching
    let sortedProducts = [...products];
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "Price: Low to High":
          sortedProducts.sort((a, b) => {
            const minPriceA = Math.min(...a.sizes.map((s) => s.price));
            const minPriceB = Math.min(...b.sizes.map((s) => s.price));
            return minPriceA - minPriceB;
          });
          break;
        case "Price: High to Low":
          sortedProducts.sort((a, b) => {
            const maxPriceA = Math.max(...a.sizes.map((s) => s.price));
            const maxPriceB = Math.max(...b.sizes.map((s) => s.price));
            return maxPriceB - maxPriceA;
          });
          break;
        case "Newest":
          sortedProducts.sort(
            (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
          );
          break;
        case "Best Sellers":
          sortedProducts.sort((a, b) => (b.sold || 0) - (a.sold || 0));
          break;
      }
    }

    return { success: true, data: sortedProducts };
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    return { success: false, error: "Failed to fetch filtered products" };
  }
}
