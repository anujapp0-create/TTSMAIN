import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Services",
  description: `Private Limited Company registration, income tax filing, GST returns, bookkeeping, payroll, and tax notice consulting from ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-950 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400">
              Our services
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Everything you need to start and run a compliant business
            </h1>
            <p className="mt-6 text-lg text-brand-200">
              From Private Limited Company registration — our most popular
              service — to income tax, GST, bookkeeping, and tax notice
              resolution, we cover individuals and businesses across India.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Four core services, tailored to your situation"
            description="Each service can stand alone or work together as part of ongoing compliance support."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
