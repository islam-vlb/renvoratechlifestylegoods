import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About", description: `About ${SITE.domain}, an electric and tech lifestyle goods store.` };

export default function About() {
  return (
    <div className="wrap section">
      <span className="eyebrow">About the store</span>
      <h1 className="h-section mt-3 max-w-3xl">A small catalog of electrics we would plug in ourselves.</h1>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/cat-desk.png" alt="Home office desk with lamp, wireless charger and organizer" width={800} height={600} className="glass w-full object-cover" />
        <div className="space-y-4 text-slate2">
          <p>{SITE.domain} is an online store for everyday electric and tech lifestyle goods: chargers and desk essentials, lighting, home electrics and kitchen electrics.</p>
          <p>We keep the catalog small on purpose. Each of our 16 products has a full spec list with real dimensions, wattage and cord length in imperial units, so you know what you are buying before it arrives.</p>
          <p>Shipping is free on every order, orders ship from St. Petersburg, Florida within 1-3 business days, and you have 30 days from delivery to return an item.</p>
          <p>The store is operated by {SITE.corp}, doing business as {SITE.dba}, {SITE.corpAddress}.</p>
        </div>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {[
          { n: "01", t: "Clear specs", d: "Every product page has a spec grid, what is in the box and care notes." },
          { n: "02", t: "Free shipping", d: "$0.00 shipping on every order to the contiguous USA." },
          { n: "03", t: "Real support", d: `Reach a person at ${SITE.phone} or ${SITE.email}.` },
        ].map((v) => (
          <div key={v.n} className="glass neon p-6">
            <p className="font-display text-5xl font-bold text-volt/30">{v.n}</p>
            <h2 className="mt-2 font-display text-xl font-bold">{v.t}</h2>
            <p className="mt-2 text-sm text-slate2">{v.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10"><Link href="/shop" className="btn">Shop all products</Link></div>
    </div>
  );
}
