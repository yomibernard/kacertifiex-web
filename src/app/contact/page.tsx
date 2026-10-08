import { ContactForm } from "@/components/contact/ContactForm";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { contact, mapsDirectionsUrl, whatsappUrl } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact KACERTIFIEX in Ilupeju, Lagos. Phone, email, WhatsApp and enquiry form.",
};

const practiceEnquiry: Record<string, string> = {
  "sme-advisory": "SME advisory",
  "wealth-management": "Wealth management consulting",
};

type Props = { searchParams: Promise<{ practice?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { practice } = await searchParams;
  const defaultEnquiry = practice ? practiceEnquiry[practice] : undefined;
  const wa = whatsappUrl("general enquiry");

  const officeHours =
    (contact as typeof contact & { officeHours?: string }).officeHours ??
    "Mon–Fri, 9:00–17:00 (WAT)";

  const mapsQuery =
    (contact as typeof contact & { mapsQuery?: string }).mapsQuery ??
    `${contact.address.line1}, ${contact.address.line2}`;

  return (
    <>
      <PageHero
        eyebrow="Contact KFCS"
        title="Speak with our Lagos team"
        description="WhatsApp for fast routing, phone for urgent matters, or send a structured enquiry—we connect you to the right partner and practice."
        image="/images/hero-premium.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="card-premium p-8">
              <h2 className="font-display text-lg font-semibold text-charcoal">
                Lagos headquarters
              </h2>
              <address className="mt-4 not-italic leading-relaxed text-grey">
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.country}
              </address>
              <a
                href={mapsDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-navy hover:text-gold"
              >
                Get directions →
              </a>
              <dl className="mt-8 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-charcoal">Hours</dt>
                  <dd className="text-grey">{officeHours}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal">Phone</dt>
                  <dd>
                    <a href={contact.phoneHref} className="text-navy hover:text-gold">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal">Email</dt>
                  <dd>
                    <a href={`mailto:${contact.email}`} className="text-navy hover:text-gold">
                      {contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
                >
                  WhatsApp
                </a>
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center rounded-sm border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:border-gold hover:text-gold"
                >
                  Book consultation
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-grey-light shadow-sm">
              <iframe
                title="KACERTIFIEX office location map"
                className="h-64 w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=15&output=embed`}
              />
            </div>
          </div>
          <div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-grey">
              Complete the form and a partner will respond within one business day. Include
              company name and timeline if you have an active tax, transaction or reporting
              deadline.
            </p>
            <ContactForm defaultEnquiry={defaultEnquiry} whatsappHref={wa} />
          </div>
        </div>

        <CtaBand
          title="Prefer a scheduled conversation?"
          description="Book a 30-minute consultation—virtual, phone or in person at Ilupeju."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/insights"
          secondaryLabel="Read insights"
        />
      </section>
    </>
  );
}
