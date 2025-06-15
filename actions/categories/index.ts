import prisma from "@/lib/prisma";

export async function getAllCategories() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subCategories: true,
      },
    });

    return {
      success: true,
      data: categories,
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      success: false,
      error: "Failed to fetch categories",
    };
  }
}

export async function getAllSubCategories() {
  try {
    const subCategories = await prisma.subCategory.findMany({
      include: {
        parent: true,
        productSubCategories: {
          include: {
            product: true,
          },
        },
      },
    });

    return {
      success: true,
      data: subCategories,
    };
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return {
      success: false,
      error: "Failed to fetch subcategories",
    };
  }
}

export async function getSubCategoriesByCategory(categoryId: string) {
  try {
    const subCategories = await prisma.subCategory.findMany({
      where: {
        parentId: categoryId,
      },
      include: {
        productSubCategories: {
          include: {
            product: true,
          },
        },
      },
    });

    return {
      success: true,
      data: subCategories,
    };
  } catch (error) {
    console.error("Error fetching subcategories by category:", error);
    return {
      success: false,
      error: "Failed to fetch subcategories by category",
    };
  }
}
