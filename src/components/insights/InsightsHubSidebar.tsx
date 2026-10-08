import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function InsightsHubSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <div className="rounded-sm bg-navy-deep p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Tax Intelligence Centre
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/80">
          Deadlines, FIRS links and planning notes—complement our written briefings with
          a live compliance calendar.
        </p>
        <Button href="/tax-intelligence" variant="primary" className="mt-5 w-full">
          Open centre →
        </Button>
      </div>
      <div className="card-premium p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Apply insights
        </p>
        <p className="mt-3 text-sm leading-relaxed text-grey">
          Our partners translate regulatory change into board actions, models and filing
          plans for your business.
        </p>
        <Link
          href="/book-consultation"
          className="mt-5 inline-flex text-sm font-semibold text-navy hover:text-gold"
        >
          Book consultation →
        </Link>
      </div>
      <div className="rounded-sm border border-grey-light bg-grey-light/50 p-6">
        <p className="font-display text-sm font-semibold text-charcoal">Also explore</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/case-studies" className="text-navy hover:text-gold">
              Client results
            </Link>
          </li>
          <li>
            <Link href="/international" className="text-navy hover:text-gold">
              International business
            </Link>
          </li>
          <li>
            <Link href="/services/tax-regulatory-advisory" className="text-navy hover:text-gold">
              Tax practice
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
