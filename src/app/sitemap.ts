import { getCaseStudies, getInsights, getPeople } from "@/lib/cms";
import { industries, services, siteUrl } from "@/lib/site-config";
import type { MetadataRoute } from "next";

const baseUrl = siteUrl();

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/insights",
  "/people",
  "/international",
  "/client-centre",
  "/careers",
  "/contact",
  "/book-consultation",
  "/tax-intelligence",
  "/case-studies",
  "/privacy",
  "/terms",
  "/cookies",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const people = await getPeople();
  const insights = await getInsights();
  const caseStudies = await getCaseStudies();
  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  services.forEach((s) => {
    pages.push({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  industries.forEach((i) => {
    pages.push({
      url: `${baseUrl}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  });

  people.forEach((p) => {
    pages.push({
      url: `${baseUrl}/people/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  });

  insights.forEach((i) => {
    pages.push({
      url: `${baseUrl}/insights/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  caseStudies.forEach((s) => {
    pages.push({
      url: `${baseUrl}/case-studies/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  });

  return pages;
}
