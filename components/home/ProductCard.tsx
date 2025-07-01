import { Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import type { Product } from "@prisma/client";

interface ProductCardProps {
  heading: string;
  products: Product[];
  shop?: boolean;
}

const ProductCard = ({ heading, products, shop }: ProductCardProps) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto mb-[20px]">
      <div className="flex justify-center">
        <div className="heading ownContainer uppercase sm:my-[40px]">
          {heading}
        </div>
      </div>

      <div className="relative">
        <div
          className={`${
            shop
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              : "flex overflow-x-auto gap-4 sm:gap-6 scroll-smooth no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4"
          } mb-8`}
        >
          {products.map((product) => {
            const mainImage = product.images[0]?.url;
            const discountedPrice = product.sizes[0]?.price
              ? product.sizes[0].price * (1 - (product.discount || 0) / 100)
              : 0;

            return (
              <Link
                href={`/product/${product.slug}`}
                key={product.id}
                className="group"
              >
                <div className="relative aspect-square mb-3">
                  {mainImage && (
                    <img
                      src={mainImage}
                      alt={product.title}
                      className="object-cover w-full h-full rounded-md"
                    />
                  )}
                </div>

                <div>
                  <p className="font-semibold text-lg">
                    {product.title.slice(0, 30)}
                    {product.title.length > 30 && "..."}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.numReviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg font-semibold">
                      ₹{discountedPrice.toFixed(2)}
                    </p>
                    {product.discount && product.discount > 0 && (
                      <>
                        <p className="text-gray-500 line-through">
                          ₹{product.sizes[0]?.price.toFixed(2)}
                        </p>
                        <p className="text-red-500">-{product.discount}%</p>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {!shop && (
        <div className="flex justify-center mt-8">
          <Link href="/shop">
            <Button
              variant={"outline"}
              className="w-[90%] sm:w-[347px] border-2 border-black textGap px-[10px] py-[20px]"
            >
              VIEW ALL
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
