import Link from "next/link";
import { SITE } from "@/lib/site";

export function CardMarks() {
  return (
    <div className="flex items-center gap-2" aria-label="Accepted payment: Visa and Mastercard">
      <span className="rounded-md border border-white/30 bg-white px-3 py-1 text-sm font-extrabold italic tracking-wide text-[#1a1f71]">VISA</span>
      <span className="flex items-center gap-2 rounded-md border border-white/30 bg-white px-3 py-1 text-sm font-bold text-ink">
        <span className="relative inline-block h-4 w-6">
          <span className="absolute left-0 h-4 w-4 rounded-full bg-[#eb001b]" />
          <span className="absolute left-2 h-4 w-4 rounded-full bg-[#f79e1b] opacity-90" />
        </span>
        Mastercard
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-10 bg-ink text-white">
      <div className="h-1 bg-gradient-to-r from-volt via-lime to-volt" />
      <div className="wrap grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-bold">RENVORA<span className="text-lime">.</span></p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            {SITE.domain} sells everyday electric and tech lifestyle goods with free shipping on every order.
          </p>
          <address className="mt-5 space-y-1 text-sm not-italic text-white/80">
            <p className="font-semibold text-white">{SITE.corp}</p>
            <p>DBA: {SITE.dba}</p>
            <p>{SITE.corpAddress}</p>
            <p>Phone: <a className="underline" href={SITE.phoneHref}>{SITE.phone}</a></p>
            <p>Email: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </address>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/shop">All products</Link></li>
            <li><Link href="/shop?category=Charging%20%26%20Desk">Charging &amp; Desk</Link></li>
            <li><Link href="/shop?category=Lighting">Lighting</Link></li>
            <li><Link href="/shop?category=Home%20Electrics">Home Electrics</Link></li>
            <li><Link href="/shop?category=Kitchen%20Electrics">Kitchen Electrics</Link></li>
            <li><Link href="/wishlist">Wishlist</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">Company and policies</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/refund">Refund Policy</Link></li>
            <li><Link href="/shipping">Shipping Policy</Link></li>
            <li><Link href="/fulfillment">Fulfillment Address</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-4 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>{SITE.thirdParty}</p>
            <p>&copy; 2026 {SITE.corp}. All rights reserved. {SITE.domain}</p>
          </div>
          <CardMarks />
        </div>
      </div>
    </footer>
  );
}
