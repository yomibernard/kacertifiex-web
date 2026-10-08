import { brand, siteUrl } from "@/lib/site-config";
import type { Person } from "@/lib/cms/types";

export function PersonJsonLd({ person }: { person: Person }) {
  const baseUrl = siteUrl();
  const url = `${baseUrl}/people/${person.slug}`;
  const image = person.image.startsWith("http")
    ? person.image
    : `${baseUrl}${person.image}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    url,
    image,
    worksFor: {
      "@type": "Organization",
      name: brand.name,
      url: baseUrl,
    },
    ...(person.qualifications ? { honorificSuffix: person.qualifications } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
