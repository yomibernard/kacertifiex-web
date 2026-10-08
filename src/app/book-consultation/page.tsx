import { BookConsultationForm } from "@/components/contact/BookConsultationForm";
import { PageHero } from "@/components/layout/PageHero";
import { contact, whatsappUrl } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a partner-led consultation with KACERTIFIEX—virtual, by phone or at our Lagos office.",
};

const topicMap: Record<string, string> = {
  tax: "Tax & regulatory advisory",
  finance: "Accounting & finance",
  consulting: "Management consulting",
  advisory: "Financial advisory",
  risk: "Audit, risk & governance",
  outsourced: "Outsourced business services",
  international: "International / company setup",
};

type Props = { searchParams: Promise<{ topic?: string }> };

export default async function BookConsultationPage({ searchParams }: Props) {
  const { topic } = await searchParams;
  const defaultPractice = topic ? topicMap[topic] : undefined;
  const wa = whatsappUrl("consultation booking");

  return (
    <>
      <PageHero
        eyebrow="Engage the firm"
        title="Book a partner-led consultation"
        description="Thirty focused minutes to align on your mandate, timeline and the KACERTIFIEX team we will field—confirmed by email or WhatsApp within one business day."
        image="/images/hero-boardroom.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BookConsultationForm defaultPractice={defaultPractice} whatsappHref={wa} />
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-sm bg-navy-deep p-8 text-white lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                What to expect
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/85">
                <li>Partner or senior manager on the call—not a generic intake bot.</li>
                <li>Confidential discussion of your sector, urgency and desired outcome.</li>
                <li>Clear next step: proposal, diagnostic or routed specialist follow-up.</li>
              </ul>
              <p className="mt-6 text-sm text-white/70">
                Prefer instant routing?{" "}
                <a href={wa} className="font-semibold text-gold hover:text-white" target="_blank" rel="noopener noreferrer">
                  WhatsApp our office
                </a>
              </p>
            </div>
            <div className="card-premium p-6 text-sm text-grey">
              <p className="font-display font-semibold text-charcoal">Lagos office</p>
              <p className="mt-2">
                {contact.address.line1}, {contact.address.line2}
              </p>
              <p className="mt-3">
                <a href={contact.phoneHref} className="font-semibold text-navy hover:text-gold">
                  {contact.phone}
                </a>
              </p>
              <Link href="/contact" className="mt-4 inline-flex font-semibold text-navy hover:text-gold">
                Full contact details →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
