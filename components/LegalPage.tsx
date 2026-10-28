import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

export default function LegalPage({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <div className="wrap section">
      <span className="eyebrow">Policies</span>
      <h1 className="h-section mt-3">{title}</h1>
      <p className="mt-2 text-sm text-slate2">Last updated {SITE.updated}</p>
      {intro && <p className="mt-4 max-w-3xl text-lg text-slate2">{intro}</p>}
      <div className="glass prose-legal mt-8 max-w-4xl p-6 sm:p-10">{children}</div>
    </div>
  );
}

export function CorpBlock() {
  return (
    <address className="mt-3 space-y-1 not-italic text-slate2">
      <p className="font-bold text-ink">{SITE.corp}</p>
      <p>DBA: {SITE.dba}</p>
      <p>{SITE.corpAddress}</p>
      <p>Phone: {SITE.phone}</p>
      <p>Email: {SITE.email}</p>
    </address>
  );
}
