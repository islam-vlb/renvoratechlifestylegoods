import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Refund Policy" };

export default function Refund() {
  return (
    <LegalPage title="Refund Policy" intro="We want you to be happy with your order. Here is how returns and refunds work.">
      <h2>1. 30-day return window</h2>
      <p>You may return an eligible product within 30 days from the delivery date for a refund to your original payment method.</p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>The product must be unused or lightly used, complete, and in its original packaging with all included accessories.</li>
        <li>Products damaged by misuse, overloading or incorrect electrical connection are not eligible.</li>
        <li>If your product arrives damaged or defective, contact us and we will arrange a replacement or refund.</li>
      </ul>

      <h2>3. How to return</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-slate2">
        <li>Email {SITE.email} or call {SITE.phone} with your order number and the product you wish to return.</li>
        <li>We will send you a return authorization and instructions.</li>
        <li>Pack the product securely and ship it to the return address below with your order number included.</li>
      </ol>

      <h2>4. Return address</h2>
      <address className="mt-3 space-y-1 not-italic text-slate2">
        <p className="font-bold text-ink">{SITE.corp}, DBA {SITE.dba}</p>
        <p>Returns Department</p>
        <p>{SITE.fulfillmentAddress}</p>
      </address>

      <h2>5. Refund timing</h2>
      <p>After we receive and inspect your return we will issue the refund within 5-7 business days. Your bank may take additional time to post the credit. The refund covers the purchase price of the product. Shipping was free, so there is no shipping charge to refund.</p>

      <h2>6. Return shipping</h2>
      <p>Return shipping costs are the customer&apos;s responsibility unless the product arrived damaged or defective or we shipped the wrong item, in which case we cover it.</p>

      <h2>7. Exchanges</h2>
      <p>To exchange a product, return it for a refund and place a new order.</p>

      <h2>8. Billing questions</h2>
      <p>Charges appear on your statement as {SITE.descriptor}. If you do not recognize a charge, contact {SITE.email} or {SITE.phone} so we can help before you contact your bank.</p>

      <h2>9. Contact</h2>
      <p>{SITE.corp}, {SITE.corpAddress}. Phone {SITE.phone}. Email {SITE.email}.</p>
    </LegalPage>
  );
}
