import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

const STATS = [
  { n: "16", l: "Everyday electrics in the catalog" },
  { n: "$0.00", l: "Shipping on every order" },
  { n: "30", l: "Day return window from delivery" },
  { n: "3-7", l: "Business days delivery in the USA" },
];

const STEPS = [
  { n: "01", t: "Pick practical products", d: "Every item is a plug-in essential we would use ourselves: charging, lighting, climate and kitchen." },
  { n: "02", t: "Read the full spec grid", d: "Each product page lists real dimensions, wattage, cord length and what is in the box in imperial units." },
  { n: "03", t: "Order with free shipping", d: "Orders ship from Florida within 1-3 business days to addresses in the contiguous USA at no cost." },
];

export default function Home() {
  return (
    <>
      <section className="wrap section grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Electric and tech lifestyle goods</span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] sm:text-7xl">
            Power up <span className="bg-lime px-2">everyday</span> living.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate2">
            {SITE.domain} is a focused store for the electric essentials around your desk, living room and kitchen. Clear specs, honest descriptions and free shipping on every order.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn">Shop all products</Link>
            <Link href="/about" className="btn-ghost">About the store</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-volt/20 via-transparent to-lime/40 blur-2xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero.png" alt="Floating composition of a desk lamp, wireless charger, fan, kettle and wall charger" width={1344} height={768} className="relative w-full rounded-[2rem] border border-white/80 bg-white object-cover shadow-[0_30px_80px_-30px_rgba(23,71,255,0.5)]" />
        </div>
      </section>

      <section className="wrap">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="glass p-6">
              <p className="font-display text-5xl font-bold tracking-tight text-volt sm:text-6xl">{s.n}</p>
              <p className="mt-2 text-sm font-semibold text-slate2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <span className="eyebrow">Categories</span>
        <h2 className="h-section mt-3 max-w-2xl">Four aisles. {PRODUCTS.length} well-chosen products.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Link key={c.name} href={`/shop?category=${encodeURIComponent(c.name)}`} className="glass neon group block overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name} width={600} height={450} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <p className="font-display text-4xl font-bold text-volt/25">{("0" + (i + 1)).slice(-2)}</p>
                <h3 className="font-display text-xl font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-slate2">{c.blurb}</p>
                <p className="mt-3 text-sm font-bold text-volt">Explore &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="glass grid gap-10 p-8 sm:p-12 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <span className="eyebrow">How it works</span>
            <h2 className="h-section mt-3">Simple from the first click.</h2>
          </div>
          {STEPS.map((s) => (
            <div key={s.n}>
              <p className="font-display text-6xl font-bold text-lime [-webkit-text-stroke:2px_#0a1020]">{s.n}</p>
              <h3 className="mt-3 font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-slate2">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section pt-0">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-volt/60 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-lime/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">Questions before you order?</h2>
            <p className="mt-4 text-white/75">Our support team answers by phone and email. Call {SITE.phone} or write to {SITE.email}.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-lime">Contact support</Link>
              <Link href="/shipping" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold">Shipping details</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
