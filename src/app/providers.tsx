"use client";

import { Toaster } from "react-hot-toast";

import { useHydrateCart } from "@/hooks/useHydrateCart";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useHydrateCart();

  return (
    <>
      <Toaster position="top-right" />
      {children}
    </>
  );
};

export default Providers;
