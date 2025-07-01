"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Heart } from "lucide-react";
import type { ProductSize } from "@prisma/client";
import { useCart } from "@/store/useCart";
import { useFavorites } from "@/store/useFavorites";

interface ProductActionsProps {
  sizes: ProductSize[];
  discount: number | null;
  productId: string;
  productName: string;
  productImage: string;
}

export default function ProductActions({
  sizes,
  discount,
  productId,
  productName,
  productImage,
}: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(
    sizes.length > 0 ? sizes[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCart((state) => state.addToCart);
  const { addToFavorites, items: favoriteItems } = useFavorites();

  const handleQuantityChange = (increment: boolean) => {
    if (!selectedSize) return;

    if (increment && quantity < selectedSize.qty) {
      setQuantity((prev) => prev + 1);
    } else if (!increment && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const getDiscountedPrice = (price: number) => {
    if (!discount) return price;
    return price * (1 - discount / 100);
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;

    const price = getDiscountedPrice(selectedSize.price);

    addToCart({
      productId,
      name: productName,
      price,
      quantity,
      image: productImage,
      size: selectedSize.size,
      maxQuantity: selectedSize.qty,
    });
  };

  const handleAddToFavorites = () => {
    if (!selectedSize) return;

    const price = getDiscountedPrice(selectedSize.price);

    addToFavorites({
      productId,
      name: productName,
      price,
      image: productImage,
      size: selectedSize.size,
      maxQuantity: selectedSize.qty,
    });
  };

  const isInFavorites = selectedSize
    ? favoriteItems.some(
        (item) =>
          item.productId === productId && item.size === selectedSize.size
      )
    : false;

  return (
    <div className="space-y-4">
      {/* Size Selection */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Select Size</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size: ProductSize) => (
            <Button
              key={size.size}
              variant={selectedSize?.size === size.size ? "default" : "outline"}
              className={`px-4 py-2 ${
                selectedSize?.size === size.size ? "bg-black text-white" : ""
              } ${size.qty === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => {
                setSelectedSize(size);
                setQuantity(1); // Reset quantity when size changes
              }}
              disabled={size.qty === 0}
            >
              {size.size}
              {size.qty === 0 && " (Out of Stock)"}
            </Button>
          ))}
        </div>
      </div>

      {/* Price and Quantity */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-4">
        <div className="mb-4 lg:mb-0">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl lg:text-3xl font-bold">
              ₹{getDiscountedPrice(selectedSize?.price || 0).toFixed(2)}
            </span>
            {discount && selectedSize && (
              <>
                <span className="text-lg text-gray-500 line-through">
                  ₹{selectedSize.price.toFixed(2)}
                </span>
                <span className="text-red-500 font-semibold">-{discount}%</span>
              </>
            )}
          </div>
          <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          {selectedSize && (
            <p className="text-sm text-gray-500">
              {selectedSize.qty} pieces available
            </p>
          )}
        </div>

        {/* Quantity Selector */}
        {selectedSize && selectedSize.qty > 0 && (
          <div className="flex items-center gap-0">
            <Button
              variant={"outline"}
              className="bg-[#F2F2F2]"
              size={"icon"}
              onClick={() => handleQuantityChange(false)}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center border-y-2 py-[6px]">
              {quantity}
            </span>
            <Button
              variant={"outline"}
              className="bg-[#F2F2F2]"
              size={"icon"}
              onClick={() => handleQuantityChange(true)}
              disabled={quantity >= selectedSize.qty}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          className="flex-1 bg-black text-white gap-4 py-7"
          disabled={!selectedSize || selectedSize.qty === 0}
          onClick={handleAddToCart}
        >
          {!selectedSize
            ? "SELECT SIZE"
            : selectedSize.qty === 0
              ? "OUT OF STOCK"
              : "ADD TO CART"}
        </Button>

        <Button
          variant={isInFavorites ? "default" : "outline"}
          className={`py-7 ${isInFavorites ? "bg-black text-white" : "border-2"}`}
          disabled={!selectedSize}
          onClick={handleAddToFavorites}
        >
          <Heart className={`h-6 w-6 ${isInFavorites ? "fill-current" : ""}`} />
        </Button>
      </div>
    </div>
  );
}
