import { Button } from "@/components/ui/Button";
import { getCaseStudies } from "@/lib/cms";
import Link from "next/link";

export async function ImpactSpotlight() {
  const studies = await getCaseStudies();

  return (
    <section className="section-pad bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Client results
            </p>
            <h2 className="font-editorial mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Impact you can describe to your board
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              Representative engagements across tax, reporting and transactions—anonymised
              for confidentiality, structured for clarity.
            </p>
            <Link
              href="/case-studies"
              className="mt-8 inline-flex text-sm font-semibold text-gold hover:text-white"
            >
              All case studies →
            </Link>
          </div>
          <ul className="grid gap-6 lg:col-span-7 lg:grid-cols-1">
            {studies.map((study) => (
              <li key={study.slug}>
                <article className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-gold/30 lg:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    {study.industry}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug sm:text-xl">
                    <Link href={`/case-studies/${study.slug}`} className="hover:text-gold">
                      {study.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{study.outcome}</p>
                  {study.metric && (
                    <p className="mt-3 border-l-2 border-gold pl-3 text-sm font-medium text-white/90">
                      {study.metric}
                    </p>
                  )}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-gold hover:text-white"
                  >
                    Read story →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 text-center lg:hidden">
          <Button href="/case-studies" variant="outline">
            View all case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
