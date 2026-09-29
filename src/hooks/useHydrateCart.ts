import { useEffect } from "react";

import { useCartStore } from "@/store/useCartStore";

export const useHydrateCart = () => {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
};
