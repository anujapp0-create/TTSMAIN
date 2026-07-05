export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "itr-filing-deadlines-fy-2025-26",
    title: "ITR Filing Deadlines for FY 2025-26 (AY 2026-27): Key Dates You Shouldn't Miss",
    excerpt:
      "A clear rundown of the income tax return deadlines for FY 2025-26, who each deadline applies to, and what happens if you file late.",
    category: "Income Tax",
    date: "2026-06-10",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Every year, a large number of taxpayers end up paying late fees or losing the ability to carry forward losses simply because a filing deadline slipped past them. Here's a straightforward look at the key Income Tax Return (ITR) deadlines for Financial Year 2025-26 (Assessment Year 2026-27), and what each one means for you.",
      },
      { type: "h2", text: "Who needs to file by when" },
      {
        type: "ul",
        items: [
          "Individuals and entities not requiring an audit (most salaried employees, freelancers, and small proprietorships): the standard due date, usually July 31 following the end of the financial year.",
          "Businesses and professionals requiring a tax audit under Section 44AB: a later due date, typically October 31, since the audit report has to be filed first.",
          "Businesses involved in international or specified domestic transactions requiring a transfer pricing report: the latest due date, typically November 30.",
          "Belated or revised returns: can generally be filed up to December 31 of the assessment year, subject to applicable late fees.",
        ],
      },
      {
        type: "p",
        text: "The government does occasionally extend deadlines, especially when there are changes to the ITR forms or the e-filing utility. We track these extensions and update our clients directly, but it's safer to plan around the original due date rather than count on an extension.",
      },
      { type: "h2", text: "What happens if you file after the deadline" },
      {
        type: "ul",
        items: [
          "A late filing fee under Section 234F — up to ₹5,000, or ₹1,000 if your total income is below ₹5 lakh.",
          "Interest under Section 234A on any unpaid tax, calculated from the original due date.",
          "You lose the ability to carry forward certain losses (like capital losses or business losses) to future years.",
          "Refunds, if any, get delayed simply because processing starts later.",
        ],
      },
      { type: "h2", text: "How to make sure you don't miss it" },
      {
        type: "ol",
        items: [
          "Collect your Form 16, Form 26AS, and AIS (Annual Information Statement) as soon as they're available, usually by mid-June.",
          "Reconcile any capital gains from stocks, mutual funds, or property well before the deadline — these often take the longest to compute correctly.",
          "Decide between the old and new tax regime based on an actual computation, not a guess.",
          "File a few weeks before the deadline rather than on the last day, so there's time to fix any errors flagged by the portal.",
        ],
      },
      {
        type: "p",
        text: "If you'd rather not track all of this yourself, we handle the entire process — from collecting documents to filing and confirming your acknowledgment. Get in touch with us before the season gets busy.",
      },
    ],
  },
  {
    slug: "gst-return-filing-guide",
    title: "GST Return Filing Guide: GSTR-1, GSTR-3B and GSTR-9 Explained for Small Businesses",
    excerpt:
      "Confused about which GST return applies to your business and when? Here's a plain-language breakdown of GSTR-1, GSTR-3B, and the annual GSTR-9.",
    category: "GST",
    date: "2026-05-18",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "GST compliance trips up a lot of small business owners not because the returns are complicated, but because it's not always clear which return applies when. Here's a breakdown of the three returns most businesses deal with regularly.",
      },
      { type: "h2", text: "GSTR-1: reporting your outward supplies" },
      {
        type: "p",
        text: "GSTR-1 is where you report details of your sales (outward supplies) for the period — invoice-wise for B2B transactions and summarised for B2C. This is the return your customers rely on to claim their own input tax credit, so accuracy and timing matter a lot here.",
      },
      {
        type: "ul",
        items: [
          "Filed monthly by regular taxpayers, or quarterly under the QRMP scheme for eligible small businesses.",
          "Due typically by the 11th of the following month for monthly filers.",
          "Errors here directly affect your buyers' ability to claim credit, so it's worth getting right the first time rather than amending later.",
        ],
      },
      { type: "h2", text: "GSTR-3B: your summary return and tax payment" },
      {
        type: "p",
        text: "GSTR-3B is a self-declared summary return where you report total sales, input tax credit claimed, and tax paid for the period. This is also the return through which you actually pay your GST liability.",
      },
      {
        type: "ul",
        items: [
          "Filed monthly, or quarterly with monthly tax payments under QRMP.",
          "Input tax credit here should be reconciled against GSTR-2B (auto-generated from your suppliers' filings) before you file — mismatches are one of the most common triggers for a GST notice.",
          "Even if you have zero transactions in a period, a nil return still needs to be filed.",
        ],
      },
      { type: "h2", text: "GSTR-9: the annual return" },
      {
        type: "p",
        text: "GSTR-9 consolidates everything you've reported across the year's GSTR-1 and GSTR-3B filings into a single annual return. Businesses above the prescribed turnover threshold are required to file it, and it's also where discrepancies between your monthly returns tend to surface.",
      },
      {
        type: "ul",
        items: [
          "Due by December 31 following the end of the financial year.",
          "Requires reconciling your books, GSTR-1, and GSTR-3B data for the full year — this is much easier if your monthly filings were accurate and consistent.",
          "Businesses above a higher turnover threshold may also need a reconciliation statement in GSTR-9C.",
        ],
      },
      { type: "h2", text: "Keeping it simple" },
      {
        type: "p",
        text: "The businesses that struggle least with GST are the ones that reconcile every month instead of scrambling at year-end. If you'd like this handled for you — including the GSTR-2B matching that catches most errors before they become notices — that's exactly what our GST filing service does.",
      },
    ],
  },
  {
    slug: "old-vs-new-tax-regime",
    title: "Old vs New Tax Regime: Which One Should You Choose in FY 2025-26?",
    excerpt:
      "The new tax regime isn't automatically better for everyone. Here's how to actually compare the two before you decide.",
    category: "Income Tax",
    date: "2026-04-22",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Since the new tax regime became the default option, we've had a lot of clients ask whether they should switch, or stick with the old one. The honest answer is: it depends entirely on your deductions and income structure, not on which one is 'newer'.",
      },
      { type: "h2", text: "The core trade-off" },
      {
        type: "p",
        text: "The new regime offers lower slab rates but removes most deductions and exemptions — no Section 80C, no HRA exemption, no home loan interest deduction on a self-occupied property, among others. The old regime has higher slab rates but lets you claim these deductions if you actually have them.",
      },
      { type: "h2", text: "The new regime tends to work better if you" },
      {
        type: "ul",
        items: [
          "Don't have significant investments in 80C instruments (PPF, ELSS, life insurance premiums, etc.)",
          "Don't pay rent or don't claim HRA",
          "Don't have a home loan, or your property is let out with limited interest deduction benefit",
          "Have a relatively straightforward salary structure with few allowances",
        ],
      },
      { type: "h2", text: "The old regime tends to work better if you" },
      {
        type: "ul",
        items: [
          "Claim HRA and pay substantial rent",
          "Have a home loan with meaningful interest outgo",
          "Maximise 80C (₹1.5 lakh) and have health insurance premiums under 80D",
          "Have other deductions like NPS contributions under 80CCD(1B) or education loan interest under 80E",
        ],
      },
      { type: "h2", text: "Don't guess — compute both" },
      {
        type: "p",
        text: "The two regimes can produce meaningfully different tax outcomes depending on your specific numbers, and the break-even point shifts depending on your income level. Salaried employees can also switch between regimes each year when filing their return (subject to the current rules), while those with business income have more restrictions on switching back and forth.",
      },
      {
        type: "p",
        text: "When we prepare your return, we calculate your liability under both regimes side by side and recommend whichever saves you more — no assumptions involved. If you want that comparison done for your specific situation, reach out and we'll walk you through the numbers.",
      },
    ],
  },
  {
    slug: "income-tax-notice-guide",
    title: "How to Respond to an Income Tax Notice Under Section 143(1) or 148",
    excerpt:
      "Getting a notice from the Income Tax Department isn't always a red flag. Here's what the common notices actually mean and how to respond.",
    category: "Compliance",
    date: "2026-03-14",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "An SMS or email from the Income Tax Department can be alarming, but most notices are routine and resolvable if you understand what's being asked. Here's a look at two of the most common ones.",
      },
      { type: "h2", text: "Section 143(1): intimation after processing" },
      {
        type: "p",
        text: "This isn't technically a 'notice' in the adversarial sense — it's an intimation sent after your return has been processed, comparing what you filed against the department's own computation.",
      },
      {
        type: "ul",
        items: [
          "If the figures match, it simply confirms your return has been processed — no action needed.",
          "If there's a mismatch (a common cause is a deduction claimed but not matching Form 26AS/AIS data), it will show an adjusted tax demand or a reduced refund.",
          "You typically have a window to respond or file a rectification if you believe the adjustment is incorrect.",
          "If the adjustment is valid, you can pay the additional demand; if not, a rectification request under Section 154 can be filed with supporting documents.",
        ],
      },
      { type: "h2", text: "Section 148: notice for income escaping assessment" },
      {
        type: "p",
        text: "This is more serious than a 143(1) intimation. It means the department believes some income wasn't reported in your original return and wants to reassess it.",
      },
      {
        type: "ul",
        items: [
          "It's usually triggered by data mismatches — high-value transactions, TDS credits not reflected in your return, or information from third parties (banks, registrars, etc.).",
          "You'll typically be asked to file a return in response to the notice, or explain why the income in question shouldn't be added.",
          "There are defined time limits for how far back this notice can be issued, and defined windows for your response — missing them narrows your options considerably.",
          "This is not something to respond to without reviewing the underlying reason for the notice carefully.",
        ],
      },
      { type: "h2", text: "What to do the moment you receive either notice" },
      {
        type: "ol",
        items: [
          "Don't ignore it, and don't panic-respond either. Read the notice fully, including the specific section and assessment year it refers to.",
          "Check the notice against your filed return, Form 26AS, and AIS for the same period.",
          "Note the response deadline mentioned in the notice — these are usually strict.",
          "Get a professional opinion before submitting anything, especially for a Section 148 notice.",
        ],
      },
      {
        type: "p",
        text: "If you've received a notice and aren't sure what it means, send it to us. We'll review it, tell you plainly what's being asked, and prepare the response on your behalf.",
      },
    ],
  },
  {
    slug: "gst-compliance-mistakes",
    title: "5 Common GST Compliance Mistakes Small Businesses Make (and How to Avoid Them)",
    excerpt:
      "Most GST notices trace back to a handful of avoidable mistakes. Here's what they are and how to stay ahead of them.",
    category: "GST",
    date: "2026-02-05",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Most GST issues we help clients resolve trace back to the same handful of mistakes, repeated month after month until they surface as a notice. Here are the five we see most often.",
      },
      { type: "h2", text: "1. Claiming input tax credit without matching GSTR-2B" },
      {
        type: "p",
        text: "Input tax credit should only be claimed to the extent it reflects in your GSTR-2B. Claiming based on your purchase invoices alone, without checking whether your supplier has actually reported and filed their return, is one of the most common causes of credit reversal notices.",
      },
      { type: "h2", text: "2. Missing the QRMP payment despite quarterly filing" },
      {
        type: "p",
        text: "Businesses under the QRMP scheme file GSTR-1 and GSTR-3B quarterly, but tax still needs to be paid monthly through a challan. Assuming quarterly filing means quarterly payment leads to interest on the shortfall.",
      },
      { type: "h2", text: "3. Not reconciling e-invoicing and e-way bill data with returns" },
      {
        type: "p",
        text: "For businesses required to generate e-invoices or e-way bills, discrepancies between this data and what's reported in GSTR-1 are increasingly flagged automatically by the department's systems. Periodic reconciliation catches this before it becomes a scrutiny notice.",
      },
      { type: "h2", text: "4. Delaying registration amendments" },
      {
        type: "p",
        text: "A change in business address, bank details, or the addition of a new place of business needs to be updated on the GST portal within the prescribed time. Continuing to operate or invoice from an unregistered location can complicate input credit claims for your customers, not just for you.",
      },
      { type: "h2", text: "5. Treating GSTR-9 as a copy-paste exercise" },
      {
        type: "p",
        text: "The annual return isn't just a summary of the year's monthly returns — it's an opportunity to catch and correct discrepancies before the department does. Businesses that treat it as a formality often miss the chance to self-correct minor errors, which then get flagged during scrutiny instead.",
      },
      { type: "h2", text: "The fix: reconcile monthly, not annually" },
      {
        type: "p",
        text: "Every one of these mistakes is avoidable with a monthly reconciliation habit — matching your books, GSTR-2B, and e-invoicing data before you file, rather than after a notice arrives. This is exactly what our GST compliance service handles for clients each month, so nothing gets discovered late.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
