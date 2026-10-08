export type IndustryDetail = {
  heroDescription: string;
  intro: string;
  challenges: string[];
  priorities: { title: string; description: string }[];
  relatedServiceSlugs: string[];
};

export const industryDetails: Record<string, IndustryDetail> = {
  "financial-services": {
    heroDescription:
      "Tax, capital, reporting and governance for banks, insurers, asset managers and fintechs navigating CBN, FIRS and investor expectations.",
    intro:
      "Financial services in Nigeria operate under intense regulatory scrutiny and rapid product innovation. We help leadership teams align tax, IFRS reporting and internal control with how the business actually earns revenue—whether you are scaling digital channels, managing WHT on distributions or preparing for external audit.",
    challenges: [
      "Complex revenue recognition and fee structures across channels",
      "WHT, VAT and CIT alignment with FIRS and state revenue",
      "Investor and regulator-ready IFRS disclosures",
      "Governance and risk frameworks for board oversight",
    ],
    priorities: [
      {
        title: "Regulatory-ready reporting",
        description:
          "Statutory and management reporting with audit trails that satisfy external auditors and prudential reviews.",
      },
      {
        title: "Tax efficiency with defensibility",
        description:
          "Corporate tax, indirect tax and payroll structured for documentation FIRS may request in review.",
      },
      {
        title: "Transaction and capital events",
        description:
          "Due diligence, valuations and data room support for M&A, fundraising and restructuring.",
      },
    ],
    relatedServiceSlugs: [
      "tax-regulatory-advisory",
      "accounting-finance",
      "risk-governance-compliance",
      "financial-advisory",
    ],
  },
  "real-estate-construction": {
    heroDescription:
      "Project economics, joint ventures, VAT and capital structure for developers, contractors and real asset investors.",
    intro:
      "Real estate and construction combine long cycles, joint ventures and multi-entity structures. We support sponsors and contractors with tax planning on developments, revenue recognition on projects, and reporting packs investors and lenders expect before they release capital.",
    challenges: [
      "Multi-project SPVs, JVs and unclear intercompany flows",
      "VAT and WHT on contracts, professional fees and imports",
      "Cost-to-complete and revenue recognition under IFRS",
      "Lender and investor reporting on large developments",
    ],
    priorities: [
      {
        title: "Structure that matches the deal",
        description:
          "Entity and tax design for developments, including registration and ongoing compliance rhythm.",
      },
      {
        title: "Project financial control",
        description:
          "Budget vs actual, cash calls and milestone reporting for sponsors and construction leadership.",
      },
      {
        title: "Investor and lender confidence",
        description:
          "Models, covenants and governance materials for equity partners and project finance.",
      },
    ],
    relatedServiceSlugs: [
      "financial-advisory",
      "tax-regulatory-advisory",
      "accounting-finance",
      "management-consulting",
    ],
  },
  "energy-oil-gas": {
    heroDescription:
      "Tax, transfer pricing and reporting for operators, services companies and investors in Nigeria's energy value chain.",
    intro:
      "Energy businesses face specialised tax rules, cross-border payments and capital-intensive investment decisions. We help CFOs document transfer pricing, manage indirect taxes on services and imports, and present financial narratives that withstand partner and regulator review.",
    challenges: [
      "Transfer pricing and related-party service charges",
      "Withholding tax on cross-border and contractor payments",
      "Capital project accounting and depreciation policies",
      "Joint venture reporting and cash call discipline",
    ],
    priorities: [
      {
        title: "Tax and TP documentation",
        description:
          "Policies and files aligned to intercompany flows and FIRS expectations.",
      },
      {
        title: "Finance function for complex ops",
        description:
          "Management and statutory reporting with clear segment and project visibility.",
      },
      {
        title: "Transaction support",
        description:
          "Due diligence and structuring for farm-outs, acquisitions and farm-ins.",
      },
    ],
    relatedServiceSlugs: [
      "tax-regulatory-advisory",
      "accounting-finance",
      "financial-advisory",
      "risk-governance-compliance",
    ],
  },
  "technology-fintech": {
    heroDescription:
      "Scale-ready finance, tax and investor diligence for technology platforms and regulated fintech models.",
    intro:
      "Technology and fintech companies move faster than their finance stacks. We build reporting, tax compliance and controls that keep pace with user growth, new revenue lines and fundraising—so diligence is a validation step, not a reset.",
    challenges: [
      "Revenue recognition across subscriptions, fees and partnerships",
      "Payroll, ESOP and multi-state tax as headcount scales",
      "Investor diligence on controls and forecast credibility",
      "Regulatory licensing and reporting where applicable",
    ],
    priorities: [
      {
        title: "Fundraising readiness",
        description:
          "Models, data rooms and governance narratives for seed to growth rounds.",
      },
      {
        title: "Compliance without friction",
        description:
          "FIRS registration, VAT/WHT processes and filing calendars embedded in operations.",
      },
      {
        title: "Virtual finance leadership",
        description:
          "Partner-supervised CFO support until an in-house team is right-sized.",
      },
    ],
    relatedServiceSlugs: [
      "accounting-finance",
      "financial-advisory",
      "tax-regulatory-advisory",
      "outsourced-business-services",
    ],
  },
  "consumer-retail": {
    heroDescription:
      "Margin, inventory, branch performance and tax compliance for retailers and consumer brands across Nigeria.",
    intro:
      "Consumer businesses win or lose on margin, stock turns and branch execution. We help leadership see performance by location and SKU, stabilise month-end close, and keep tax remittances aligned with high-volume transactions.",
    challenges: [
      "Delayed branch reporting and opaque gross margin",
      "VAT and inventory reconciliation across locations",
      "Working-capital pressure from stock and receivables",
      "Expansion into new states and tax jurisdictions",
    ],
    priorities: [
      {
        title: "Management information that drives action",
        description:
          "KPI packs, dashboards and close processes leadership uses weekly.",
      },
      {
        title: "Tax rhythm at scale",
        description:
          "VAT, WHT and payroll compliance designed for multi-branch operations.",
      },
      {
        title: "Growth and restructuring",
        description:
          "Advisory on new formats, acquisitions and cost programmes.",
      },
    ],
    relatedServiceSlugs: [
      "management-consulting",
      "accounting-finance",
      "tax-regulatory-advisory",
      "outsourced-business-services",
    ],
  },
  manufacturing: {
    heroDescription:
      "Cost, transfer pricing, inventory and export tax for manufacturers serving Nigerian and regional markets.",
    intro:
      "Manufacturers balance input costs, FX, inventory and intercompany charges. We support plant and group CFOs with tax health checks, costing visibility, and reporting that supports both operational decisions and authority engagement.",
    challenges: [
      "Transfer pricing on goods, services and management charges",
      "Inventory valuation, wastage and cost allocation",
      "FIRS reviews and penalty exposure on historical positions",
      "Capital investment and incentive planning",
    ],
    priorities: [
      {
        title: "Tax posture and controversy",
        description:
          "Diagnostics, documentation and structured dialogue with authorities.",
      },
      {
        title: "Operational finance",
        description:
          "Standard costing, margin analysis and management accounts by plant or line.",
      },
      {
        title: "Supply chain and expansion",
        description:
          "Entity setup, customs-related indirect tax and JV structures for new capacity.",
      },
    ],
    relatedServiceSlugs: [
      "tax-regulatory-advisory",
      "accounting-finance",
      "management-consulting",
      "risk-governance-compliance",
    ],
  },
};
