"use client";

import { Inter } from "next/font/google";
import CartSection from "@/components/CartSection";
import CategoryFilter from "@/components/CategoryFilter";
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";
import SortOptions from "@/components/SortOptions";
import SummaryCard from "@/components/SummaryCard";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PANELS = [
  {
    id: "catalog",
    title: "Grocery Items",
    Component: ProductList,
  },
  {
    id: "cart",
    title: "Your Cart",
    Component: CartSection,
  },
  {
    id: "summary",
    title: "Order Summary",
    Component: SummaryCard,
  },
] as const;

const Home = () => {
  return (
    <main className={`min-h-screen bg-gray-50 text-gray-900 ${sans.className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
       
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Build Your Grocery Cart
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Pick multiple items, stack threshold discounts with coupon codes,
            and watch the total update live — your cart survives a reload.
          </p>
        </div>

       
        <div className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-3">
            <SearchBar />
            <CategoryFilter />
            <SortOptions />
          </div>
        </div>

       
        <div className="flex gap-2 flex-col flex-wrap">
          {PANELS.map(({ id, title, Component }) => (
            <section
              key={id}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 border-b border-gray-100 pb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {title}
                </h2>
              </div>
              <div className="flex-1">
                <Component />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
