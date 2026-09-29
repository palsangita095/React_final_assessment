"use client";

import { useCartStore } from "@/store/useCartStore";
import { SortOption } from "@/types/interface/grocery.interface";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const SortOptions = () => {
  const sort = useCartStore((state) => state.sort);
  const setSort = useCartStore((state) => state.setSort);

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">Sort by Price</label>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value as SortOption)}
        className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-blue-500"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortOptions;
