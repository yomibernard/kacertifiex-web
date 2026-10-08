import type { Insight } from "@/lib/cms/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Insight;
  variant?: "default" | "horizontal";
};

export function InsightCard({ item, variant = "default" }: Props) {
  const meta = [
    item.category,
    item.date,
    item.readMinutes ? `${item.readMinutes} min` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  if (variant === "horizontal") {
    return (
      <article className="card-premium group overflow-hidden">
        <Link
          href={`/insights/${item.slug}`}
          className="flex h-full flex-col md:flex-row"
        >
          <div className="relative aspect-[16/10] md:aspect-auto md:w-2/5 md:min-h-[200px]">
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="400px"
            />
          </div>
          <div className="flex flex-1 flex-col p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">{meta}</p>
            <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-charcoal group-hover:text-navy">
              {item.title}
            </h2>
            {item.excerpt && (
              <p className="mt-3 flex-1 text-sm leading-relaxed text-grey line-clamp-3">
                {item.excerpt}
              </p>
            )}
            <span className="mt-5 text-sm font-semibold text-navy group-hover:text-gold">
              Read briefing →
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="card-premium group h-full overflow-hidden">
      <Link href={`/insights/${item.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 400px"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{meta}</p>
          <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-charcoal group-hover:text-navy">
            {item.title}
          </h2>
          {item.excerpt && (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-grey line-clamp-3">
              {item.excerpt}
            </p>
          )}
          <span className="mt-5 text-sm font-semibold text-navy group-hover:text-gold">
            Read briefing →
          </span>
        </div>
      </Link>
    </article>
  );
}
