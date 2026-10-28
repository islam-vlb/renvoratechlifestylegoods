"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { fmt } from "@/lib/site";

export default function CartDrawer() {
  const { drawerOpen, setDrawerOpen, items, setQty, remove, subtotal } = useStore();
  if (!drawerOpen) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Cart">
      <button className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} aria-label="Close cart" />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-mist shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink/10 p-5">
          <h2 className="font-display text-2xl font-bold">Your cart</h2>
          <button className="btn-ghost !px-4 !py-2" onClick={() => setDrawerOpen(false)}>Close</button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {items.length === 0 && (
            <p className="text-slate2">
              Your cart is empty.{" "}
              <Link href="/shop" className="font-bold text-volt underline" onClick={() => setDrawerOpen(false)}>Browse the shop</Link>
            </p>
          )}
          {items.map(({ product, qty }) => (
            <div key={product.slug} className="glass flex gap-4 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} width={80} height={80} className="h-20 w-20 rounded-2xl object-cover" />
              <div className="flex-1">
                <p className="text-sm font-bold leading-snug">{product.name}</p>
                <p className="font-display font-bold text-volt">{fmt(product.price)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button className="h-7 w-7 rounded-full border border-ink/20" onClick={() => setQty(product.slug, qty - 1)} aria-label="Decrease quantity">-</button>
                  <span className="w-6 text-center text-sm font-bold">{qty}</span>
                  <button className="h-7 w-7 rounded-full border border-ink/20" onClick={() => setQty(product.slug, qty + 1)} aria-label="Increase quantity">+</button>
                  <button className="ml-auto text-xs font-semibold text-slate2 underline" onClick={() => remove(product.slug)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3 border-t border-ink/10 p-5">
          <div className="flex justify-between text-sm"><span>Subtotal</span><span className="font-bold">{fmt(subtotal)}</span></div>
          <div className="flex justify-between text-sm"><span>Shipping</span><span className="font-bold">$0.00 Free shipping</span></div>
          <Link href="/checkout" onClick={() => setDrawerOpen(false)} className={`btn w-full ${items.length === 0 ? "pointer-events-none opacity-40" : ""}`}>Checkout</Link>
          <Link href="/cart" onClick={() => setDrawerOpen(false)} className="btn-ghost w-full">View full cart</Link>
        </div>
      </aside>
    </div>
  );
}
