import { SectionIntro } from "@/components/layout/SectionIntro";
import { challenges } from "@/lib/site-config";
import Link from "next/link";

export function ChallengeSection() {
  return (
    <section className="section-pad border-t border-grey-light bg-grey-light" id="challenges">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="How can we help?"
          title="Tell us the outcome you are driving"
          description="Select the closest priority—we will connect you to the partner and practice best placed to respond within one business day."
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {challenges.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex h-full items-center justify-between rounded-sm border border-white bg-white px-5 py-4 shadow-sm transition-all hover:border-gold/50 hover:shadow-md"
              >
                <span className="font-display text-sm font-semibold text-charcoal group-hover:text-navy">
                  {item.title}
                </span>
                <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-grey">
          Not sure where to begin?{" "}
          <Link href="/contact" className="font-semibold text-navy hover:text-gold">
            Speak to an adviser
          </Link>
        </p>
      </div>
    </section>
  );
}
