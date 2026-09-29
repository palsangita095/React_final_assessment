import { GroceryItem } from "@/types/interface/grocery.interface";

export const staticGroceryItems: GroceryItem[] = [
  { id: "g-01", name: "Fresh Apples", price: 19, category: "Fruits" },
  { id: "g-02", name: "Banana Bunch", price: 12, category: "Fruits" },
  { id: "g-03", name: "Strawberries", price: 45, category: "Fruits" },
  { id: "g-04", name: "Spinach Pack", price: 25, category: "Vegetables" },
  { id: "g-05", name: "Tomatoes", price: 18, category: "Vegetables" },
  { id: "g-06", name: "Baby Carrots", price: 15, category: "Vegetables" },
  { id: "g-07", name: "Whole Milk", price: 22, category: "Dairy" },
  { id: "g-08", name: "Cheddar Cheese", price: 65, category: "Dairy" },
  { id: "g-09", name: "Greek Yogurt", price: 38, category: "Dairy" },
  { id: "g-10", name: "Sourdough Bread", price: 35, category: "Bakery" },
  { id: "g-11", name: "Croissant Pack", price: 42, category: "Bakery" },
  { id: "g-12", name: "Orange Juice", price: 28, category: "Beverages" },
  { id: "g-13", name: "Cold Brew Coffee", price: 75, category: "Beverages" },
  { id: "g-14", name: "Potato Chips", price: 20, category: "Snacks" },
  { id: "g-15", name: "Dark Chocolate", price: 32, category: "Snacks" },
];

export const groceryCategories: string[] = [
  "All",
  ...Array.from(new Set(staticGroceryItems.map((item) => item.category))),
];
