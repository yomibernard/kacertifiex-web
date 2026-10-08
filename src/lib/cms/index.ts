import companyData from "../../../content/company.json";
import homeData from "../../../content/home.json";
import insightsHubData from "../../../content/insights-hub.json";
import internationalData from "../../../content/international.json";
import careersData from "../../../content/careers.json";
import caseStudiesData from "../../../content/case-studies.json";
import insightsData from "../../../content/insights.json";
import peopleData from "../../../content/people.json";
import taxCalendarData from "../../../content/tax-calendar.json";
import taxIntelligenceMeta from "../../../content/tax-intelligence.json";
import type {
  CaseStudy,
  Career,
  Insight,
  Person,
  TaxCalendarMonth,
  TaxIntelligenceMeta,
} from "./types";

/** Local JSON content (Phase 1). Replace fetch layer with Sanity when env is configured. */
export async function getPeople(): Promise<Person[]> {
  return peopleData as Person[];
}

export async function getInsights(): Promise<Insight[]> {
  return insightsData as Insight[];
}

export async function getInsight(slug: string): Promise<Insight | undefined> {
  return (await getInsights()).find((i) => i.slug === slug);
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return caseStudiesData as CaseStudy[];
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  return (await getCaseStudies()).find((s) => s.slug === slug);
}

export async function getTaxIntelligenceMeta(): Promise<TaxIntelligenceMeta> {
  return taxIntelligenceMeta as TaxIntelligenceMeta;
}

export async function getPerson(slug: string): Promise<Person | undefined> {
  return (await getPeople()).find((p) => p.slug === slug);
}

export async function getCareers(): Promise<Career[]> {
  return careersData as Career[];
}

export async function getTaxCalendar(): Promise<TaxCalendarMonth[]> {
  return taxCalendarData as TaxCalendarMonth[];
}

export type CompanyProfile = typeof companyData;

export async function getCompanyProfile(): Promise<CompanyProfile> {
  return companyData;
}

export type HomeContent = typeof homeData;

export async function getHomeContent(): Promise<HomeContent> {
  return homeData;
}

export type InsightsHubContent = typeof insightsHubData;

export async function getInsightsHub(): Promise<InsightsHubContent> {
  return insightsHubData;
}

export type InternationalContent = typeof internationalData;

export async function getInternationalContent(): Promise<InternationalContent> {
  return internationalData;
}
