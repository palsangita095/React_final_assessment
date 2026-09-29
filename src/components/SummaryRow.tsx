import { SummaryRowProps } from "@/types/type/summaryrow.type";

export default function SummaryRow({
  label,
  value,
  emphasized = false,
}: SummaryRowProps) {
  return (
    <div
      className={`
        flex items-center justify-between
        ${emphasized ? "text-lg font-bold text-gray-900" : "text-sm text-gray-600"}
      `}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
