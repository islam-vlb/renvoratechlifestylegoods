"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="glass p-8">
        <h2 className="font-display text-2xl font-bold">Message received</h2>
        <p className="mt-2 text-slate2">Thank you. Our team replies within 1 business day. You can also reach us at {SITE.email}.</p>
      </div>
    );
  }
  return (
    <form
      className="glass space-y-4 p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h2 className="font-display text-2xl font-bold">Send a message</h2>
      <div><label className="label" htmlFor="c-name">Name</label><input id="c-name" required className="field" /></div>
      <div><label className="label" htmlFor="c-email">Email</label><input id="c-email" type="email" required className="field" /></div>
      <div><label className="label" htmlFor="c-msg">Message</label><textarea id="c-msg" required rows={5} className="field" /></div>
      <button className="btn">Send message</button>
    </form>
  );
}
