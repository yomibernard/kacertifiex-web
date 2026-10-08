import { PageHero } from "@/components/layout/PageHero";
import { contact } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero title="Cookie Policy" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-sm leading-relaxed text-grey lg:px-6">
        <p>
          This site uses essential cookies for basic operation. With your consent
          (via the cookie banner), we may use analytics tools such as Google Analytics
          4 and Microsoft Clarity to understand how visitors use the site.
        </p>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            Managing consent
          </h2>
          <p className="mt-2">
            You can accept or decline non-essential cookies when prompted. Declining
            limits analytics only; core pages and forms still work.
          </p>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold text-charcoal">
            More information
          </h2>
          <p className="mt-2">
            See our{" "}
            <Link href="/privacy" className="text-navy hover:text-gold">
              Privacy Policy
            </Link>{" "}
            for how personal data is handled. Contact{" "}
            <a href={`mailto:${contact.email}`} className="text-navy hover:text-gold">
              {contact.email}
            </a>{" "}
            with questions.
          </p>
        </div>
      </section>
    </>
  );
}
