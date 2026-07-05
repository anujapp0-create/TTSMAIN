// Central place for business details used across the site.
// TODO: Replace the placeholder values below with TaxTrack Solutions' real
// contact details, registration numbers, and social links before launch.
export const siteConfig = {
  name: "TaxTrack Solutions",
  shortName: "TaxTrack",
  tagline: "Private Limited Company Registration & Tax Compliance",
  description:
    "TaxTrack Solutions helps Indian founders register their Private Limited Company end-to-end, and supports individuals and businesses with income tax filing, GST compliance, bookkeeping, and payroll.",
  url: "https://taxtracksolutions.com",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  email: "info@taxtracksolutions.com",
  address: {
    line1: "TaxTrack Solutions",
    line2: "Add your office address here",
    city: "City",
    state: "State",
    pin: "PIN Code",
    country: "India",
  },
  hours: [
    { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com/taxtracksolutions",
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
