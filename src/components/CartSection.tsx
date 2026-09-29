"use client";

import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/useCartStore";
import UndoButton from "./UndoButton";

const CartSection = () => {
  const selected = useCartStore((state) => state.selected);
  const removeItem = useCartStore((state) => state.removeItem);

  if (!selected.length) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
          Your cart is empty
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Add items from the grocery list and the total will update instantly.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {selected.length} item{selected.length > 1 ? "s" : ""} in cart
        </p>

        <UndoButton />
      </div>

      <ul className="divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white">
        {selected.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-4"
          >
            <div>
              <p className="font-medium text-gray-900">{item.name}</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {item.category}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-900">
                {formatCurrency(item.price)}
              </span>

              <button
                onClick={() => removeItem(item.id)}
                className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-red-500 transition hover:border-red-300 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSection;
