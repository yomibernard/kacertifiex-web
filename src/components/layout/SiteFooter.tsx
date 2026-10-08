import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import {
  brand,
  contact,
  mapsDirectionsUrl,
  services,
  socialLinks,
  whatsappUrl,
} from "@/lib/site-config";
import Link from "next/link";

export function SiteFooter() {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/insights", label: "Insights" },
    { href: "/case-studies", label: "Case studies" },
    { href: "/tax-intelligence", label: "Tax Intelligence" },
    { href: "/international", label: "International" },
    { href: "/book-consultation", label: "Book consultation" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <footer className="bg-navy-deep text-white">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url(/images/hero-premium.webp)" }}
          aria-hidden
        />
        <div className="hero-gradient relative px-4 py-20 lg:px-6">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl">
              Let&apos;s build your next chapter with clarity.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/85">
              Partner-led advice from Ilupeju, Lagos—tax, finance, consulting and
              international setup for organisations that expect global standards.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/book-consultation" variant="primary">
                Book a consultation →
              </Button>
              <a
                href={whatsappUrl("general enquiry")}
                className="inline-flex items-center justify-center rounded-sm border border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-14 lg:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              {brand.name} ({brand.shortName}) — {brand.tagline}. Trusted by Nigerian
              businesses and international investors since 2011.
            </p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Capabilities
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Firm
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-white/75">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/client-centre" className="hover:text-white">
                  Client centre
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Lagos office
            </h3>
            <address className="mt-5 space-y-2 text-sm not-italic text-white/75">
              <p>{contact.address.line1}</p>
              <p>{contact.address.line2}</p>
              <p>{contact.address.country}</p>
              <p className="pt-2">
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </p>
              <p>
                <a
                  href={mapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Directions
                </a>
              </p>
            </address>
            {socialLinks.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/75 hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name} Financial Consulting Services.
            All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
