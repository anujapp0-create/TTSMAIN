import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-gold-100 bg-gold-50/60 text-slate-600">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-slate-500">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-gold-200 hover:bg-gold-500 hover:text-white"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-gold-200 hover:bg-gold-500 hover:text-white"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-900">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="hover:text-gold-700"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-900">
            Company
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about/" className="hover:text-gold-700">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services/" className="hover:text-gold-700">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-gold-700">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-gold-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-900">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold-600" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-gold-700">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold-600" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-700">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-600" />
              <span>
                {siteConfig.address.line2}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} - {siteConfig.address.pin}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold-100">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Made for individuals and businesses across India.</p>
        </Container>
      </div>
    </footer>
  );
}
