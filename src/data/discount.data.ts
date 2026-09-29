import { DiscountThreshold } from "@/types/interface/grocery.interface";

export const DISCOUNT_THRESHOLDS: DiscountThreshold[] = [
  { min: 500, percent: 20 },
  { min: 250, percent: 15 },
  { min: 100, percent: 10 },
];

export const COUPON_CODES: Record<string, number> = {
  FRESH10: 10,
  SAVE15: 15,
  MEGA25: 25,
};
