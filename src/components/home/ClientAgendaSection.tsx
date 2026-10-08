import { getHomeContent } from "@/lib/cms";
import Link from "next/link";

export async function ClientAgendaSection() {
  const home = await getHomeContent();

  return (
    <section className="section-pad bg-grey-light">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            Your agenda
          </p>
          <h2 className="font-editorial mt-3 text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Where do you need the firm&apos;s full weight?
          </h2>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-charcoal/10 sm:grid-cols-2">
          {home.clientAgendas.map((item) => (
            <li key={item.href} className="bg-white">
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between p-8 transition-colors hover:bg-navy-deep hover:text-white lg:p-10"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-grey group-hover:text-white/80">
                    {item.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex text-sm font-semibold text-navy group-hover:text-gold">
                  Explore →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
