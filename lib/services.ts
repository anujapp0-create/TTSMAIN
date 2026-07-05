import {
  FileText,
  Building2,
  Calculator,
  ShieldCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  heroDescription: string;
  whoItsFor: string[];
  features: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  flagship?: boolean;
}

export const services: Service[] = [
  {
    slug: "private-limited-company-registration",
    icon: Rocket,
    flagship: true,
    title: "Private Limited Company Registration",
    shortDescription:
      "End-to-end incorporation of your Private Limited Company — name approval, MCA filing, PAN/TAN, and everything in between.",
    heroDescription:
      "Turn your idea into a registered company. We handle name approval, DSC and DIN, SPICe+ incorporation filing with the Ministry of Corporate Affairs, and your company PAN and TAN — so you can focus on building, not paperwork.",
    whoItsFor: [
      "Founders launching a new startup or business",
      "Freelancers and proprietors upgrading to a private limited company for credibility and funding",
      "Businesses that want limited liability protection for their owners",
      "Anyone who wants to raise funding or bring on investors down the line",
    ],
    features: [
      {
        title: "DSC & DIN for all directors",
        description:
          "Digital Signature Certificates and Director Identification Numbers arranged for every proposed director before filing begins.",
      },
      {
        title: "Company name approval",
        description:
          "We check name availability and file for reservation with the MCA, with backup name options so approval doesn't stall.",
      },
      {
        title: "SPICe+ incorporation filing",
        description:
          "Complete filing of SPICe+ (INC-32) along with MOA, AOA, and INC-9 — the full incorporation bundle, filed correctly the first time.",
      },
      {
        title: "PAN, TAN & bank account support",
        description:
          "Your company PAN and TAN are issued as part of incorporation, and we guide you through opening your current account.",
      },
      {
        title: "GST & Udyam registration add-on",
        description:
          "Ready to invoice from day one — we can register your new company for GST and Udyam/MSME right after incorporation.",
      },
      {
        title: "Post-incorporation compliance kickoff",
        description:
          "Guidance on statutory registers, your first board meeting, and a compliance calendar so you start off compliant.",
      },
    ],
    process: [
      {
        title: "Consultation & documents",
        description:
          "We collect PAN, Aadhaar, and address proof for all directors, proposed company names, and registered office proof.",
      },
      {
        title: "DSC & name approval",
        description:
          "Digital signature certificates are issued and your company name is reserved with the MCA.",
      },
      {
        title: "SPICe+ filing",
        description:
          "Incorporation forms are filed with the MCA, including your Memorandum and Articles of Association.",
      },
      {
        title: "Certificate of Incorporation",
        description:
          "Once approved, you receive your Certificate of Incorporation along with your company PAN and TAN.",
      },
    ],
    faqs: [
      {
        question: "How long does Private Limited company registration take?",
        answer:
          "It depends on document readiness and MCA processing times, but once your documents and name choices are in order, we move through DSC, name approval, and SPICe+ filing without delay on our end.",
      },
      {
        question: "How many directors and shareholders do I need?",
        answer:
          "A minimum of two directors and two shareholders is required — these can be the same two people. At least one director must be a resident of India.",
      },
      {
        question: "Is there a minimum capital requirement?",
        answer:
          "No, there's no minimum paid-up capital requirement under current rules. You can incorporate with whatever capital amount suits your business.",
      },
      {
        question: "What happens after my company is incorporated?",
        answer:
          "We can take you straight into GST registration, bank account opening, and ongoing bookkeeping and ROC compliance, so nothing falls through the cracks after incorporation.",
      },
      {
        question: "Can you also register an LLP or OPC instead?",
        answer:
          "Yes — if a Private Limited Company isn't the right fit, we also handle LLP, One Person Company, and proprietorship registration. Get in touch and we'll recommend the right structure for you.",
      },
    ],
  },
  {
    slug: "individual-tax-filing",
    icon: FileText,
    title: "Individual Tax Filing",
    shortDescription:
      "Accurate, on-time income tax return filing for salaried employees, professionals, and freelancers.",
    heroDescription:
      "From Form 16 reconciliation to capital gains and multiple income sources, we prepare and file your Income Tax Return correctly the first time — and help you claim every deduction you're entitled to.",
    whoItsFor: [
      "Salaried employees with Form 16 income",
      "Freelancers and consultants with professional income",
      "Individuals with capital gains from stocks, mutual funds, or property",
      "People with income from multiple sources or multiple Form 16s",
    ],
    features: [
      {
        title: "ITR-1 to ITR-4 filing",
        description:
          "We identify the correct ITR form for your income profile and file it accurately with the Income Tax Department.",
      },
      {
        title: "Old vs. new regime comparison",
        description:
          "We calculate your tax liability under both regimes and recommend the one that saves you more.",
      },
      {
        title: "Deduction & exemption review",
        description:
          "80C, 80D, HRA, home loan interest, and other eligible deductions are reviewed so nothing is missed.",
      },
      {
        title: "Refund tracking",
        description:
          "Once filed, we track your refund status and help resolve any processing delays with the department.",
      },
    ],
    process: [
      {
        title: "Share your documents",
        description:
          "Send us your Form 16, bank statements, and investment proofs via WhatsApp or email.",
      },
      {
        title: "We prepare your computation",
        description:
          "Our team reviews your income, deductions, and tax regime options and prepares a draft computation.",
      },
      {
        title: "You review & approve",
        description: "We walk you through the computation before anything is filed.",
      },
      {
        title: "We e-file & confirm",
        description:
          "Your return is filed on the income tax portal and you receive the acknowledgment (ITR-V) immediately.",
      },
    ],
    faqs: [
      {
        question: "What documents do I need to file my ITR?",
        answer:
          "Typically your Form 16, bank statements, investment proofs (for 80C/80D), and details of any capital gains or additional income. We'll send you a simple checklist once you get in touch.",
      },
      {
        question: "Can you file returns for previous years?",
        answer:
          "Belated returns can be filed within the timelines allowed by the Income Tax Department. Reach out to us with your details and we'll confirm what's possible for your situation.",
      },
      {
        question: "Do you help if I've already received a refund but it's wrong?",
        answer:
          "Yes — we review the intimation under Section 143(1) and file a rectification if there's a mismatch in the processed refund.",
      },
    ],
  },
  {
    slug: "business-tax-filing",
    icon: Building2,
    title: "Business Tax Filing",
    shortDescription:
      "GST returns, business income tax, and TDS compliance for proprietorships, partnerships, LLPs, and companies.",
    heroDescription:
      "Whether you run a proprietorship, partnership, LLP, or private limited company, we manage your GST returns, income tax filing, and TDS compliance so you can focus on running your business.",
    whoItsFor: [
      "Proprietorships and partnership firms",
      "LLPs and private limited companies",
      "Shop owners, traders, and service providers registered under GST",
      "Businesses required to deduct or collect TDS/TCS",
    ],
    features: [
      {
        title: "GST return filing",
        description:
          "Monthly and quarterly GSTR-1, GSTR-3B, and annual GSTR-9 filing, done on time, every time.",
      },
      {
        title: "Business income tax returns",
        description:
          "ITR filing for proprietorships, firms, LLPs, and companies, including presumptive taxation under 44AD/44ADA where applicable.",
      },
      {
        title: "TDS/TCS return filing",
        description:
          "Quarterly TDS returns (24Q/26Q) prepared and filed, with Form 16/16A issued to your deductees.",
      },
      {
        title: "Tax audit support",
        description:
          "Where turnover limits trigger a tax audit under Section 44AB, we coordinate the audit and prepare the required schedules.",
      },
      {
        title: "Advance tax planning",
        description:
          "We estimate your quarterly advance tax liability so you avoid interest under Sections 234B/234C.",
      },
    ],
    process: [
      {
        title: "Books & data handover",
        description:
          "Share your sales, purchase, and expense records for the period — physically, by email, or through your accounting software.",
      },
      {
        title: "Reconciliation",
        description:
          "We reconcile GST data with your books (including GSTR-2B matching) before any return is filed.",
      },
      {
        title: "Review & sign-off",
        description: "You review a summary of tax payable and liabilities before we proceed.",
      },
      {
        title: "Filing & compliance calendar",
        description:
          "Returns are filed on the GST/income tax portals and you get a reminder calendar for upcoming due dates.",
      },
    ],
    faqs: [
      {
        question: "I'm a small trader — do I still need to file GST returns monthly?",
        answer:
          "It depends on your turnover and the scheme you're registered under (regular vs. QRMP/composition). We'll assess your registration and set up the right filing frequency.",
      },
      {
        question: "What happens if I've missed a few GST returns?",
        answer:
          "We can help you file pending returns and compute the applicable late fees and interest so you become compliant again.",
      },
      {
        question: "Do you handle both GST and income tax for my business?",
        answer:
          "Yes, we manage both together so your GST turnover and income tax filings stay consistent, which reduces the chance of a notice.",
      },
    ],
  },
  {
    slug: "bookkeeping-payroll",
    icon: Calculator,
    title: "Bookkeeping & Payroll",
    shortDescription:
      "Monthly bookkeeping, financial statements, and payroll processing so your books are always audit-ready.",
    heroDescription:
      "We keep your books accurate and up to date throughout the year — not just at tax time — and take payroll, PF, and ESI compliance off your plate.",
    whoItsFor: [
      "Growing businesses that need organised, up-to-date books",
      "Businesses that want financial statements for loans or investors",
      "Employers who need payroll processed accurately and on time",
      "Companies registered under PF/ESI that need ongoing compliance",
    ],
    features: [
      {
        title: "Monthly bookkeeping",
        description:
          "Sales, purchases, expenses, and bank transactions recorded and reconciled every month.",
      },
      {
        title: "Financial statements",
        description:
          "Profit & loss statement, balance sheet, and cash flow summaries prepared for internal review, loans, or investors.",
      },
      {
        title: "Bank reconciliation",
        description: "Your bank and book balances are reconciled to catch errors and missing entries early.",
      },
      {
        title: "Payroll processing",
        description:
          "Salary computation, payslips, and statutory deductions processed accurately every pay cycle.",
      },
      {
        title: "PF, ESI & Form 16/24Q",
        description:
          "Provident Fund and ESI filings, along with employee Form 16 and TDS return 24Q, handled end to end.",
      },
    ],
    process: [
      {
        title: "Set up your books",
        description:
          "We understand your business and set up a chart of accounts and bookkeeping system suited to you.",
      },
      {
        title: "Monthly data collection",
        description: "You share invoices, receipts, and bank statements each month, or connect your accounting software.",
      },
      {
        title: "Recording & reconciliation",
        description: "Our team records transactions and reconciles accounts before closing the month.",
      },
      {
        title: "Reports delivered",
        description:
          "You receive monthly financial statements and payroll reports, along with a running compliance calendar.",
      },
    ],
    faqs: [
      {
        question: "Can you work with our existing accounting software?",
        answer:
          "Yes, we can work within Tally, Zoho Books, or similar software, or set up a new system if you don't have one yet.",
      },
      {
        question: "How many employees can you process payroll for?",
        answer:
          "We handle payroll for small teams as well as larger staff counts. Let us know your headcount and we'll scope it accordingly.",
      },
      {
        question: "Will my books be ready if I need a business loan?",
        answer:
          "Yes — keeping books current throughout the year means your financial statements are ready whenever a bank or investor asks for them.",
      },
    ],
  },
  {
    slug: "tax-notice-compliance-consulting",
    icon: ShieldCheck,
    title: "Tax Notice & Compliance Consulting",
    shortDescription:
      "Income tax and GST notice handling, rectifications, and ongoing compliance advisory.",
    heroDescription:
      "Received a notice from the Income Tax Department or GST authorities? We review it, prepare the response, and represent your case — and keep your business on top of its ongoing tax obligations.",
    whoItsFor: [
      "Individuals or businesses who've received an income tax or GST notice",
      "Anyone needing to file a rectification or respond to a scrutiny assessment",
      "Businesses that need LLP, proprietorship, GST, or Udyam/MSME registration",
      "Businesses looking for ongoing tax planning and compliance advisory",
    ],
    features: [
      {
        title: "Income tax notice response",
        description:
          "We review notices under Sections 139(9), 143(1), 143(2), and 148, and prepare a timely, accurate response.",
      },
      {
        title: "GST notice & scrutiny handling",
        description:
          "Responses to GST department notices, show-cause notices, and mismatches flagged during scrutiny.",
      },
      {
        title: "Rectifications & appeals",
        description:
          "Filing rectification requests for processing errors and assisting with appeals where required.",
      },
      {
        title: "Other business registrations",
        description:
          "LLP and proprietorship registration, along with GST registration and Udyam/MSME registration. Looking to set up a Private Limited Company instead? See our dedicated registration service.",
      },
      {
        title: "Tax planning & advisory",
        description:
          "Ongoing guidance on entity structuring, tax-saving strategies, and staying ahead of your compliance calendar.",
      },
    ],
    process: [
      {
        title: "Share the notice",
        description:
          "Send us a copy of the notice you've received along with your PAN/GSTIN and relevant filings.",
      },
      {
        title: "We assess the issue",
        description: "Our team reviews the notice, identifies the root cause, and explains your options in plain language.",
      },
      {
        title: "Response prepared",
        description: "We draft the response or rectification request and confirm it with you before submission.",
      },
      {
        title: "Filed & followed up",
        description:
          "The response is submitted through the relevant portal and we track it until it's resolved.",
      },
    ],
    faqs: [
      {
        question: "I got an income tax notice — should I be worried?",
        answer:
          "Not necessarily. Many notices are routine (like a request for clarification or a minor mismatch). Send it to us and we'll tell you exactly what it means and what to do.",
      },
      {
        question: "How quickly do I need to respond to a notice?",
        answer:
          "Most notices specify a response window, often 15-30 days. It's best to reach out as soon as you receive one so we have enough time to prepare a proper response.",
      },
      {
        question: "Can you help register an LLP or proprietorship?",
        answer:
          "Yes, we handle end-to-end registration for LLPs and proprietorships, along with the GST and Udyam registrations that typically follow. For Private Limited Company incorporation, see our dedicated registration service.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
