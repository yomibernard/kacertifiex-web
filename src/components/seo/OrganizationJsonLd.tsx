import { brand, contact, siteUrl, socialLinks } from "@/lib/site-config";

const baseUrl = siteUrl();

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    alternateName: brand.shortName,
    url: baseUrl,
    description: brand.heroSubtext,
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    telephone: contact.phone,
    email: contact.email,
    ...(socialLinks.length > 0
      ? { sameAs: socialLinks.map((link) => link.url) }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
