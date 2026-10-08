import { getInsights } from "@/lib/cms";
import Image from "next/image";
import Link from "next/link";

export async function InsightsGridSection() {
  const insights = (await getInsights()).slice(0, 3);

  return (
    <section className="section-pad border-y border-grey-light bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Insights
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
              Ideas for leaders navigating Nigeria&apos;s economy
            </h2>
          </div>
          <Link
            href="/insights"
            className="shrink-0 text-sm font-semibold text-navy hover:text-gold"
          >
            All insights →
          </Link>
        </div>
        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {insights.map((item) => (
            <li key={item.slug}>
              <article className="card-premium group flex h-full flex-col">
                <Link href={`/insights/${item.slug}`} className="flex flex-1 flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                      {item.category}
                      {item.readMinutes ? ` · ${item.readMinutes} min read` : ""}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-charcoal group-hover:text-navy">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">
                        {item.excerpt}
                      </p>
                    )}
                    <span className="mt-5 text-sm font-semibold text-navy group-hover:text-gold">
                      Read article →
                    </span>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
