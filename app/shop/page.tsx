import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop chargers, lighting, home electrics and kitchen electrics with free shipping on every order.",
};

export default function ShopPage() {
  return (
    <div className="wrap section">
      <span className="eyebrow">The catalog</span>
      <h1 className="h-section mt-3">Shop all electrics</h1>
      <p className="mt-3 max-w-2xl text-slate2">Free shipping on every order. 30-day returns from delivery.</p>
      <Suspense fallback={<p className="mt-10 text-slate2">Loading products...</p>}>
        <ShopClient />
      </Suspense>
    </div>
  );
}
