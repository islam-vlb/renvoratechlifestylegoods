"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { fmt } from "@/lib/site";

export default function CartPage() {
  const { items, setQty, remove, subtotal } = useStore();
  return (
    <div className="wrap section">
      <span className="eyebrow">Your cart</span>
      <h1 className="h-section mt-3">Cart</h1>
      {items.length === 0 ? (
        <div className="glass mt-8 p-10 text-center">
          <p className="text-slate2">Your cart is empty.</p>
          <Link href="/shop" className="btn mt-5">Browse the shop</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {items.map(({ product, qty }) => (
              <div key={product.slug} className="glass flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={product.name} width={112} height={112} className="h-28 w-28 rounded-2xl object-cover" />
                <div className="flex-1">
                  <Link href={`/product/${product.slug}`} className="font-display text-lg font-bold">{product.name}</Link>
                  <p className="text-sm text-slate2">{product.category}</p>
                  <p className="mt-1 font-display text-xl font-bold text-volt">{fmt(product.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-9 w-9 rounded-full border border-ink/20" onClick={() => setQty(product.slug, qty - 1)} aria-label="Decrease quantity">-</button>
                  <span className="w-8 text-center font-bold">{qty}</span>
                  <button className="h-9 w-9 rounded-full border border-ink/20" onClick={() => setQty(product.slug, qty + 1)} aria-label="Increase quantity">+</button>
                </div>
                <button className="text-sm font-semibold text-slate2 underline" onClick={() => remove(product.slug)}>Remove</button>
              </div>
            ))}
          </div>
          <aside className="glass h-fit space-y-3 p-6">
            <h2 className="font-display text-2xl font-bold">Order summary</h2>
            <div className="flex justify-between text-sm"><span>Subtotal</span><span className="font-bold">{fmt(subtotal)}</span></div>
            <div className="flex justify-between text-sm"><span>Shipping</span><span className="font-bold">$0.00 Free shipping</span></div>
            <div className="flex justify-between border-t border-ink/10 pt-3 text-lg"><span className="font-bold">Total</span><span className="font-display font-bold">{fmt(subtotal)}</span></div>
            <Link href="/checkout" className="btn w-full">Proceed to checkout</Link>
            <Link href="/shop" className="btn-ghost w-full">Continue shopping</Link>
          </aside>
        </div>
      )}
    </div>
  );
}
