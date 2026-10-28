"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopClient() {
  const params = useSearchParams();
  const active = params.get("category");
  const list = active ? PRODUCTS.filter((p) => p.category === active) : PRODUCTS;
  const chip = (on: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-bold transition ${on ? "border-volt bg-volt text-white" : "border-ink/15 bg-white/70 hover:border-volt"}`;
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/shop" className={chip(!active)}>All</Link>
        {CATEGORIES.map((c) => (
          <Link key={c.name} href={`/shop?category=${encodeURIComponent(c.name)}`} className={chip(active === c.name)}>
            {c.name}
          </Link>
        ))}
      </div>
      <p className="mt-6 text-sm font-semibold text-slate2">{list.length} products</p>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p, i) => (
          <ProductCard key={p.slug} p={p} index={i} />
        ))}
      </div>
    </>
  );
}
