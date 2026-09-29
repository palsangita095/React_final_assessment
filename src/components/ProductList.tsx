"use client";

import { useVisibleItems } from "@/hooks/useVisibleItems";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const visibleItems = useVisibleItems();

  if (!visibleItems.length) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
          No items found
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Try a different search keyword or pick another category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {visibleItems.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
