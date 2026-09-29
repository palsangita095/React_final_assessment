# Grocery Item List Manager

A React-based grocery shopping list application with dynamic pricing, discounts, coupons, and persistent storage.

**Live demo:** [_WebPage_](https://react-final-assessmemt.vercel.app/)

---

## Features

- **Static Grocery Items** — Pre-loaded list of grocery items with name, price, and category `[{name: "product", price: 19, category: "dairy"}]`
- **Multi-Select Items** — Users can select multiple items; each item has a price
- **Dynamic Price Calculation** — Total price updates automatically when items are added or removed
- **Discount System** — Percentage-based discounts applied when total price crosses a threshold
- **Coupon Code System** — Enter promo codes for additional discounts
- **Sorting & Filtering** — Sort items by price (asc/desc) and filter by category
- **Search Bar** — Quickly find grocery items by name
- **Local Storage Persistence** — Cart state preserved on page reload
- **Undo Last Action** — Revert the last item addition or deletion

## Tech Stack

| Layer         | Choice                              |
| ------------- | ----------------------------------- |
| Framework     | React (with Vite)                   |
| Language      | TypeScript                          |
| State Mgmt    | React Context / useReducer          |
| Styling       | Tailwind CSS                        |
| Persistence   | localStorage API                    |
| Build Tool    | Vite                                |

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Setup

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd <repo-folder>

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview production build locally
npm run lint     # run eslint
```

## Project Structure

```
src/
├── components/
│   ├── GroceryList.tsx          # Main list with search, filter, sort
│   ├── GroceryItem.tsx          # Individual item with select/quantity
│   ├── CartSummary.tsx          # Total price, discounts, coupon input
│   ├── UndoButton.tsx           # Undo last action button
│   └── CategoryFilter.tsx       # Filter dropdown by category
├── context/
│   └── GroceryContext.tsx       # Global state (items, cart, history)
├── hooks/
│   ├── useGrocery.ts            # Custom hook for grocery logic
│   ├── useLocalStorage.ts       # Persist state to localStorage
│   └── useUndo.ts               # Undo/redo history management
├── data/
│   └── initialItems.ts          # Static grocery items data
├── types/
│   └── index.ts                 # TypeScript interfaces
├── utils/
│   ├── discountCalculator.ts    # Discount threshold logic
│   └── couponValidator.ts       # Coupon code validation
└── App.tsx                      # Root component
```

## How It Works -

1. **Initial Load** — Static grocery items load from `data/initialItems.ts` into global context
2. **Item Selection** — Users click items to add to cart; quantity adjustable per item
3. **Dynamic Pricing** — `CartSummary` recalculates total on every add/remove/quantity change
4. **Discounts** — When total crosses threshold (e.g., $50), percentage discount auto-applies
5. **Coupons** — Valid promo codes (e.g., `SAVE10`, `WELCOME20`) apply additional discounts
6. **Search/Filter/Sort** — Real-time filtering via controlled inputs in `GroceryList`
7. **Persistence** — `useLocalStorage` hook syncs cart state to browser localStorage
8. **Undo** — `useUndo` hook maintains action history; last action revertable via button

## Discount & Coupon Rules

| Rule                    | Configuration               |
| ----------------------- | --------------------------- |
| Threshold Discount      | 10% off when total ≥ $50    |
| Threshold Discount      | 15% off when total ≥ $100   |
| Coupon: `SAVE10`        | 10% off (stacks with threshold) |
| Coupon: `WELCOME20`     | 20% off (new users only)    |
| Coupon: `GROCERY5`      | $5 flat off                 |

## Known Limitations

- Coupon validation is client-side only (demo purposes)
- No backend — all data resets if localStorage is cleared
- Undo history limited to last 20 actions for memory efficiency
- Static item data; no admin UI to add/edit items

## Future Improvements

- Backend API for dynamic item management
- User authentication for personalized coupons
- Order history and receipt generation
- Responsive mobile-first redesign
- Unit/integration tests with Vitest + React Testing Library