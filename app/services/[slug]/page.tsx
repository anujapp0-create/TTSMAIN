import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero icon={service.icon} title={service.title} description={service.heroDescription}>
        <div className="mt-8">
          <Button href="/contact/" variant="primary">
            Book Free Consultation
          </Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <SectionHeading title="Who this is for" />
            <ul className="mt-6 space-y-4">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-gold-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal>
              <SectionHeading title="What's included" />
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {service.features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 60}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h3 className="font-semibold text-brand-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gold-50/60 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Our process for this service"
              align="center"
            />
          </Reveal>
          <ol className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold text-brand-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading title="Frequently asked questions" align="center" />
          </Reveal>
          <div className="mt-10">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to get started with ${service.title.toLowerCase()}?`}
      />
    </>
  );
}
