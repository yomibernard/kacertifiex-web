import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";

export function InsightsNewsletterBand() {
  return (
    <section className="border-y border-grey-light bg-grey-light/60">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Stay informed
            </p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-charcoal sm:text-3xl">
              Briefings and tax deadlines in your inbox
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-grey">
              Subscribe for new insights from our partners and optional tax calendar
              reminders—no spam, unsubscribe anytime.
            </p>
          </div>
          <div className="rounded-sm bg-white p-6 shadow-sm ring-1 ring-black/5 lg:col-span-5">
            <p className="text-sm font-semibold text-charcoal">Insights &amp; alerts</p>
            <NewsletterSignup list="insights" variant="light" buttonLabel="Subscribe →" />
          </div>
        </div>
      </div>
    </section>
  );
}
