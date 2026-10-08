"use client";

import { services } from "@/lib/site-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function ServicesNavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = pathname.startsWith("/services");

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/services"
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
          active ? "text-gold" : "text-white/85 hover:text-white"
        }`}
        aria-expanded={open}
      >
        Services
        <Chevron open={open} />
      </Link>
      {open && (
        <div className="absolute left-0 top-full z-50 w-[min(100vw-2rem,520px)] pt-3">
          <div className="rounded-sm border border-white/10 bg-navy-deep/98 p-4 shadow-2xl backdrop-blur-md">
            <ul className="grid gap-1 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block rounded-sm px-3 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-medium">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-3 block border-t border-white/10 pt-3 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light"
            >
              All capabilities →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
