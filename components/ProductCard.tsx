"use client";
import Link from "next/link";
import { fmt } from "@/lib/site";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function ProductCard({ p, index }: { p: Product; index?: number }) {
  const { add, wishlist, toggleWish } = useStore();
  const wished = wishlist.includes(p.slug);
  return (
    <article className="glass neon group flex h-full flex-col overflow-hidden">
      <Link href={`/product/${p.slug}`} className="relative block bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} width={600} height={600} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
        {index !== undefined && (
          <span className="absolute left-4 top-3 font-display text-4xl font-bold text-volt/20">{("0" + (index + 1)).slice(-2)}</span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-volt">{p.category}</p>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug">
          <Link href={`/product/${p.slug}`}>{p.name}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate2">{p.short}</p>
        <div className="mt-4 flex items-end justify-between">
          <span className="font-display text-3xl font-bold tracking-tight">{fmt(p.price)}</span>
          <span className="text-xs font-semibold text-slate2">Free shipping</span>
        </div>
        <div className="mt-4 flex gap-2">
          <Link href={`/product/${p.slug}`} className="btn-ghost flex-1 !px-3">Details</Link>
          <button className="btn flex-1 !px-3" onClick={() => add(p.slug)}>Add to Cart</button>
          <button className="btn-ghost !px-3" onClick={() => toggleWish(p.slug)} aria-pressed={wished} aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}>
            {wished ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}
