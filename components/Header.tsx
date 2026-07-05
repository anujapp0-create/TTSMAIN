"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import { Button } from "@/components/Button";
import { navLinks, siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-brand-900"
                      : "text-slate-600 hover:text-brand-900"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={15} />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-72 pt-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}/`}
                          className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-900"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand-900"
                    : "text-slate-600 hover:text-brand-900"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-brand-900"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <Button href="/contact/" variant="primary">
            Book Free Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-900 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 text-sm font-semibold text-brand-900"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
              <Button href="/contact/" variant="primary" onClick={() => setMobileOpen(false)}>
                Book Free Consultation
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
