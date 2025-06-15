"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getCategories, getProductStats } from "@/actions/products/index";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

type Category = {
  id: string;
  name: string;
  productCount: number;
  subCategories: {
    id: string;
    name: string;
    _count: {
      productSubCategories: number;
    };
  }[];
};

type Size = {
  name: string;
  count: number;
};

interface FilterButtonProps {
  isLoading?: boolean;
}

// Loading skeleton for filter options
const FilterSkeleton = () => (
  <div className="space-y-6">
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <div className="space-y-2">
            {Array(4)
              .fill(0)
              .map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
          </div>
        </div>
      ))}
  </div>
);

const FilterButton = ({ isLoading = false }: FilterButtonProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [isFilterLoading, setIsFilterLoading] = useState(true);

  // Selected filters state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [currentPriceRange, setCurrentPriceRange] = useState<[number, number]>([
    0, 0,
  ]);

  useEffect(() => {
    // Fetch initial data
    const fetchData = async () => {
      setIsFilterLoading(true);
      try {
        const [categoriesResult, statsResult] = await Promise.all([
          getCategories(),
          getProductStats(),
        ]);

        if (categoriesResult.success && categoriesResult.data) {
          setCategories(categoriesResult.data);
        }

        if (statsResult.success && statsResult.data) {
          setSizes(statsResult.data.sizes);
          const { min, max } = statsResult.data.priceRange;
          setPriceRange([min, max]);
          setCurrentPriceRange([min, max]);
          setMaxPrice(max);
        }
      } catch (error) {
        console.error("Error fetching filter data:", error);
      } finally {
        setIsFilterLoading(false);
      }
    };

    fetchData();

    // Initialize filters from URL
    const urlCategories =
      searchParams.get("categories")?.split(",").filter(Boolean) || [];
    const urlSubCategories =
      searchParams.get("subCategories")?.split(",").filter(Boolean) || [];
    const urlSizes =
      searchParams.get("sizes")?.split(",").filter(Boolean) || [];
    const urlMinPrice = Number(searchParams.get("minPrice")) || 0;
    const urlMaxPrice = Number(searchParams.get("maxPrice")) || maxPrice;

    setSelectedCategories(urlCategories);
    setSelectedSubCategories(urlSubCategories);
    setSelectedSizes(urlSizes);
    setCurrentPriceRange([urlMinPrice, urlMaxPrice]);
  }, [searchParams, maxPrice]);

  const handleApplyFilters = () => {
    const params = new URLSearchParams(window.location.search);

    // Update URL parameters
    if (selectedCategories.length) {
      params.set("categories", selectedCategories.join(","));
    } else {
      params.delete("categories");
    }

    if (selectedSubCategories.length) {
      params.set("subCategories", selectedSubCategories.join(","));
    } else {
      params.delete("subCategories");
    }

    if (selectedSizes.length) {
      params.set("sizes", selectedSizes.join(","));
    } else {
      params.delete("sizes");
    }

    params.set("minPrice", currentPriceRange[0].toString());
    params.set("maxPrice", currentPriceRange[1].toString());

    // Preserve sort parameter if it exists
    const sortBy = searchParams.get("sortBy");
    if (sortBy) {
      params.set("sortBy", sortBy);
    }

    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setSelectedSizes([]);
    setCurrentPriceRange([priceRange[0], priceRange[1]]);

    // Preserve only sort parameter
    const params = new URLSearchParams();
    const sortBy = searchParams.get("sortBy");
    if (sortBy) {
      params.set("sortBy", sortBy);
    }

    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const FilterContent = () => (
    <div className="p-4 bg-white shadow-lg rounded-lg w-full">
      {isFilterLoading ? (
        <FilterSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Price Filter */}
          <div>
            <h3 className="font-semibold mb-2">Price</h3>
            <Button
              variant="ghost"
              className="mb-2 p-0 h-auto text-sm font-normal hover:bg-transparent"
              onClick={() =>
                setCurrentPriceRange([priceRange[0], priceRange[1]])
              }
              disabled={isLoading}
            >
              Reset
            </Button>
            <Slider
              defaultValue={priceRange}
              min={priceRange[0]}
              max={priceRange[1]}
              step={1}
              value={currentPriceRange}
              onValueChange={(value) =>
                setCurrentPriceRange(value as [number, number])
              }
              className="mb-2"
              disabled={isLoading}
            />
            <p className="text-sm">
              Price: ₹{currentPriceRange[0]} - ₹{currentPriceRange[1]}
            </p>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <Button
              variant="ghost"
              className="mb-2 p-0 h-auto text-sm font-normal hover:bg-transparent"
              onClick={() => setSelectedCategories([])}
              disabled={isLoading}
            >
              Reset
            </Button>
            {categories.map((category) => (
              <div key={category.id} className="space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.name)}
                    onCheckedChange={(checked) => {
                      setSelectedCategories(
                        checked
                          ? [...selectedCategories, category.name]
                          : selectedCategories.filter(
                              (c) => c !== category.name
                            )
                      );
                    }}
                    disabled={isLoading}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {category.name} ({category.productCount})
                  </label>
                </div>
                {/* Subcategories */}
                <div className="ml-4 space-y-2">
                  {category.subCategories.map((subCategory) => (
                    <div
                      key={subCategory.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`subcategory-${subCategory.id}`}
                        checked={selectedSubCategories.includes(
                          subCategory.name
                        )}
                        onCheckedChange={(checked) => {
                          setSelectedSubCategories(
                            checked
                              ? [...selectedSubCategories, subCategory.name]
                              : selectedSubCategories.filter(
                                  (sc) => sc !== subCategory.name
                                )
                          );
                        }}
                        disabled={isLoading}
                      />
                      <label
                        htmlFor={`subcategory-${subCategory.id}`}
                        className="text-sm cursor-pointer"
                      >
                        {subCategory.name} (
                        {subCategory._count.productSubCategories})
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sizes Filter */}
          <div>
            <h3 className="font-semibold mb-2">Sizes</h3>
            <Button
              variant="ghost"
              className="mb-2 p-0 h-auto text-sm font-normal hover:bg-transparent"
              onClick={() => setSelectedSizes([])}
              disabled={isLoading}
            >
              Reset
            </Button>
            {sizes.map((size) => (
              <div key={size.name} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={`size-${size.name}`}
                  checked={selectedSizes.includes(size.name)}
                  onCheckedChange={(checked) => {
                    setSelectedSizes(
                      checked
                        ? [...selectedSizes, size.name]
                        : selectedSizes.filter((s) => s !== size.name)
                    );
                  }}
                  disabled={isLoading}
                />
                <label
                  htmlFor={`size-${size.name}`}
                  className="text-sm cursor-pointer"
                >
                  {size.name} ({size.count})
                </label>
              </div>
            ))}
          </div>

          {/* Availability Filter */}
          <div>
            <h3 className="font-semibold mb-2">Availability</h3>
            <Button
              variant="ghost"
              className="mb-2 p-0 h-auto text-sm font-normal hover:bg-transparent"
              disabled={isLoading}
            >
              Reset
            </Button>
            {/* We can add availability filter later if needed */}
          </div>
        </div>
      )}

      {/* Apply & Clear buttons */}
      <div className="flex justify-between mt-6">
        <Button
          className="bg-black text-white hover:bg-gray-800 disabled:opacity-50"
          onClick={handleApplyFilters}
          disabled={isLoading || isFilterLoading}
        >
          APPLY
        </Button>
        <Button
          variant="outline"
          onClick={handleClearFilters}
          disabled={isLoading || isFilterLoading}
        >
          Clear
        </Button>
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      {isMobile ? (
        // Mobile: Use Sheet for the modal behavior
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="bg-black text-white px-4 py-2 flex items-center disabled:opacity-50"
              disabled={isLoading}
            >
              FILTER <span className="ml-2">+</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-full overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <FilterContent />
          </SheetContent>
        </Sheet>
      ) : (
        // Desktop: Use Dialog for modal-like behavior
        <>
          <Button
            className="bg-black text-white px-4 py-2 flex items-center disabled:opacity-50"
            onClick={() => setIsOpen(!isOpen)}
            disabled={isLoading}
          >
            FILTER{" "}
            {isOpen ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-[80vw]">
              <DialogHeader>
                <DialogTitle>Filters</DialogTitle>
              </DialogHeader>
              <FilterContent />
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default FilterButton;
