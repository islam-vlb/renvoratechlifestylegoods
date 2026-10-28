"use client";
import { useState } from "react";
import { useStore } from "@/lib/store";

export default function BuyBox({ slug }: { slug: string }) {
  const { add, wishlist, toggleWish } = useStore();
  const [qty, setQty] = useState(1);
  const wished = wishlist.includes(slug);
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <div className="flex items-center rounded-full border border-ink/15 bg-white/80">
        <button className="h-11 w-11 text-lg font-bold" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">-</button>
        <span className="w-10 text-center font-bold" aria-live="polite">{qty}</span>
        <button className="h-11 w-11 text-lg font-bold" onClick={() => setQty(Math.min(10, qty + 1))} aria-label="Increase quantity">+</button>
      </div>
      <button className="btn" onClick={() => add(slug, qty)}>Add to Cart</button>
      <button className="btn-ghost" onClick={() => toggleWish(slug)} aria-pressed={wished}>
        {wished ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
}
