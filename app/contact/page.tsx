import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div className="wrap section">
      <span className="eyebrow">Contact</span>
      <h1 className="h-section mt-3">Talk to a real person.</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="glass space-y-5 p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Company</p>
            <p className="mt-1 font-display text-xl font-bold">{SITE.corp}</p>
            <p className="text-slate2">DBA: {SITE.dba}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Corporate address</p>
            <p className="mt-1 text-slate2">{SITE.corpAddress}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Customer service phone</p>
            <a href={SITE.phoneHref} className="mt-1 block font-display text-3xl font-bold">{SITE.phone}</a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-volt">Email</p>
            <a href={`mailto:${SITE.email}`} className="mt-1 block font-bold text-volt underline">{SITE.email}</a>
          </div>
          <p className="text-sm text-slate2">Support hours: Monday to Friday, 9 AM to 5 PM Pacific. Returns are sent to our fulfillment address listed on the Fulfillment Address page.</p>
        </section>
        <ContactForm />
      </div>
    </div>
  );
}
