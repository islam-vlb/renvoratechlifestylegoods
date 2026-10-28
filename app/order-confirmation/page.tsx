"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loadOrder, type Order } from "@/lib/orders";
import { SITE, fmt } from "@/lib/site";

export default function ConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setOrder(loadOrder());
    setReady(true);
  }, []);

  if (!ready) return <div className="wrap section" />;
  if (!order) {
    return (
      <div className="wrap section">
        <h1 className="h-section">Order confirmation</h1>
        <div className="glass mt-8 p-10 text-center">
          <p className="text-slate2">No recent order found on this device.</p>
          <Link href="/shop" className="btn mt-5">Browse the shop</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="wrap section">
      <span className="eyebrow">Order placed</span>
      <h1 className="h-section mt-3">Thank you, {order.name.split(" ")[0]}.</h1>
      <p className="mt-3 text-slate2">A confirmation will be sent to {order.email}.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
        <section className="glass p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Order number</p>
          <p className="font-display text-4xl font-bold">{order.number}</p>
          <p className="mt-1 text-sm text-slate2">{new Date(order.date).toLocaleDateString("en-US", { dateStyle: "long" })}</p>
          <ul className="mt-6 divide-y divide-ink/10">
            {order.items.map((i) => (
              <li key={i.name} className="flex justify-between gap-4 py-3 text-sm">
                <span>{i.name} x {i.qty}</span>
                <span className="font-bold">{fmt(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-ink/10 pt-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-bold">{fmt(order.subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="font-bold">$0.00 Free shipping</span></div>
            <div className="flex justify-between text-lg"><span className="font-bold">Total</span><span className="font-display font-bold">{fmt(order.total)}</span></div>
          </div>
          <p className="mt-6 text-sm text-slate2">Ships to: {order.address}</p>
        </section>
        <aside className="glass h-fit space-y-3 p-6 text-sm">
          <h2 className="font-display text-xl font-bold">Billing and support</h2>
          <p>Your card was charged by <strong>{order.descriptor}</strong> for this one-time payment.</p>
          <p>Ships within 1-3 business days. Delivery in 3-7 business days in the contiguous USA.</p>
          <p>{SITE.corp}, DBA {SITE.dba}</p>
          <p>Phone: <a className="font-bold text-volt underline" href={SITE.phoneHref}>{SITE.phone}</a></p>
          <p>Email: <a className="font-bold text-volt underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <Link href="/shop" className="btn w-full">Continue shopping</Link>
        </aside>
      </div>
    </div>
  );
}
