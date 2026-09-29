"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { useCartStore } from "@/store/useCartStore";
import {
  CouponSchema,
  couponValidation,
} from "@/services/validation/grocery.validation";

const CouponInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CouponSchema>({
    resolver: yupResolver(couponValidation),
  });

  const couponCode = useCartStore((state) => state.couponCode);
  const setCoupon = useCartStore((state) => state.setCoupon);

  const onSubmit = async (data: CouponSchema) => {
    setCoupon(data.coupon);
    reset();
    toast.success(`Coupon ${data.coupon} applied!`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <label className="text-sm font-medium text-gray-700">Coupon Code</label>

      <div className="flex gap-2">
        <input
          {...register("coupon")}
          placeholder="FRESH10"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Apply
        </button>
      </div>

      {errors.coupon && (
        <p className="text-sm text-red-500">{errors.coupon.message}</p>
      )}

      {couponCode && (
        <p className="text-sm text-green-600">
          {couponCode} is active on this order.
        </p>
      )}
    </form>
  );
};

export default CouponInput;
