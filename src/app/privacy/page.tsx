import { PageHero } from "@/components/layout/PageHero";
import { contact } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How KACERTIFIEX handles personal data under Nigerian data protection law.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-sm leading-relaxed text-grey lg:px-6">
        <p>
          KACERTIFIEX Financial Consulting Services (&quot;KACERTIFIEX&quot;, &quot;we&quot;)
          respects your privacy. This summary describes how we handle personal data
          collected through this website and enquiry channels. A fuller policy will be
          confirmed with legal counsel before launch.
        </p>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            What we collect
          </h2>
          <p className="mt-2">
            Name, company, email, phone, and message content when you submit forms,
            book a consultation, subscribe to updates, or contact us by email,
            phone, or WhatsApp.
          </p>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            Why we use it
          </h2>
          <p className="mt-2">
            To respond to enquiries, provide services under engagement, improve our
            site, and—where you opt in—send relevant insights. We do not sell personal
            data.
          </p>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            Nigeria Data Protection Act
          </h2>
          <p className="mt-2">
            We process data lawfully, keep it only as long as needed for the purpose
            above, and apply appropriate security. You may request access, correction,
            or deletion subject to professional and regulatory obligations.
          </p>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            Contact
          </h2>
          <p className="mt-2">
            Data requests:{" "}
            <a href={`mailto:${contact.email}`} className="text-navy hover:text-gold">
              {contact.email}
            </a>
            . Registered office: {contact.address.line1}, {contact.address.line2},{" "}
            {contact.address.country}.
          </p>
        </div>
        <p className="text-xs text-grey/80">
          Last updated: October 2025. This page will be replaced or supplemented
          following formal legal review.
        </p>
      </section>
    </>
  );
}
