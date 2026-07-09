// Central place for business details used across the site.
export const siteConfig = {
  name: "TaxTrack Solutions",
  shortName: "TaxTrack",
  tagline: "Private Limited Company Registration & Tax Compliance",
  description:
    "TaxTrack Solutions helps Indian founders register their Private Limited Company end-to-end, and supports individuals and businesses with income tax filing, GST compliance, bookkeeping, and payroll.",
  url: "https://taxtracksolutions.com",
  phone: "7303463702",
  phoneHref: "+917303463702",
  whatsapp: "917303463702",
  email: "office@taxtracksolutions.com",
  address: {
    line1: "TaxTrack Solutions",
    line2: "Ground Floor 1345/342 Part-1 Nangla Enclave",
    city: "Faridabad",
    state: "Haryana",
    pin: "121005",
    country: "India",
  },
  hours: [
    { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com/taxtracksolutions",
    linkedin: "https://linkedin.com/company/taxtracksolutions",
    twitter: "https://x.com/taxtracksolns",
  },
  stats: [
    { label: "Years of experience", value: "10+" },
    { label: "Returns filed every year", value: "1,000+" },
    { label: "Businesses supported", value: "250+" },
    { label: "On-time filing rate", value: "99%" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
] as const;
