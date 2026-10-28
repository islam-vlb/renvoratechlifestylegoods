import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function Shipping() {
  return (
    <LegalPage title="Shipping Policy" intro="Shipping is free on every order. Here is how and when your order travels.">
      <h2>1. Free shipping</h2>
      <p>Every order ships free. The shipping charge at checkout is always $0.00, with no minimum order amount.</p>

      <h2>2. Where we ship</h2>
      <p>We deliver to addresses in the contiguous United States only. We do not ship to Alaska, Hawaii, US territories, PO boxes that carriers cannot serve, or outside the USA.</p>

      <h2>3. Processing time</h2>
      <p>Orders ship within 1-3 business days from our fulfillment address: {SITE.fulfillmentAddress}. Business days are Monday through Friday, excluding US holidays.</p>

      <h2>4. Delivery time</h2>
      <p>Delivery usually takes 3-7 business days in the USA after the order ships. Delivery times are estimates and can be affected by carrier delays and weather.</p>

      <h2>5. Tracking</h2>
      <p>When your order ships we email a tracking number to the address you gave at checkout.</p>

      <h2>6. Address accuracy</h2>
      <p>Please check your shipping address carefully. If an order is returned to us because of an incorrect or incomplete address, contact us so we can arrange to send it again.</p>

      <h2>7. Damaged or missing packages</h2>
      <p>If your package arrives damaged or does not arrive within 10 business days of shipping, contact {SITE.email} or {SITE.phone}. We will help you with a replacement or refund.</p>

      <h2>8. Contact</h2>
      <p>{SITE.corp}, DBA {SITE.dba}, {SITE.corpAddress}. Phone {SITE.phone}. Email {SITE.email}.</p>
    </LegalPage>
  );
}
