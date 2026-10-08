import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { contact, whatsappUrl } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Centre",
  description: "Secure client access for KACERTIFIEX engagements—documents, filings and messaging.",
};

export default function ClientCentrePage() {
  return (
    <>
      <PageHero
        eyebrow="Client centre"
        title="Your secure client workspace—coming in Phase 2"
        description="We are building a portal for documents, invoices, compliance calendars and secure messaging. Existing clients retain direct partner access today."
        image="/images/hero-boardroom.webp"
      />
      <section className="section-pad mx-auto max-w-2xl text-center">
        <p className="text-base leading-relaxed text-grey">
          For urgent support, contact your engagement partner or reach our Lagos office
          on{" "}
          <a href={contact.phoneHref} className="font-semibold text-navy hover:text-gold">
            {contact.phone}
          </a>{" "}
          or{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold text-navy hover:text-gold">
            {contact.email}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={whatsappUrl("client support")} variant="secondary">
            WhatsApp support
          </Button>
          <Button href="/contact" variant="ghost" className="!text-navy">
            Contact office
          </Button>
        </div>
      </section>
    </>
  );
}
