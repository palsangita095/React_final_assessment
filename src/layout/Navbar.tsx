"use client";

import Link from "next/link";

import { useCartStore } from "@/store/useCartStore";

const navItems = [
  {
    name: "Shop",
    path: "/",
  },
];

const Navbar = () => {
  const cartCount = useCartStore((state) => state.selected.length);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-blue-600 transition-colors hover:text-blue-700"
        >
          FreshCart
        </Link>

        
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
          Cart
          <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
            {cartCount}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
