export type ServiceDetail = {
  intro: string;
  whoItsFor: string;
  outcomes: string[];
  capabilities: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "tax-regulatory-advisory": {
    intro:
      "Our tax practice helps CFOs and founders manage exposure, stay current with FIRS and state revenue requirements, and plan ahead of reform—not react after assessments land.",
    whoItsFor:
      "CFOs, group tax managers, founders and in-house finance teams at corporates, growth companies and international groups with Nigerian operations.",
    outcomes: [
      "Defensible tax positions with documented support",
      "Compliance calendars that finance teams can run with confidence",
      "Structured resolution paths for audits and disputes",
    ],
    capabilities: [
      "Corporate tax planning & provision",
      "VAT, PAYE, WHT compliance & reconciliation",
      "Transfer pricing documentation & policy",
      "Tax due diligence & health checks",
      "Regulatory liaison & controversy support",
    ],
  },
  "accounting-finance": {
    intro:
      "We strengthen the finance function—from day-to-day books to IFRS-grade reporting—investors and lenders expect when you raise capital or report to a board.",
    whoItsFor:
      "Boards, CFOs and finance leads preparing for audit, fundraising or a step-change in reporting quality across SMEs and mid-market corporates.",
    outcomes: [
      "Timely, accurate management and statutory accounts",
      "IFRS-aligned reporting with clear audit trails",
      "Cash and working-capital visibility leadership can act on",
    ],
    capabilities: [
      "Bookkeeping & month-end close",
      "Management accounts & board packs",
      "IFRS conversion & technical accounting",
      "Virtual CFO & finance leadership",
      "Budgeting, forecasting & modelling",
    ],
  },
  "management-consulting": {
    intro:
      "When strategy must become execution, we help leadership teams redesign processes, align people and metrics, and deliver measurable performance improvement.",
    whoItsFor:
      "CEOs, COOs and functional leaders running performance, expansion or turnaround programmes that must show up in the P&L and cash flow.",
    outcomes: [
      "Clear operating models linked to financial outcomes",
      "Programmes with owners, milestones and KPIs",
      "Stronger governance and decision cadence",
    ],
    capabilities: [
      "Strategy & growth planning",
      "Operating model & process design",
      "Performance improvement & cost programmes",
      "Change management & training",
      "Digital finance & reporting transformation",
    ],
  },
  "financial-advisory": {
    intro:
      "We support critical moments—fundraising, M&A, restructuring and valuations—with models, data rooms and narratives that stand up in diligence.",
    whoItsFor:
      "Founders, investors, corporate development teams and boards navigating transactions, capital raises or balance-sheet restructuring in Nigeria.",
    outcomes: [
      "Investor-ready financial materials",
      "Transaction structures understood by all parties",
      "Board decisions backed by robust analysis",
    ],
    capabilities: [
      "Business valuation & fairness opinions",
      "M&A buy-side & sell-side support",
      "Financial & tax due diligence",
      "Restructuring & capital advisory",
      "Feasibility studies & investor memos",
    ],
  },
  "risk-governance-compliance": {
    intro:
      "Assurance and governance for organisations that must demonstrate control to regulators, investors and internal audit—without slowing the business.",
    whoItsFor:
      "Audit committees, CFOs and risk owners in regulated or investor-backed businesses preparing for external audit or certification.",
    outcomes: [
      "Control environments that reduce surprise findings",
      "Audit readiness across finance and operations",
      "Governance frameworks boards can oversee effectively",
    ],
    capabilities: [
      "External audit support & coordination",
      "Internal control & internal audit",
      "Enterprise & operational risk",
      "Policy, compliance & ethics programmes",
      "Business continuity & fraud risk reviews",
    ],
  },
  "outsourced-business-services": {
    intro:
      "Predictable, partner-supervised delivery of finance, tax and administration—so your team focuses on growth while compliance runs on schedule.",
    whoItsFor:
      "SMEs and growth companies that need reliable close, filing and reporting without building a full in-house finance department yet.",
    outcomes: [
      "Reliable monthly close and filing rhythm",
      "Lower cost of finance versus building in-house too early",
      "Single accountable firm for recurring obligations",
    ],
    capabilities: [
      "Outsourced accounting & reporting",
      "Payroll, PAYE & statutory remittances",
      "Tax filing & regulatory returns",
      "Virtual CFO & company secretarial",
      "Management reporting to leadership",
    ],
  },
};
