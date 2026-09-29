import { useCartStore } from "@/store/useCartStore";
import { getVisibleItems } from "@/services/helper/getVisibleItems";

export const useVisibleItems = () => {
  const items = useCartStore((state) => state.items);
  const search = useCartStore((state) => state.search);
  const category = useCartStore((state) => state.category);
  const sort = useCartStore((state) => state.sort);

  return getVisibleItems(items, search, category, sort);
};
