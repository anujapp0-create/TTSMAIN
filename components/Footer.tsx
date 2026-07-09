import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-950 text-brand-200">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 max-w-xs text-sm text-brand-300">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 text-brand-200 hover:bg-gold-500 hover:text-brand-950"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 text-brand-200 hover:bg-gold-500 hover:text-brand-950"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about/" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services/" className="hover:text-white">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                {siteConfig.address.line2}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} - {siteConfig.address.pin}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-brand-900">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-400 sm:flex-row">
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
