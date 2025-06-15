// "use client" directive indicates this component is client-side only
"use client";

// Import necessary components and libraries
import ProductCard from "@/components/home/ProductCard";
import FilterButton from "@/components/shop/FilterButton";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  sortProducts,
  getFilteredProducts,
} from "@/actions/products/index";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

// Define Product type based on your Prisma schema
type ProductSize = {
  size: string;
  qty: number;
  price: number;
  sold: number;
};

type Image = {
  url: string | null;
  public_id: string | null;
};

type ProductBenefit = {
  name: string;
};

type ProductIngredient = {
  name: string;
};

type Product = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  brand: string | null;
  slug: string;
  rating: number;
  numReviews: number;
  featured: boolean;
  sku: string;
  images: Image[];
  sizes: ProductSize[];
  discount: number | null;
  sold: number | null;
  categoryId: string;
  benefits: ProductBenefit[];
  ingredients: ProductIngredient[];
  category: {
    name: string;
    id: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    images: Image[];
  };
  productSubCategories: {
    id: string;
    productId: string;
    subCategoryId: string;
    createdAt: Date;
    updatedAt: Date;
    subCategory: {
      id: string;
      name: string;
      slug: string;
      parentId: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
  createdAt: Date;
  updatedAt: Date;
};

// Loading skeleton component for products
const ProductsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array(8)
      .fill(0)
      .map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
  </div>
);

// Empty state component
const EmptyState = () => (
  <div className="text-center py-12">
    <h3 className="text-2xl font-semibold mb-2">No Products Found</h3>
    <p className="text-gray-600 mb-6">
      We couldn't find any products matching your filters.
    </p>
    <button
      onClick={() => (window.location.href = "/shop")}
      className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
    >
      Clear All Filters
    </button>
  </div>
);

// ShopPage component displays the product listing page with sorting and filtering functionality
const ShopPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // State to manage the sorting options for the products
  const [sortBy, setSortBy] = useState(
    searchParams.get("sortBy") || "Featured"
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // Get all filter parameters from URL
        const categories = searchParams
          .get("categories")
          ?.split(",")
          .filter(Boolean);
        const subCategories = searchParams
          .get("subCategories")
          ?.split(",")
          .filter(Boolean);
        const sizes = searchParams.get("sizes")?.split(",").filter(Boolean);
        const minPrice = Number(searchParams.get("minPrice")) || undefined;
        const maxPrice = Number(searchParams.get("maxPrice")) || undefined;

        // Check if any filters are applied
        const hasFilters =
          categories?.length ||
          subCategories?.length ||
          sizes?.length ||
          minPrice ||
          maxPrice;

        let result;
        if (hasFilters) {
          // If filters are applied, use getFilteredProducts
          result = await getFilteredProducts({
            categories,
            subCategories,
            sizes,
            minPrice,
            maxPrice,
            sortBy,
          });
        } else if (sortBy === "Featured") {
          result = await getAllProducts();
        } else {
          result = await sortProducts(sortBy);
        }

        setProducts(result?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams, sortBy]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    const params = new URLSearchParams(window.location.search);
    params.set("sortBy", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page title */}
      <h1 className="heading mb-8 text-center">Shop All Products</h1>

      {/* Container for the filter button and sorting dropdown */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex">
          {/* Filter button component to open product filtering options */}
          <FilterButton isLoading={isLoading} />

          {/* Sorting dropdown to allow users to sort products by criteria like price or rating */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="appearance-none bg-black text-white px-4 py-2 pr-8 border-l border-white disabled:opacity-50"
              disabled={isLoading}
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Sellers</option>
            </select>

            {/* Chevron icon added to the dropdown to indicate it is clickable */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Display loading, empty state, or products */}
      {isLoading ? (
        <ProductsSkeleton />
      ) : products.length === 0 ? (
        <EmptyState />
      ) : (
        <ProductCard heading="" products={products} shop={true} />
      )}
    </div>
  );
};

export default ShopPage;
