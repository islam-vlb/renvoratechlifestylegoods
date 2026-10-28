"use client";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/shipping", label: "Shipping" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { count, wishlist, setDrawerOpen } = useStore();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/70 px-4 py-2.5 shadow-[0_10px_40px_-18px_rgba(23,71,255,0.35)] backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-volt text-white">R</span>
          <span>RENVORA<span className="text-volt">.</span></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition hover:bg-lime/60 hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/wishlist" className="hidden rounded-full px-3 py-2 text-sm font-semibold hover:bg-lime/60 sm:block">
            Wishlist{wishlist.length > 0 && <span className="ml-1 text-volt">({wishlist.length})</span>}
          </Link>
          <button onClick={() => setDrawerOpen(true)} className="btn !px-4 !py-2" aria-label="Open cart">
            Cart <span className="rounded-full bg-lime px-2 text-xs text-ink">{count}</span>
          </button>
          <button className="rounded-full border border-ink/15 px-3 py-2 text-sm font-bold md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="glass mx-auto mt-2 flex max-w-7xl flex-col p-3 md:hidden" aria-label="Mobile">
          {[...NAV, { href: "/wishlist", label: "Wishlist" }].map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold hover:bg-lime/60">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
