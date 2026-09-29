"use client";

import { DISCOUNT_THRESHOLDS } from "@/data/discount.data";
import { formatCurrency } from "@/lib/format";
import { calculateSummary } from "@/services/helper/calculateSummary";
import { useCartStore } from "@/store/useCartStore";
import CouponInput from "./CouponInput";
import SummaryRow from "./SummaryRow";

const SummaryCard = () => {
  const selected = useCartStore((state) => state.selected);
  const couponCode = useCartStore((state) => state.couponCode);

  const summary = calculateSummary(selected, couponCode);

  const nextThreshold = [...DISCOUNT_THRESHOLDS]
    .reverse()
    .find((level) => summary.subtotal < level.min);

  const hint =
    summary.subtotal > 0 && nextThreshold
      ? `Add ${formatCurrency(nextThreshold.min - summary.subtotal)} more to unlock ${nextThreshold.percent}% off`
      : null;

  return (
    <div className="space-y-5">
      <div className="space-y-3 rounded-xl border border-gray-200 bg-white p-5">
        <SummaryRow
          label={`Subtotal (${summary.itemCount} items)`}
          value={formatCurrency(summary.subtotal)}
        />

        {summary.thresholdDiscount > 0 && (
          <SummaryRow
            label={`Threshold discount (${summary.thresholdPercent}%)`}
            value={`- ${formatCurrency(summary.thresholdDiscount)}`}
          />
        )}

        {summary.couponDiscount > 0 && (
          <SummaryRow
            label={`Coupon ${couponCode} (${summary.couponPercent}%)`}
            value={`- ${formatCurrency(summary.couponDiscount)}`}
          />
        )}

        <div className="border-t border-gray-100 pt-3">
          <SummaryRow
            label="Total"
            value={formatCurrency(summary.total)}
            emphasized
          />
        </div>

        {hint && <p className="text-sm text-blue-600">{hint}</p>}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <CouponInput />
      </div>
    </div>
  );
};

export default SummaryCard;
