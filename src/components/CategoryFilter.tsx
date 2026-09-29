"use client";

import { groceryCategories } from "@/data/grocery.data";
import { useCartStore } from "@/store/useCartStore";

const CategoryFilter = () => {
  const category = useCartStore((state) => state.category);
  const setCategory = useCartStore((state) => state.setCategory);

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">Category</label>

      <div className="mt-2 flex flex-wrap gap-3">
        {groceryCategories.map((entry) => (
          <button
            key={entry}
            onClick={() => setCategory(entry)}
            className={`
              rounded-lg border px-3 py-2 text-sm font-medium transition-colors
              ${
                category === entry
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900"
              }
            `}
          >
            {entry}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
