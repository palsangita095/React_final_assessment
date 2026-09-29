"use client";

import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/useCartStore";
import { ProductCardProps } from "@/types/type/productcard.type";

export default function ProductCard({ item }: ProductCardProps) {
  const isSelected = useCartStore((state) =>
    state.selected.some((entry) => entry.id === item.id),
  );
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleClick = () => {
    if (isSelected) {
      removeItem(item.id);
      return;
    }

    addItem(item);
  };

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <span className="text-xs uppercase tracking-wide text-gray-500">
        {item.category}
      </span>

      <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.name}</h3>

      <p className="mt-2 text-xl font-bold text-gray-900">
        {formatCurrency(item.price)}
      </p>

      <button
        onClick={handleClick}
        className={`
          mt-4 w-full rounded-lg py-2 text-sm font-medium transition
          ${
            isSelected
              ? "border border-red-300 bg-white text-red-500 hover:bg-red-50"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }
        `}
      >
        {isSelected ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
