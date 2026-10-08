"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "kfcs-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-16 left-0 right-0 z-40 px-4 md:bottom-4 md:left-auto md:right-4 md:max-w-md"
      role="dialog"
      aria-labelledby="cookie-title"
    >
      <div className="rounded-lg border border-grey-light bg-white p-4 shadow-lg">
        <h2 id="cookie-title" className="text-sm font-semibold text-charcoal">
          Cookies & privacy
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-grey">
          We use essential cookies and optional analytics (GA4 / Clarity) to improve
          the site. See our{" "}
          <Link href="/cookies" className="text-navy underline hover:text-gold">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-navy underline hover:text-gold">
            Privacy Policy
          </Link>
          . Your choices should align with NDPA requirements for Nigerian visitors.
        </p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={accept}
            className="flex-1 rounded-md bg-navy px-3 py-2 text-xs font-semibold text-white hover:bg-navy-deep"
          >
            Accept
          </button>
          <Link
            href="/cookies"
            className="inline-flex items-center rounded-md border border-grey-light px-3 py-2 text-xs font-medium text-charcoal hover:bg-grey-light"
          >
            Manage
          </Link>
        </div>
      </div>
    </div>
  );
}
