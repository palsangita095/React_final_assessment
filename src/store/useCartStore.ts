import { create } from "zustand";
import { persist } from "zustand/middleware";

import { staticGroceryItems } from "@/data/grocery.data";
import { CartState } from "@/types/interface/grocery.interface";

const HISTORY_LIMIT = 20;

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: staticGroceryItems,

      selected: [],

      search: "",

      category: "All",

      sort: "price-asc",

      couponCode: "",

      past: [],

      addItem: (item) =>
        set((state) => {
          if (state.selected.some((entry) => entry.id === item.id)) return state;

          return {
            past: [...state.past, state.selected].slice(-HISTORY_LIMIT),
            selected: [...state.selected, item],
          };
        }),

      removeItem: (id) =>
        set((state) => {
          if (!state.selected.some((entry) => entry.id === id)) return state;

          return {
            past: [...state.past, state.selected].slice(-HISTORY_LIMIT),
            selected: state.selected.filter((entry) => entry.id !== id),
          };
        }),

      undo: () =>
        set((state) => {
          const past = [...state.past];
          const previous = past.pop();

          if (!previous) return state;

          return { past, selected: previous };
        }),

      setSearch: (value) => set({ search: value }),

      setCategory: (value) => set({ category: value }),

      setSort: (value) => set({ sort: value }),

      setCoupon: (code) => set({ couponCode: code }),
    }),
    {
      name: "grocery-cart-storage",
      skipHydration: true,
      partialize: (state) => ({
        selected: state.selected,
        couponCode: state.couponCode,
      }),
    },
  ),
);
