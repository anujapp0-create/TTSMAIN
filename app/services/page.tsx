import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Services",
  description: `Private Limited Company registration, income tax filing, GST returns, bookkeeping, payroll, and tax notice consulting from ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything you need to start and run a compliant business"
        description="From Private Limited Company registration — our most popular service — to income tax, GST, bookkeeping, and tax notice resolution, we cover individuals and businesses across India."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              title="Four core services, tailored to your situation"
              description="Each service can stand alone or work together as part of ongoing compliance support."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
