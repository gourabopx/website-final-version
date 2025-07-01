"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useDebounce } from "@/hooks/use-debounce";

interface ProductWithDetails extends Product {
  category: {
    name: string;
  };
}

const SearchModal = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<ProductWithDetails[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<
    ProductWithDetails[]
  >([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const trendingSearches = [
    "Perfume",
    "Bath & Body",
    "Gifting",
    "Crazy Deals",
    "Combos",
  ];

  useEffect(() => {
    // Fetch recommended products (best sellers) on mount
    const fetchRecommendedProducts = async () => {
      try {
        const response = await fetch("/api/search/recommended");
        const result = await response.json();
        if (result.success && result.data) {
          setRecommendedProducts(result.data as ProductWithDetails[]);
        }
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      }
    };
    fetchRecommendedProducts();
  }, []);

  useEffect(() => {
    // Search when debounced search term changes
    const performSearch = async () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        try {
          const response = await fetch(
            `/api/search?q=${encodeURIComponent(debouncedSearchTerm)}`
          );
          const result = await response.json();
          if (result.success && result.data) {
            setSearchResults(result.data as ProductWithDetails[]);
          }
        } catch (error) {
          console.error("Error searching products:", error);
        }
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    };
    performSearch();
  }, [debouncedSearchTerm]);

  const handleTrendingSearch = (term: string) => {
    setSearchTerm(term);
  };

  const renderProducts = (products: ProductWithDetails[]) => {
    if (isSearching) {
      return <div className="text-center py-4">Searching...</div>;
    }

    if (searchTerm && products.length === 0) {
      return (
        <div className="text-center py-4">
          No products found matching "{searchTerm}"
        </div>
      );
    }

    if (!products || products.length === 0) {
      return (
        <div className="text-center py-4">Loading recommended products...</div>
      );
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {products.map((product) => {
          const mainImage = product.images?.[0]?.url;
          const firstSize = product.sizes?.[0];
          const discountedPrice = firstSize?.price
            ? firstSize.price * (1 - (product.discount || 0) / 100)
            : 0;

          return (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="group"
              onClick={() => setOpen(false)}
            >
              <div className="aspect-square relative">
                {mainImage && (
                  <img
                    src={mainImage}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                )}
                {product.discount && product.discount > 0 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              <div className="mt-2">
                <h4 className="font-semibold text-sm">
                  {product.title.length > 30
                    ? `${product.title.slice(0, 30)}...`
                    : product.title}
                </h4>
                <p className="text-xs text-gray-500 mb-1">
                  {product.category.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold">
                    ₹{discountedPrice.toFixed(2)}
                  </span>
                  {product.discount && product.discount > 0 && firstSize && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{firstSize.price.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <Dialog>
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl mx-4 md:mx-6 lg:mx-auto p-4 sm:p-6 bg-background rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Search</h2>
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Input
            type="search"
            placeholder="Search..."
            className="w-full mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Trending Searches</h3>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((search) => (
                <Button
                  key={search}
                  variant={"outline"}
                  size={"sm"}
                  onClick={() => handleTrendingSearch(search)}
                >
                  {search}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">
              {searchTerm ? "Search Results" : "Recommended for you"}
            </h3>
            {renderProducts(searchTerm ? searchResults : recommendedProducts)}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SearchModal;
