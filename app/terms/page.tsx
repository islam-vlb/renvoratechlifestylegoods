import type { Metadata } from "next";
import LegalPage, { CorpBlock } from "@/components/LegalPage";
import { PRODUCTS } from "@/lib/products";
import { SITE, fmt } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions" intro={`These Terms govern your use of ${SITE.domain} and any purchase you make from it.`}>
      <h2>1. Who we are</h2>
      <p>{SITE.domain} is operated by {SITE.corp}, doing business as {SITE.dba}. References to &quot;we&quot;, &quot;us&quot; and &quot;our&quot; mean {SITE.corp}.</p>
      <CorpBlock />

      <h2>2. Acceptance of terms</h2>
      <p>By browsing the site or placing an order you agree to these Terms &amp; Conditions, our Privacy Policy, Refund Policy and Shipping Policy. If you do not agree, please do not use the site.</p>

      <h2>3. Eligibility</h2>
      <p>You must be 18 or older to purchase. Orders are accepted only from customers with a delivery address in the contiguous United States and a billing address in the United States.</p>

      <h2>4. Products and descriptions</h2>
      <p>We describe each product as accurately as we can, including dimensions, wattage, cord length and included items. Colors may vary slightly by screen. Products are sold as consumer goods for normal household and office use and must be used according to the included instructions.</p>

      <h2>5. Prices</h2>
      <p>All prices are in US dollars and apply to one unit of the product listed. Shipping is free on every order and no separate shipping fee is charged. The current prices of every product we sell are listed below.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink/15"><th className="py-2 pr-4">Product</th><th className="py-2 pr-4">Category</th><th className="py-2 text-right">Price</th></tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.slug} className="border-b border-ink/10">
                <td className="py-2 pr-4 font-semibold text-ink">{p.name}</td>
                <td className="py-2 pr-4 text-slate2">{p.category}</td>
                <td className="py-2 text-right font-bold text-ink">{fmt(p.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>6. Orders and payment</h2>
      <p>We accept Visa and Mastercard. Your card will be charged by {SITE.descriptor} for this one-time payment. Each order is a single, one-time purchase. There is no membership, no recurring billing and no automatic re-order. We may cancel or refuse an order if we suspect fraud, if an item is unavailable or if there is a pricing or description error, and in that case any amount charged is refunded to the original card.</p>

      <h2>7. Shipping and delivery</h2>
      <p>Orders ship free within 1-3 business days from our fulfillment address, and delivery typically takes 3-7 business days in the contiguous USA. See the Shipping Policy for details.</p>

      <h2>8. Returns and refunds</h2>
      <p>You may return an eligible product within 30 days of the delivery date. See the Refund Policy for the full process.</p>

      <h2>9. Safe use of electrical products</h2>
      <p>Read the included instructions before use. Plug products into a suitable wall outlet, do not exceed the stated electrical load, keep products away from water unless they are designed for it, and never use a damaged cord or plug. Heating products must be kept clear of curtains, bedding and furniture.</p>

      <h2>10. Intellectual property</h2>
      <p>All text, images and layouts on {SITE.domain} belong to {SITE.corp} or its licensors and may not be copied or reused without written permission.</p>

      <h2>11. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, our liability for any claim relating to a purchase is limited to the amount you paid for the product. We are not liable for indirect or consequential losses. Nothing in these Terms limits rights you have under applicable consumer protection law.</p>

      <h2>12. Governing law</h2>
      <p>These Terms are governed by the laws of the State of California, without regard to conflict-of-law rules.</p>

      <h2>13. Changes to these terms</h2>
      <p>We may update these Terms from time to time. The version posted on this page on the date you place an order applies to that order.</p>

      <h2>14. Contact</h2>
      <p>Questions about these Terms can be sent to {SITE.email} or by phone to {SITE.phone}.</p>
    </LegalPage>
  );
}
