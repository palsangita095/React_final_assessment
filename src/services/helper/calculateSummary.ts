import { COUPON_CODES, DISCOUNT_THRESHOLDS } from "@/data/discount.data";
import { CartSummary, GroceryItem } from "@/types/interface/grocery.interface";

const round = (value: number) => Math.round(value * 100) / 100;

export const calculateSummary = (
  selected: GroceryItem[],
  couponCode: string,
): CartSummary => {
  const subtotal = round(selected.reduce((sum, item) => sum + item.price, 0));

  const threshold =
    DISCOUNT_THRESHOLDS.find((level) => subtotal >= level.min) ?? null;

  const thresholdPercent = threshold?.percent ?? 0;
  const thresholdDiscount = round((subtotal * thresholdPercent) / 100);

  const couponPercent = COUPON_CODES[couponCode] ?? 0;
  const couponDiscount = round(
    ((subtotal - thresholdDiscount) * couponPercent) / 100,
  );

  const total = round(subtotal - thresholdDiscount - couponDiscount);

  return {
    itemCount: selected.length,
    subtotal,
    thresholdPercent,
    thresholdDiscount,
    couponPercent,
    couponDiscount,
    total,
  };
};
