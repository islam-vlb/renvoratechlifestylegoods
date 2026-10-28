import type { Metadata } from "next";
import LegalPage, { CorpBlock } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" intro={`This policy explains what information ${SITE.domain} collects and how it is used.`}>
      <h2>1. Who is responsible</h2>
      <p>{SITE.corp}, doing business as {SITE.dba}, operates {SITE.domain}.</p>
      <CorpBlock />

      <h2>2. Information we collect</h2>
      <ul>
        <li>Contact details you provide at checkout or when you contact us: name, email address, phone number.</li>
        <li>Shipping and billing address.</li>
        <li>Order details such as products, quantities and totals.</li>
        <li>Payment information, which is entered at checkout and handled by our payment processor. We do not store full card numbers on this site.</li>
        <li>Basic technical data such as browser type and pages visited, used to keep the site working.</li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>To process and deliver your order and send order confirmations.</li>
        <li>To provide customer support and handle returns.</li>
        <li>To prevent fraud and keep the site secure.</li>
        <li>To meet legal and tax obligations.</li>
      </ul>

      <h2>4. Sharing of information</h2>
      <p>{SITE.thirdParty}</p>
      <p>We use only the service providers needed to take payment and deliver your order, such as our payment processor and carriers, and they may use your information only to perform those services for us.</p>

      <h2>5. Cookies and local storage</h2>
      <p>The site uses your browser&apos;s local storage to remember your cart and wishlist on your device. We do not use this storage to track you across other sites.</p>

      <h2>6. Data retention</h2>
      <p>We keep order records for as long as needed to provide support and to meet accounting and legal requirements.</p>

      <h2>7. Security</h2>
      <p>We use reasonable technical and organizational measures to protect your information. No method of transmission over the internet is completely secure, but we work to protect the data you give us.</p>

      <h2>8. Your choices and rights</h2>
      <p>You may contact us to access, correct or delete the personal information we hold about you, subject to legal retention requirements. California residents may request details about the categories of personal information we collect. Write to {SITE.email} or call {SITE.phone}.</p>

      <h2>9. Age requirement</h2>
      <p>Our store is intended for adults. You must be 18 or older to purchase, and we do not knowingly collect information from children under 18.</p>

      <h2>10. Changes to this policy</h2>
      <p>We may update this policy and will post the new version on this page with a new date.</p>

      <h2>11. Contact</h2>
      <p>Privacy questions: {SITE.email}, {SITE.phone}, or by mail at {SITE.corpAddress}.</p>
    </LegalPage>
  );
}
