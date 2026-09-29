"use client";

import { useCartStore } from "@/store/useCartStore";

const SearchBar = () => {
  const search = useCartStore((state) => state.search);
  const setSearch = useCartStore((state) => state.setSearch);

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">Search</label>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search grocery items..."
        className="mt-2 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
