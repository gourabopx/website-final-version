import prisma from "@/lib/prisma";

export async function getTopBars() {
  try {
    const topBars = await prisma.topBar.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(topBars);

    return { success: true, data: topBars };
  } catch (error) {
    console.error("Error fetching top bars:", error);
    return { error: "Failed to fetch top bars" };
  }
}
