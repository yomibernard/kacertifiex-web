"use client";

import { useState, type FormEvent } from "react";

export function TaxAlertSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email ?? email,
        list: "tax-alert",
        website: data.website,
      }),
    });
    if (!res.ok) {
      setError("Something went wrong. Please email info@kacertifiex.com.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <p className="text-sm text-white/90">
        Thank you — you&apos;re on the list for KACERTIFIEX tax deadline reminders.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-4 flex flex-col gap-2 sm:flex-row">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        aria-hidden
        onChange={() => {}}
      />
      <label htmlFor="tax-alert-email" className="sr-only">
        Email for tax alerts
      </label>
      <input
        id="tax-alert-email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Work email"
        className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-gold"
      />
      <button
        type="submit"
        className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-light"
      >
        Subscribe
      </button>
      {error && <p className="text-xs text-gold-light sm:basis-full">{error}</p>}
    </form>
  );
}
