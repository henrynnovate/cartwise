"use client";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

type Category = {
  name: string;
  slug: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  { name: "All", slug: "all", icon: <ShoppingBasket className="w-4 h-4" /> },
  { name: "T-shirts", slug: "t-shirts", icon: <Shirt className="w-4 h-4" /> },
  { name: "Shoes", slug: "shoes", icon: <Footprints className="w-4 h-4" /> },
  { name: "Accessories", slug: "accessories", icon: <Glasses className="w-4 h-4" /> },
  { name: "Bags", slug: "bags", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Dresses", slug: "dresses", icon: <Venus className="w-4 h-4" /> },
  { name: "Jackets", slug: "jackets", icon: <Shirt className="w-4 h-4" /> },
  { name: "Gloves", slug: "gloves", icon: <Hand className="w-4 h-4" /> },
];

const CategoryItem = ({
  category,
  selected,
  onSelect,
}: {
  category: Category;
  selected: boolean;
  onSelect: (slug: string) => void;
}) => {
  return (
    <button
      role="tab"
      aria-selected={selected}
      className={clsx(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors shrink-0",
        selected
          ? "bg-white shadow-sm text-gray-900"
          : "text-gray-500 hover:bg-gray-200"
      )}
      onClick={() => onSelect(category.slug)}
    >
      <div
        className={clsx(
          "p-2 rounded-full",
          selected ? "bg-gray-100" : "bg-gray-200"
        )}
      >
        {category.icon}
      </div>
      <span className="truncate">{category.name}</span>
    </button>
  );
};

const CategoryBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (!value || value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full bg-gray-100 rounded-lg mb-4">
      <div
        role="tablist"
        className="flex gap-7 overflow-x-auto scrollbar-hide px-3 py-3 snap-x snap-mandatory"
      >
        {categories.map((category) => (
          <div key={category.slug} className="snap-start">
            <CategoryItem
              category={category}
              selected={category.slug === selectedCategory}
              onSelect={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
