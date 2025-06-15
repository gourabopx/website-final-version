import BannerCarousel from "@/components/home/BannerCarousel";
import BlogImages from "@/components/home/BlogImages";
import CategorySection from "@/components/home/CategorySection";
import CrazyDeals from "@/components/home/CrazyDeals";
import NeedOfWebsite from "@/components/home/NeedOfWebsite";
import ProductCard from "@/components/home/ProductCard";
import ReviewSection from "@/components/home/ReviewSection";
import SpecialCombos from "@/components/home/SpecialCombos";
import React from "react";
import { getWebsiteBanners, getAppBanners } from "@/actions/banner.actions";
import { getSpecialCombos } from "@/actions/special-combos";
import { getCrazyDeals } from "@/actions/crazy-deals";
import { getBestSellerProducts, getNewArrivals } from "@/actions/products";
import { getAllSubCategories } from "@/actions/categories";

const HomePage = async () => {
  // Fetch all required data
  const website_banners = await getWebsiteBanners();
  const app_banners = await getAppBanners();
  const specialCombos = await getSpecialCombos();
  const bestSellers = await getBestSellerProducts(8); // Fetch top 8 best sellers
  const subCategories = await getAllSubCategories();
  const crazyDeals = await getCrazyDeals();
  const newArrivals = await getNewArrivals(8); // Fetch 8 newest products

  return (
    <div>
      <BannerCarousel
        banners={website_banners.data ?? []}
        app_banners={app_banners.data ?? []}
      />
      <SpecialCombos offers={specialCombos.data ?? []} />
      <ProductCard
        shop
        heading="BEST SELLERS"
        products={bestSellers.data ?? []}
      />
      <CategorySection categories={subCategories.data ?? []} />
      <CrazyDeals offers={crazyDeals.data ?? []} />
      <ProductCard
        shop
        heading="NEW ARRIVALS"
        products={newArrivals.data ?? []}
      />
      <NeedOfWebsite />
      <ReviewSection />
      <BlogImages />
    </div>
  );
};

export default HomePage;
