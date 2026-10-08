"use client";

import { FormSuccess } from "@/components/contact/FormSuccess";
import { inputClassName, labelClassName } from "@/components/contact/form-styles";
import Link from "next/link";
import { useState } from "react";

const practices = [
  "Tax & regulatory advisory",
  "Accounting & finance",
  "Management consulting",
  "Financial advisory",
  "Audit, risk & governance",
  "Outsourced business services",
  "International / company setup",
] as const;

const formats = ["Virtual (video)", "Telephone", "In person — Lagos office"] as const;

type Props = {
  defaultPractice?: string;
  whatsappHref: string;
};

export function BookConsultationForm({ defaultPractice, whatsappHref }: Props) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (done) {
    return (
      <FormSuccess
        title="Consultation request received"
        description="A KACERTIFIEX partner will confirm time options by email or WhatsApp—usually within one business day (Mon–Fri, WAT)."
        whatsappHref={whatsappHref}
      />
    );
  }

  return (
    <form
      className="relative space-y-5 rounded-sm bg-white p-8 shadow-sm ring-1 ring-grey-light"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
        if (bookingUrl) {
          window.location.href = bookingUrl;
          return;
        }
        setLoading(true);
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        try {
          const res = await fetch("/api/consultation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!res.ok) {
            setError("We could not send your request. Please try WhatsApp or call our office.");
            setLoading(false);
            return;
          }
          setDone(true);
        } catch {
          setError("Connection issue. Please try WhatsApp or email info@kacertifiex.com.");
          setLoading(false);
        }
      }}
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        aria-hidden
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Full name
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClassName} />
        </div>
        <div>
          <label htmlFor="company" className={labelClassName}>
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" className={inputClassName} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClassName}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone (incl. WhatsApp)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+234 …"
            autoComplete="tel"
            className={inputClassName}
          />
        </div>
      </div>
      <div>
        <label htmlFor="practice" className={labelClassName}>
          Primary topic
        </label>
        <select
          id="practice"
          name="practice"
          required
          defaultValue={defaultPractice ?? ""}
          className={inputClassName}
        >
          <option value="">Select topic</option>
          {practices.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="format" className={labelClassName}>
          Preferred format
        </label>
        <select id="format" name="format" required className={inputClassName}>
          <option value="">Select format</option>
          {formats.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClassName}>
          What would you like to achieve?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClassName}
          placeholder="Brief context helps us assign the right partner (timeline, sector, urgency)…"
        />
      </div>
      <p className="text-xs leading-relaxed text-grey">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="font-semibold text-navy hover:text-gold">
          Privacy Policy
        </Link>
        . Information is handled confidentially.
      </p>
      {error && (
        <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold text-navy hover:bg-gold-light disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending…" : "Request consultation →"}
      </button>
    </form>
  );
}
