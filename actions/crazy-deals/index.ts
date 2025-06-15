import prisma from "@/lib/prisma";
import { OfferType } from "@/lib/generated/prisma";

export async function getCrazyDeals() {
  try {
    const crazyDeals = await prisma.homeScreenOffer.findMany({
      where: {
        type: OfferType.crazyDeal,
      },
    });

    return {
      success: true,
      data: crazyDeals,
    };
  } catch (error) {
    console.error("Error fetching crazy deals:", error);
    return {
      success: false,
      error: "Failed to fetch crazy deals",
    };
  }
}
