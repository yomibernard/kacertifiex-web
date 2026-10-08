import { PageHero } from "@/components/layout/PageHero";
import { contact } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-sm leading-relaxed text-grey lg:px-6">
        <p>
          By using this website you agree to these terms. If you do not agree, please
          do not use the site.
        </p>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            Not professional advice
          </h2>
          <p className="mt-2">
            Content here is general information only. It does not create an adviser–client
            relationship or replace advice under a signed engagement letter with
            KACERTIFIEX.
          </p>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            Accuracy and links
          </h2>
          <p className="mt-2">
            We aim to keep information current but do not guarantee completeness.
            Third-party links are provided for convenience; we are not responsible
            for their content.
          </p>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            Enquiries
          </h2>
          <p className="mt-2">
            Submitting a form does not guarantee availability or acceptance of work.
            We will confirm next steps in writing where appropriate.
          </p>
        </div>
        <p>
          Questions:{" "}
          <a href={`mailto:${contact.email}`} className="text-navy hover:text-gold">
            {contact.email}
          </a>
          .
        </p>
        <p className="text-xs text-grey/80">
          Subject to final legal review before public launch.
        </p>
      </section>
    </>
  );
}
