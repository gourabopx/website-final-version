"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useAtom } from "jotai";
import { cartMenuState } from "./store";
import { useCart, CartItem } from "@/store/useCart";
import { getBestSellerProducts } from "@/actions/products";

interface RecommendedProduct {
  id: string;
  title: string;
  images: { url: string | null }[];
  slug: string;
}

const CartDrawer = () => {
  const [cartMenuOpen, setCartMenuOpen] = useAtom(cartMenuState);
  const { items, removeFromCart, updateQuantity } = useCart();
  const [recommendedProducts, setRecommendedProducts] = useState<
    RecommendedProduct[]
  >([]);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      const result = await getBestSellerProducts(4);
      console.log(result);
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

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log(recommendedProducts);

  const handleOnClickCartMenu = () => {
    setCartMenuOpen(true);
  };

  return (
    <div className="relative">
      <Sheet open={cartMenuOpen} onOpenChange={setCartMenuOpen}>
        <SheetTrigger asChild>
          <Button
            onClick={() => handleOnClickCartMenu()}
            variant={"ghost"}
            size={"icon"}
            className="relative"
          >
            <ShoppingBag size={24} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full">
              {items.length}
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90%] max-w-[450px] sm:max-w-[540px]">
          <SheetHeader>
            <SheetTitle className="subHeading">CART</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 text-center">Your cart is empty</p>
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
                      <div className="flex items-center">
                        <button
                          className="p-1"
                          onClick={() =>
                            updateQuantity(item.uid, item.quantity - 1)
                          }
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="p-1"
                          onClick={() =>
                            updateQuantity(item.uid, item.quantity + 1)
                          }
                          disabled={item.quantity >= item.maxQuantity}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-xs sm:text-base">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => removeFromCart(item.uid)}
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
                      onClick={() => setCartMenuOpen(false)}
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
              <p className="text-sm text-gray-500">
                Tax included. Shipping calculated at checkout.
              </p>
              <Link href={"/checkout"}>
                <Button
                  className="w-full mt-4 bg-black text-white hover:bg-gray-800"
                  onClick={() => setCartMenuOpen(false)}
                >
                  CHECKOUT - ₹{total.toFixed(2)}
                </Button>
              </Link>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartDrawer;
