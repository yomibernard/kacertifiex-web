import { brand, siteUrl } from "@/lib/site-config";
import type { Insight } from "@/lib/cms/types";

type Props = {
  insight: Insight;
};

export function ArticleJsonLd({ insight }: Props) {
  const baseUrl = siteUrl();
  const url = `${baseUrl}/insights/${insight.slug}`;
  const image = insight.image.startsWith("http")
    ? insight.image
    : `${baseUrl}${insight.image}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    image: [image],
    url,
    mainEntityOfPage: url,
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
    articleSection: insight.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
