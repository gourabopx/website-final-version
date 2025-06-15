import { SubCategory } from "@/lib/generated/prisma";
import Link from "next/link";

interface CategorySectionProps {
  categories: SubCategory[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <div className="container mx-auto mb-[20px] px-4">
      <div className="flex justify-center">
        <div className="heading ownContainer uppercase sm:my-[40px]">
          SHOP BY CATEGORY
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="flex overflow-x-auto gap-4 sm:gap-6 scroll-smooth no-scrollbar">
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.id}
              className="flex-shrink-0 w-[250px]"
            >
              <div className="flex flex-col">
                <img
                  src={category.images[0]?.url || ""}
                  alt={category.name}
                  className="w-[250px] h-[250px] object-cover"
                />
                <h3 className="text-sm font-medium mt-2 text-center">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
