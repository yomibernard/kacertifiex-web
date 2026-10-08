import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { TaxAlertSignup } from "@/components/tax/TaxAlertSignup";
import { getTaxCalendar, getTaxIntelligenceMeta } from "@/lib/cms";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Intelligence Centre",
  description:
    "Nigeria tax calendar, official links and KACERTIFIEX briefings for finance teams.",
};

function formatReviewDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function TaxIntelligencePage() {
  const calendar = await getTaxCalendar();
  const meta = await getTaxIntelligenceMeta();
  const hero = meta.hero ?? {
    eyebrow: "Tax Intelligence Centre",
    title: "Nigerian tax intelligence in one place",
    description: "Calendars, alerts and commentary to help finance teams stay compliant and plan ahead.",
  };
  const resourceLinks = meta.resourceLinks ?? [];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image="/images/service-tax.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <div className="rounded-sm border border-gold/25 bg-grey-light/80 p-6">
              <p className="text-sm leading-relaxed text-grey">{meta.disclaimer}</p>
              <p className="mt-4 text-xs text-grey">
                Calendar last reviewed:{" "}
                <span className="font-semibold text-charcoal">
                  {formatReviewDate(meta.lastReviewed)}
                </span>
                . Confirm dates with FIRS, your state revenue service or your KACERTIFIEX
                adviser before filing.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                {meta.officialLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Indicative Nigeria tax calendar
              </h2>
              <p className="mt-3 max-w-2xl text-base text-grey">
                Use this as a planning aid alongside your accounting year-end and state
                rules.
              </p>
              <div className="mt-8 space-y-10">
                {calendar.map((block) => (
                  <div key={block.month} id={block.month.replace(/\s+/g, "-").toLowerCase()}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-navy">
                      {block.month}
                    </h3>
                    <ul className="mt-4 divide-y divide-grey-light overflow-hidden rounded-sm border border-grey-light bg-white shadow-sm">
                      {block.items.map((item) => (
                        <li
                          key={`${block.month}-${item.title}`}
                          className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-start sm:justify-between"
                        >
                          <div>
                            <p className="font-medium text-charcoal">{item.title}</p>
                            <p className="text-xs font-medium text-navy/80">{item.authority}</p>
                            {item.note && (
                              <p className="mt-2 text-xs leading-relaxed text-grey">
                                {item.note}
                              </p>
                            )}
                          </div>
                          <span className="shrink-0 text-sm font-semibold text-gold sm:text-right">
                            {item.date}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="lg:sticky lg:top-28 lg:space-y-6">
              {resourceLinks.length > 0 && (
                <div className="card-premium p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Partner briefings
                  </p>
                  <ul className="mt-4 space-y-4">
                    {resourceLinks.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="group block">
                          <p className="font-display text-sm font-semibold text-navy group-hover:text-gold">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-grey">
                            {item.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/insights"
                    className="mt-5 inline-flex text-sm font-semibold text-navy hover:text-gold"
                  >
                    Insights centre →
                  </Link>
                </div>
              )}

              <div className="rounded-sm bg-navy-deep p-6 text-white">
                <h2 className="font-display text-lg font-semibold">KACERTIFIEX Tax Alert</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Regulatory updates and deadline reminders for Nigerian businesses.
                </p>
                <div className="mt-5">
                  <TaxAlertSignup />
                </div>
              </div>

              <div className="rounded-sm border border-grey-light bg-white p-6">
                <p className="font-display text-sm font-semibold text-charcoal">
                  Need hands-on support?
                </p>
                <p className="mt-2 text-sm text-grey">
                  Our tax partners run compliance health checks and filing support.
                </p>
                <Link
                  href="/services/tax-regulatory-advisory"
                  className="mt-4 inline-flex text-sm font-semibold text-navy hover:text-gold"
                >
                  Tax practice →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <CtaBand
          title="Turn the calendar into an action plan"
          description="Book a tax planning session—we will align deadlines to your entity, states and transaction plans."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/contact"
          secondaryLabel="Contact office"
        />
      </section>
    </>
  );
}
