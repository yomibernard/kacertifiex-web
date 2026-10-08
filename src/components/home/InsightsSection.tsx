import { InsightCard } from "@/components/insights/InsightCard";
import { insights } from "@/lib/site-config";
import Link from "next/link";

export function InsightsSection() {
  return (
    <section className="px-4 py-16 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Latest insights
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
              Tax, regulation and finance intelligence for Nigeria
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-sm font-semibold text-navy hover:text-gold"
          >
            Insights centre →
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {insights.map((item) => (
            <li key={item.slug}>
              <InsightCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
