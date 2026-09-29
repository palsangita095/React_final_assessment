import { GroceryItem, SortOption } from "@/types/interface/grocery.interface";

export const getVisibleItems = (
  items: GroceryItem[],
  search: string,
  category: string,
  sort: SortOption,
): GroceryItem[] => {
  const keyword = search.trim().toLowerCase();

  const filtered = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(keyword);
    const matchesCategory = category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return [...filtered].sort((a, b) =>
    sort === "price-asc" ? a.price - b.price : b.price - a.price,
  );
};
