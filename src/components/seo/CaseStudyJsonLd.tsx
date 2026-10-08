import { brand, siteUrl } from "@/lib/site-config";
import type { CaseStudy } from "@/lib/cms/types";

export function CaseStudyJsonLd({ study }: { study: CaseStudy }) {
  const baseUrl = siteUrl();
  const url = `${baseUrl}/case-studies/${study.slug}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary ?? study.outcome,
    url,
    author: {
      "@type": "Organization",
      name: brand.name,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: baseUrl,
    },
    about: study.industry,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
