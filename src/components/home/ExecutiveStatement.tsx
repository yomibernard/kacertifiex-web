import { executivePillars } from "@/lib/site-config";
import { getHomeContent } from "@/lib/cms";

export async function ExecutiveStatement() {
  const home = await getHomeContent();

  return (
    <section className="section-pad border-b border-grey-light bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Our purpose
            </p>
            <h2 className="font-editorial mt-3 text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              {home.promise.title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-grey sm:text-xl">{home.promise.body}</p>
            <ul className="mt-12 grid gap-8 sm:grid-cols-3">
              {executivePillars.map((pillar, index) => (
                <li key={pillar.title} className="border-t border-navy/10 pt-6">
                  <span className="font-display text-sm font-bold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {pillar.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
