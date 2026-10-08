import siteJson from "../../content/site.json";

export const brand = {
  name: "KACERTIFIEX",
  shortName: "KFCS",
  tagline: "Financial Consulting Services",
  positioning: "Lasting advantage for Nigeria's most ambitious leaders",
  heroSubtext:
    "Partner-led tax, audit and consulting for corporates, growth companies and international investors—built for boardrooms that expect global standards.",
  eyebrow: "KACERTIFIEX · Financial Consulting Services",
} as const;

export const executivePillars = [
  {
    title: "Clarity",
    description:
      "Numbers, tax positions and risk narratives leadership can explain—in one page, to any audience.",
  },
  {
    title: "Conviction",
    description:
      "Advice grounded in FIRS, IFRS and sector reality—not generic templates imported from other markets.",
  },
  {
    title: "Commitment",
    description:
      "Partners who stay engaged from diagnostic through implementation, filing and transaction close.",
  },
] as const;

export const contact = siteJson.contact;
export const stats = siteJson.stats;

export type Credential = { title: string; description: string };

export const credentials: Credential[] =
  (siteJson as { credentials?: Credential[] }).credentials ?? [];

export type SocialLink = { label: string; url: string };

export const socialLinks: SocialLink[] = (
  (siteJson as { social?: SocialLink[] }).social ?? []
).filter((link) => link.url?.trim());

export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kacertifiex.com";
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/people", label: "Our People" },
  { href: "/international", label: "International Business" },
  { href: "/client-centre", label: "Client Centre" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const challenges = [
  {
    id: "financial-performance",
    title: "Improve financial performance",
    href: "/services/management-consulting",
  },
  {
    id: "tax-issue",
    title: "Resolve a tax issue",
    href: "/services/tax-regulatory-advisory",
  },
  {
    id: "financial-statements",
    title: "Prepare financial statements",
    href: "/services/accounting-finance",
  },
  {
    id: "cash-flow",
    title: "Improve cash flow",
    href: "/services/accounting-finance",
  },
  {
    id: "raise-capital",
    title: "Raise capital",
    href: "/services/financial-advisory",
  },
  {
    id: "restructure",
    title: "Restructure my business",
    href: "/services/financial-advisory",
  },
  {
    id: "setup-nigeria",
    title: "Set up a business in Nigeria",
    href: "/international",
  },
  {
    id: "governance",
    title: "Improve governance",
    href: "/services/risk-governance-compliance",
  },
  {
    id: "manage-risk",
    title: "Manage risk",
    href: "/services/risk-governance-compliance",
  },
  {
    id: "buy-sell",
    title: "Buy or sell a business",
    href: "/services/financial-advisory",
  },
  {
    id: "digitise-finance",
    title: "Digitise finance operations",
    href: "/services/management-consulting",
  },
  {
    id: "audit-prep",
    title: "Prepare for an audit",
    href: "/services/risk-governance-compliance",
  },
] as const;

export const services = [
  {
    slug: "tax-regulatory-advisory",
    title: "Tax & Regulatory Advisory",
    summary:
      "Corporate tax, VAT, WHT and controversy—planned and defended with FIRS and state revenue in view.",
    image: "/images/service-tax.webp",
  },
  {
    slug: "accounting-finance",
    title: "Accounting & Finance",
    summary:
      "IFRS reporting, management accounts and controls that boards and investors rely on.",
    image: "/images/service-finance.webp",
  },
  {
    slug: "management-consulting",
    title: "Management Consulting",
    summary:
      "Operating model, performance and growth—translating strategy into measurable financial outcomes.",
    image: "/images/service-consulting.webp",
  },
  {
    slug: "financial-advisory",
    title: "Financial Advisory",
    summary:
      "M&A, valuations, restructuring and capital strategy when the stakes are highest.",
    image: "/images/service-advisory.webp",
  },
  {
    slug: "risk-governance-compliance",
    title: "Audit, Risk & Governance",
    summary:
      "Audit readiness, internal control and governance frameworks that satisfy regulators and investors.",
    image: "/images/service-audit.webp",
  },
  {
    slug: "outsourced-business-services",
    title: "Outsourced Business Services",
    summary:
      "Embedded finance, tax and admin capacity—so leadership focuses on customers and growth.",
    image: "/images/service-outsourced.webp",
  },
] as const;

export const whyPoints = [
  {
    title: "Partner-led from day one",
    description:
      "Your mandate is sponsored by a named partner with authority to mobilise the firm.",
  },
  {
    title: "One firm, six practices",
    description:
      "Tax, finance, consulting, transactions, governance and outsourced delivery—integrated, not siloed.",
  },
  {
    title: "Built for diligence",
    description:
      "Reporting packs, models and data rooms structured for investors and international counterparties.",
  },
  {
    title: "Discretion by design",
    description:
      "Confidential processes and professional ethics appropriate to sensitive tax and transaction work.",
  },
] as const;

export const industries = [
  {
    slug: "financial-services",
    title: "Financial Services",
    image: "/images/service-audit.webp",
  },
  {
    slug: "real-estate-construction",
    title: "Real Estate & Construction",
    image: "/images/hero-lagos.webp",
  },
  {
    slug: "energy-oil-gas",
    title: "Energy & Oil & Gas",
    image: "/images/industry-general.webp",
  },
  {
    slug: "technology-fintech",
    title: "Technology & Fintech",
    image: "/images/hero-strategy.webp",
  },
  {
    slug: "consumer-retail",
    title: "Consumer & Retail",
    image: "/images/service-consulting.webp",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    image: "/images/industry-general.webp",
  },
] as const;

import caseStudiesJson from "../../content/case-studies.json";
import insightsJson from "../../content/insights.json";
import peopleJson from "../../content/people.json";

export const insights = insightsJson;
export const people = peopleJson;
export const caseStudies = caseStudiesJson;

export const whatsappTopics = [
  { id: "adviser", label: "Speak to an Adviser" },
  { id: "tax", label: "Tax Advisory" },
  { id: "financial", label: "Financial Advisory" },
  { id: "accounting", label: "Accounting" },
  { id: "consulting", label: "Business Consulting" },
  { id: "general", label: "General Enquiry" },
] as const;

export function mapsDirectionsUrl(): string {
  const query =
    (siteJson.contact as { mapsQuery?: string }).mapsQuery ??
    `${contact.address.line1}, ${contact.address.line2}, ${contact.address.country}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function whatsappUrl(topic: string): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? contact.whatsappNumber;
  const message = encodeURIComponent(
    `Hello KACERTIFIEX, I would like to speak with someone regarding ${topic} for my company.`,
  );
  return `https://wa.me/${number}?text=${message}`;
}
