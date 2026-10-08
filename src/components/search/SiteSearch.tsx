"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  challenges,
  industries,
  insights,
  people,
  services,
} from "@/lib/site-config";

type SiteSearchProps = {
  open: boolean;
  onClose: () => void;
};

export function SiteSearch({ open, onClose }: SiteSearchProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const items: { title: string; href: string; type: string }[] = [];

    services.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)) {
        items.push({ title: s.title, href: `/services/${s.slug}`, type: "Service" });
      }
    });
    industries.forEach((i) => {
      if (i.title.toLowerCase().includes(q)) {
        items.push({ title: i.title, href: `/industries/${i.slug}`, type: "Industry" });
      }
    });
    people.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q)) {
        items.push({ title: p.name, href: `/people#${p.slug}`, type: "People" });
      }
    });
    insights.forEach((ins) => {
      if (ins.title.toLowerCase().includes(q)) {
        items.push({ title: ins.title, href: `/insights/${ins.slug}`, type: "Insight" });
      }
    });
    challenges.forEach((c) => {
      if (c.title.toLowerCase().includes(q)) {
        items.push({ title: c.title, href: c.href, type: "Challenge" });
      }
    });

    return items.slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-navy/60 p-4 pt-24 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-lg bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-grey-light p-4">
          <input
            autoFocus
            type="search"
            placeholder="Search services, people, insights…"
            className="w-full rounded-md border border-grey-light px-4 py-3 text-charcoal outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {query && results.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-grey">
              No results. Try &quot;tax&quot;, &quot;Lagos&quot;, or a service name.
            </li>
          )}
          {results.map((r) => (
            <li key={`${r.type}-${r.href}-${r.title}`}>
              <Link
                href={r.href}
                className="flex items-center justify-between rounded-md px-4 py-3 hover:bg-grey-light"
                onClick={onClose}
              >
                <span className="text-sm font-medium text-charcoal">{r.title}</span>
                <span className="text-xs text-grey">{r.type}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-grey-light p-3 text-right">
          <button
            type="button"
            className="text-sm text-grey hover:text-charcoal"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
