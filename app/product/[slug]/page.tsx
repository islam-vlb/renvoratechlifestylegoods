import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProduct } from "@/lib/products";
import { fmt } from "@/lib/site";
import BuyBox from "./BuyBox";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return { title: p.name, description: p.short };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  return (
    <div className="wrap section">
      <nav className="text-sm text-slate2" aria-label="Breadcrumb">
        <Link href="/shop" className="font-semibold hover:text-volt">Shop</Link> /{" "}
        <Link href={`/shop?category=${encodeURIComponent(p.category)}`} className="font-semibold hover:text-volt">{p.category}</Link>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="glass overflow-hidden bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} width={900} height={900} className="aspect-square w-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">{p.category}</p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight sm:text-5xl">{p.name}</h1>
          <p className="mt-4 font-display text-6xl font-bold tracking-tight">{fmt(p.price)}</p>
          <p className="mt-5 leading-relaxed text-slate2">{p.description}</p>
          <ul className="mt-5 space-y-1 text-sm font-semibold">
            <li>Free shipping on this item</li>
            <li>30-day returns from delivery</li>
          </ul>
          <BuyBox slug={p.slug} />
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <section className="glass p-6 lg:col-span-1">
          <h2 className="font-display text-xl font-bold">Key details</h2>
          <dl className="mt-4 divide-y divide-ink/10 text-sm">
            {p.specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2.5">
                <dt className="text-slate2">{k}</dt>
                <dd className="text-right font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="glass p-6">
          <h2 className="font-display text-xl font-bold">What is included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate2">
            {p.included.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </section>
        <section className="glass p-6">
          <h2 className="font-display text-xl font-bold">Usage and care</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate2">
            {p.care.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </section>
      </div>
      <p className="mt-8 text-sm text-slate2">
        Shipping: Free shipping, $0.00, ships within 1-3 business days and arrives in 3-7 business days in the contiguous USA. Returns: 30 days from delivery. See the <Link href="/refund" className="font-bold text-volt underline">Refund Policy</Link>.
      </p>
    </div>
  );
}
