"use client";

import { useState, type FormEvent } from "react";

type Props = {
  list: string;
  variant?: "dark" | "light";
  buttonLabel?: string;
  placeholder?: string;
};

export function NewsletterSignup({
  list,
  variant = "dark",
  buttonLabel = "Subscribe",
  placeholder = "Work email",
}: Props) {
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
        list,
        website: data.website,
      }),
    });
    if (!res.ok) {
      setError("Something went wrong. Please email info@kacertifiex.com.");
      return;
    }
    setDone(true);
  }

  const isDark = variant === "dark";
  const inputClass = isDark
    ? "min-w-0 flex-1 rounded-sm border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-gold"
    : "min-w-0 flex-1 rounded-sm border border-grey-light px-4 py-2.5 text-sm text-charcoal outline-none focus:border-gold focus:ring-1 focus:ring-gold";
  const buttonClass = isDark
    ? "rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-light"
    : "rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep";

  if (done) {
    return (
      <p className={`text-sm ${isDark ? "text-white/90" : "text-grey"}`}>
        Thank you — you&apos;re subscribed. Watch your inbox for updates from KACERTIFIEX.
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
      <label htmlFor={`newsletter-${list}`} className="sr-only">
        Email for updates
      </label>
      <input
        id={`newsletter-${list}`}
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
      <button type="submit" className={buttonClass}>
        {buttonLabel}
      </button>
      {error && (
        <p className={`text-xs sm:basis-full ${isDark ? "text-gold-light" : "text-red-700"}`}>
          {error}
        </p>
      )}
    </form>
  );
}
