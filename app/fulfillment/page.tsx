import Link from "next/link";
import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Fulfillment Address" };

export default function Fulfillment() {
  return (
    <LegalPage title="Fulfillment Address" intro="Your order is packed and shipped from, and returns are sent to, the address below.">
      <h2>Fulfillment and return address</h2>
      <address className="mt-3 space-y-1 not-italic text-slate2">
        <p className="font-bold text-ink">{SITE.corp}, DBA {SITE.dba}</p>
        <p>{SITE.fulfillmentAddress}</p>
      </address>
      <p>Please contact us before sending anything to this address so we can issue a return authorization. See the <Link href="/refund">Refund Policy</Link> for the steps.</p>

      <h2>Corporate address</h2>
      <address className="mt-3 space-y-1 not-italic text-slate2">
        <p className="font-bold text-ink">{SITE.corp}</p>
        <p>{SITE.corpAddress}</p>
      </address>

      <h2>Customer service</h2>
      <p>Phone: {SITE.phone}. Email: {SITE.email}.</p>
    </LegalPage>
  );
}
