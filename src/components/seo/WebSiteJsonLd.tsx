import { brand, siteUrl } from "@/lib/site-config";

export function WebSiteJsonLd() {
  const baseUrl = siteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: baseUrl,
    description: brand.heroSubtext,
    inLanguage: "en-NG",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
