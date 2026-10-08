import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { serviceDetails } from "@/lib/service-details";
import { industries, services } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Capability"
        title={service.title}
        description={service.summary}
        image={service.image}
      />
      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <p className="text-lg leading-relaxed text-grey sm:text-xl">{detail.intro}</p>
            <blockquote className="border-l-2 border-gold pl-6 font-editorial text-2xl leading-snug text-charcoal sm:text-3xl">
              {detail.whoItsFor}
            </blockquote>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Outcomes we commit to
              </h2>
              <ul className="mt-6 space-y-5">
                {detail.outcomes.map((o, index) => (
                  <li
                    key={o}
                    className="flex gap-5 border-b border-grey-light pb-5 last:border-0"
                  >
                    <span className="font-display text-lg font-bold text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-relaxed text-grey">{o}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                Core capabilities
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {detail.capabilities.map((c) => (
                  <li
                    key={c}
                    className="rounded-sm border border-grey-light bg-grey-light/50 px-4 py-3.5 text-sm font-medium text-charcoal"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-charcoal">
                Other practices
              </h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex rounded-sm border border-navy/15 px-4 py-2 text-sm font-semibold text-navy hover:border-gold hover:text-gold"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="inline-flex px-2 py-2 text-sm font-semibold text-grey hover:text-navy"
                  >
                    All capabilities →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-sm bg-navy-deep p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Engage this practice
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Partner-led scoping call—typically 30 minutes—to align on mandate,
                  timeline and the team we will field.
                </p>
                <Link
                  href="/book-consultation"
                  className="mt-6 flex w-full items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
                >
                  Book consultation →
                </Link>
              </div>
              <div className="card-premium p-6">
                <h3 className="font-display text-sm font-semibold text-charcoal">
                  Sectors we serve
                </h3>
                <ul className="mt-4 space-y-2">
                  {industries.slice(0, 4).map((ind) => (
                    <li key={ind.slug}>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="text-sm text-navy hover:text-gold"
                      >
                        {ind.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/industries"
                  className="mt-4 inline-flex text-sm font-semibold text-navy hover:text-gold"
                >
                  All industries →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <CtaBand
          title="Ready to talk through your situation?"
          description="Send a brief overview or book time with a partner—we respond with clarity on scope, team and next steps."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/contact"
          secondaryLabel="Contact us"
        />
      </section>
    </>
  );
}
