import type { CaseStudy } from "@/lib/cms/types";
import Link from "next/link";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="card-premium group flex h-full flex-col p-8 lg:p-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold">
        {study.industry}
      </p>
      <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-charcoal group-hover:text-navy sm:text-2xl">
        <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
      </h2>
      {study.summary && (
        <p className="mt-3 text-sm leading-relaxed text-grey">{study.summary}</p>
      )}
      <p className="mt-5 flex-1 text-sm leading-relaxed text-grey line-clamp-3">
        {study.outcome}
      </p>
      {study.metric && (
        <p className="mt-4 border-l-2 border-gold pl-4 text-sm font-medium text-charcoal">
          {study.metric}
        </p>
      )}
      <Link
        href={`/case-studies/${study.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-navy group-hover:text-gold"
      >
        Read case study →
      </Link>
    </article>
  );
}
