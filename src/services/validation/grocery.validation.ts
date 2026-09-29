import * as yup from "yup";

import { COUPON_CODES } from "@/data/discount.data";

export const couponValidation = yup.object({
  coupon: yup
    .string()
    .trim()
    .required("Coupon code is required")
    .uppercase("Please enter the code in uppercase")
    .test(
      "known-code",
      "This coupon code is not valid",
      (value) => !!value && value in COUPON_CODES,
    ),
});

export type CouponSchema = yup.InferType<typeof couponValidation>;
