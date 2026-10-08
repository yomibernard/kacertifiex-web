export type Person = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  image: string;
  bio?: string;
  qualifications?: string;
  /** CSS object-position when image is a shared team banner crop */
  imagePosition?: string;
};

export type InsightSection = {
  heading?: string;
  paragraphs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt?: string;
  readMinutes?: number;
  keyTakeaways?: string[];
  body: InsightSection[];
};

export type Career = {
  slug: string;
  title: string;
  location: string;
  type: string;
  practice: string;
  summary: string;
};

export type TaxCalendarItem = {
  date: string;
  title: string;
  authority: string;
  note?: string;
};

export type TaxCalendarMonth = {
  month: string;
  items: TaxCalendarItem[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  industrySlug?: string;
  summary?: string;
  challenge: string;
  approach: string;
  outcome: string;
  metric?: string;
};

export type TaxIntelligenceMeta = {
  lastReviewed: string;
  disclaimer: string;
  hero?: { eyebrow: string; title: string; description: string };
  resourceLinks?: { title: string; href: string; description: string }[];
  officialLinks: { label: string; url: string }[];
};
