"use client";

import { FormSuccess } from "@/components/contact/FormSuccess";
import { inputClassName, labelClassName } from "@/components/contact/form-styles";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const enquiryTypes = [
  "Tax advisory",
  "Financial advisory",
  "Accounting & finance",
  "Management consulting",
  "SME advisory",
  "Wealth management consulting",
  "Risk & governance",
  "International / company setup",
  "Book consultation",
  "Request proposal",
  "General enquiry",
] as const;

type Props = {
  defaultEnquiry?: string;
  whatsappHref: string;
};

export function ContactForm({ defaultEnquiry, whatsappHref }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setError("We could not send your enquiry. Please use WhatsApp or call our office.");
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Connection issue. Please try WhatsApp for faster routing.");
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Thank you — we've received your enquiry"
        description="A KACERTIFIEX adviser will respond within one business day. For urgent tax matters, WhatsApp reaches our team fastest."
        whatsappHref={whatsappHref}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-5 rounded-sm bg-white p-8 shadow-sm ring-1 ring-grey-light"
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
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (NG)" name="phone" type="tel" placeholder="+234 …" />
      </div>
      <div>
        <label htmlFor="enquiry" className={labelClassName}>
          How can we help?
        </label>
        <select
          id="enquiry"
          name="enquiry"
          required
          defaultValue={defaultEnquiry ?? ""}
          className={inputClassName}
        >
          <option value="">Select enquiry type</option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClassName}
          placeholder="Tell us about your business and what you're trying to achieve…"
        />
      </div>
      <p className="text-xs leading-relaxed text-grey">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="font-semibold text-navy hover:text-gold">
          Privacy Policy
        </Link>
        . We treat client information confidentially in line with professional standards
        and NDPA considerations.
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
        {loading ? "Sending…" : "Send enquiry →"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClassName}
      />
    </div>
  );
}
