"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "./products";

type Lines = Record<string, number>;
interface Ctx {
  lines: Lines;
  wishlist: string[];
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  toggleWish: (slug: string) => void;
  items: { product: Product; qty: number }[];
  count: number;
  subtotal: number;
}

const StoreCtx = createContext<Ctx | null>(null);
const CART_KEY = "renvora_cart";
const WISH_KEY = "renvora_wishlist";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Lines>({});
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem(CART_KEY);
      const w = localStorage.getItem(WISH_KEY);
      if (c) setLines(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(lines));
      localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
    } catch {}
  }, [lines, wishlist, ready]);

  const add = useCallback((slug: string, qty = 1) => {
    setLines((l) => ({ ...l, [slug]: Math.min(10, (l[slug] || 0) + qty) }));
    setDrawerOpen(true);
  }, []);
  const setQty = useCallback((slug: string, qty: number) => {
    setLines((l) => {
      const n = { ...l };
      if (qty <= 0) delete n[slug];
      else n[slug] = Math.min(10, qty);
      return n;
    });
  }, []);
  const remove = useCallback((slug: string) => setQty(slug, 0), [setQty]);
  const clear = useCallback(() => setLines({}), []);
  const toggleWish = useCallback((slug: string) => {
    setWishlist((w) => (w.includes(slug) ? w.filter((s) => s !== slug) : [...w, slug]));
  }, []);

  const items = useMemo(
    () =>
      Object.entries(lines)
        .map(([slug, qty]) => ({ product: PRODUCTS.find((p) => p.slug === slug)!, qty }))
        .filter((i) => i.product),
    [lines]
  );
  const count = items.reduce((a, i) => a + i.qty, 0);
  const subtotal = Math.round(items.reduce((a, i) => a + i.qty * i.product.price * 100, 0)) / 100;

  return (
    <StoreCtx.Provider value={{ lines, wishlist, drawerOpen, setDrawerOpen, add, setQty, remove, clear, toggleWish, items, count, subtotal }}>
      {children}
    </StoreCtx.Provider>
  );
}

export function useStore() {
  const c = useContext(StoreCtx);
  if (!c) throw new Error("StoreProvider missing");
  return c;
}
