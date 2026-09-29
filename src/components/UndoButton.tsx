"use client";

import { toast } from "react-hot-toast";

import { useCartStore } from "@/store/useCartStore";

const UndoButton = () => {
  const canUndo = useCartStore((state) => state.past.length > 0);
  const undo = useCartStore((state) => state.undo);

  const handleUndo = () => {
    undo();
    toast.success("Last action reverted.");
  };

  return (
    <button
      onClick={handleUndo}
      disabled={!canUndo}
      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Undo Last Action
    </button>
  );
};

export default UndoButton;
