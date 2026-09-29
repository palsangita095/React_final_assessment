export type SortOption = "price-asc" | "price-desc";

export interface GroceryItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface DiscountThreshold {
  min: number;
  percent: number;
}

export interface CartSummary {
  itemCount: number;
  subtotal: number;
  thresholdPercent: number;
  thresholdDiscount: number;
  couponPercent: number;
  couponDiscount: number;
  total: number;
}

export interface CartState {
  items: GroceryItem[];

  selected: GroceryItem[];

  search: string;

  category: string;

  sort: SortOption;

  couponCode: string;

  past: GroceryItem[][];

  addItem: (item: GroceryItem) => void;

  removeItem: (id: string) => void;

  undo: () => void;

  setSearch: (value: string) => void;

  setCategory: (value: string) => void;

  setSort: (value: SortOption) => void;

  setCoupon: (code: string) => void;
}
