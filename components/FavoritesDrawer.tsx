"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X, Plus } from "lucide-react";
import Link from "next/link";
import { useAtom } from "jotai";
import { favoritesMenuState } from "./store";
import { useFavorites } from "@/store/useFavorites";
import { getBestSellerProducts } from "@/actions/products";

interface RecommendedProduct {
  id: string;
  title: string;
  images: { url: string | null }[];
  slug: string;
}

const FavoritesDrawer = () => {
  const [favoritesMenuOpen, setFavoritesMenuOpen] = useAtom(favoritesMenuState);
  const { items, removeFromFavorites, addToCart, addAllToCart } =
    useFavorites();
  const [recommendedProducts, setRecommendedProducts] = useState<
    RecommendedProduct[]
  >([]);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      const result = await getBestSellerProducts(4);
      if (result.success && result.data) {
        setRecommendedProducts(
          result.data.map((product) => ({
            id: product.id,
            title: product.title,
            images: product.images,
            slug: product.slug,
          }))
        );
      }
    };
    fetchRecommendedProducts();
  }, []);

  const handleOnClickFavoritesMenu = () => {
    setFavoritesMenuOpen(true);
  };

  return (
    <div className="relative">
      <Sheet open={favoritesMenuOpen} onOpenChange={setFavoritesMenuOpen}>
        <SheetTrigger asChild>
          <Button
            onClick={() => handleOnClickFavoritesMenu()}
            variant={"ghost"}
            size={"icon"}
            className="relative"
          >
            <Heart size={24} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
              {items.length}
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90%] max-w-[450px] sm:max-w-[540px]">
          <SheetHeader>
            <SheetTitle className="subHeading">FAVORITES</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Heart className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 text-center">
                  Your favorites list is empty
                </p>
                <Link href="/shop">
                  <Button className="mt-4 bg-black text-white">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  className="flex items-center space-x-4 border-b-2 pb-3"
                  key={item.uid}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-xs sm:text-sm tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Size: {item.size}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addToCart(item)}
                        className="flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Add to Cart
                      </Button>
                      <p className="font-semibold text-xs sm:text-base">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => removeFromFavorites(item.uid)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Recommended Products */}
            {recommendedProducts.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Recommended Products</h3>
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {recommendedProducts.map((product) => (
                    <Link
                      href={`/product/${product.slug}`}
                      key={product.id}
                      className="flex-shrink-0 w-32"
                      onClick={() => setFavoritesMenuOpen(false)}
                    >
                      <img
                        src={product.images[0]?.url || ""}
                        alt={product.title}
                        className="w-full h-32 object-cover mb-2"
                      />
                      <p className="text-sm truncate">{product.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="absolute bottom-2 w-[90%] mt-6 bg-white">
              <Button
                className="w-full mt-4 bg-black text-white hover:bg-gray-800"
                onClick={() => {
                  addAllToCart();
                  setFavoritesMenuOpen(false);
                }}
              >
                ADD ALL TO CART
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FavoritesDrawer;
