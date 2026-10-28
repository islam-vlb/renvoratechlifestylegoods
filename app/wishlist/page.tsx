"use client";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { useStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useStore();
  const list = PRODUCTS.filter((p) => wishlist.includes(p.slug));
  return (
    <div className="wrap section">
      <span className="eyebrow">Saved items</span>
      <h1 className="h-section mt-3">Wishlist</h1>
      {list.length === 0 ? (
        <div className="glass mt-8 p-10 text-center">
          <p className="text-slate2">Your wishlist is empty. Tap the heart on any product to save it here.</p>
          <Link href="/shop" className="btn mt-5">Browse the shop</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      )}
    </div>
  );
}
