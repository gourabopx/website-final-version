import prisma from "@/lib/prisma";

export async function getAllHomeScreenOffers() {
  try {
    const offers = await prisma.homeScreenOffer.findMany();

    return {
      success: true,
      data: offers,
    };
  } catch (error) {
    console.error("Error fetching home screen offers:", error);
    return {
      success: false,
      error: "Failed to fetch home screen offers",
    };
  }
}

export async function getHomeScreenOffersByType(
  type: "specialCombo" | "crazyDeal"
) {
  try {
    const offers = await prisma.homeScreenOffer.findMany({
      where: {
        type: type,
      },
    });

    return {
      success: true,
      data: offers,
    };
  } catch (error) {
    console.error(`Error fetching ${type} offers:`, error);
    return {
      success: false,
      error: `Failed to fetch ${type} offers`,
    };
  }
}
