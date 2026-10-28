"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { SITE, fmt } from "@/lib/site";
import { saveOrder, newOrderNumber } from "@/lib/orders";
import { CardMarks } from "@/components/Footer";

const STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

export default function CheckoutPage() {
  const { items, subtotal, clear } = useStore();
  const router = useRouter();
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agree || items.length === 0) return;
    const f = new FormData(e.currentTarget);
    const card = String(f.get("card") || "").replace(/\s+/g, "");
    if (!/^(4\d{12}(\d{3})?|5[1-5]\d{14}|2[2-7]\d{14})$/.test(card)) {
      setError("Please enter a valid Visa or Mastercard number.");
      return;
    }
    setError("");
    saveOrder({
      number: newOrderNumber(),
      date: new Date().toISOString(),
      items: items.map((i) => ({ name: i.product.name, qty: i.qty, price: i.product.price })),
      subtotal,
      shipping: 0,
      total: subtotal,
      email: String(f.get("email")),
      name: `${f.get("first")} ${f.get("last")}`,
      address: `${f.get("address")}, ${f.get("city")}, ${f.get("state")} ${f.get("zip")}`,
      descriptor: SITE.descriptor,
    });
    clear();
    router.push("/order-confirmation");
  }

  if (items.length === 0) {
    return (
      <div className="wrap section">
        <h1 className="h-section">Checkout</h1>
        <div className="glass mt-8 p-10 text-center">
          <p className="text-slate2">Your cart is empty.</p>
          <Link href="/shop" className="btn mt-5">Browse the shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap section">
      <span className="eyebrow">Secure checkout</span>
      <h1 className="h-section mt-3">Checkout</h1>
      <form onSubmit={onSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-6">
          <section className="glass p-6">
            <h2 className="font-display text-xl font-bold">Contact</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><label className="label" htmlFor="email">Email</label><input id="email" name="email" type="email" required className="field" autoComplete="email" /></div>
              <div><label className="label" htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required className="field" autoComplete="tel" /></div>
            </div>
          </section>
          <section className="glass p-6">
            <h2 className="font-display text-xl font-bold">Shipping address</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><label className="label" htmlFor="first">First name</label><input id="first" name="first" required className="field" autoComplete="given-name" /></div>
              <div><label className="label" htmlFor="last">Last name</label><input id="last" name="last" required className="field" autoComplete="family-name" /></div>
              <div className="sm:col-span-2"><label className="label" htmlFor="address">Street address</label><input id="address" name="address" required className="field" autoComplete="street-address" /></div>
              <div><label className="label" htmlFor="city">City</label><input id="city" name="city" required className="field" autoComplete="address-level2" /></div>
              <div><label className="label" htmlFor="state">State</label>
                <select id="state" name="state" required className="field" defaultValue="">
                  <option value="" disabled>Select state</option>
                  {STATES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div><label className="label" htmlFor="zip">ZIP code</label><input id="zip" name="zip" required pattern="\d{5}(-\d{4})?" className="field" autoComplete="postal-code" /></div>
              <div><label className="label" htmlFor="country">Country</label>
                <select id="country" name="country" className="field" value="United States" disabled aria-readonly="true"><option>United States</option></select>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate2">We deliver to the contiguous United States only.</p>
          </section>
          <section className="glass p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-xl font-bold">Payment</h2>
              <div className="rounded-lg bg-ink p-2"><CardMarks /></div>
            </div>
            <p className="mt-2 text-sm text-slate2">We accept Visa and Mastercard.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3"><label className="label" htmlFor="card">Card number</label><input id="card" name="card" required inputMode="numeric" placeholder="Visa or Mastercard" className="field" autoComplete="cc-number" /></div>
              <div><label className="label" htmlFor="exp">Expiry (MM/YY)</label><input id="exp" name="exp" required pattern="(0[1-9]|1[0-2])\/\d{2}" placeholder="MM/YY" className="field" autoComplete="cc-exp" /></div>
              <div><label className="label" htmlFor="cvc">CVC</label><input id="cvc" name="cvc" required pattern="\d{3}" inputMode="numeric" className="field" autoComplete="cc-csc" /></div>
              <div><label className="label" htmlFor="zipb">Billing ZIP</label><input id="zipb" name="zipb" required className="field" autoComplete="postal-code" /></div>
            </div>
            {error && <p role="alert" className="mt-3 text-sm font-bold text-red-600">{error}</p>}
          </section>
        </div>

        <aside className="glass h-fit space-y-4 p-6">
          <h2 className="font-display text-2xl font-bold">Order summary</h2>
          <ul className="space-y-3">
            {items.map(({ product, qty }) => (
              <li key={product.slug} className="flex justify-between gap-3 text-sm">
                <span>{product.name} x {qty}</span>
                <span className="font-bold">{fmt(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-ink/10 pt-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-bold">{fmt(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="font-bold">$0.00 Free shipping</span></div>
            <div className="flex justify-between text-lg"><span className="font-bold">Total</span><span className="font-display font-bold">{fmt(subtotal)}</span></div>
          </div>
          <p className="text-sm text-slate2">
            Your card will be charged by {SITE.descriptor} for this one-time payment. By placing this order I agree to the Terms &amp; Conditions.
          </p>
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 h-5 w-5 accent-[#1747ff]" />
            <span>
              I agree to the{" "}
              <Link href="/terms" target="_blank" className="font-bold text-volt underline">Terms &amp; Conditions</Link> and the{" "}
              <Link href="/privacy" target="_blank" className="font-bold text-volt underline">Privacy Policy</Link>.
            </span>
          </label>
          <p className="text-sm font-semibold">You must be 18 or older to purchase.</p>
          <button type="submit" disabled={!agree} className="btn w-full">Place Order</button>
          <p className="text-xs text-slate2">{SITE.thirdParty}</p>
          <p className="text-xs text-slate2">
            {SITE.corp}, DBA {SITE.dba}. {SITE.corpAddress}. Phone {SITE.phone}. Email {SITE.email}.
          </p>
        </aside>
      </form>
    </div>
  );
}
