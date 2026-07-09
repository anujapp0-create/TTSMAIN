import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, BadgeCheck } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our approach to income tax, GST, and compliance for individuals and businesses across India.`,
};

const values = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "To make tax and compliance simple, transparent, and stress-free for every individual and business we work with — no jargon, no last-minute surprises.",
  },
  {
    icon: Eye,
    title: "Our approach",
    description:
      "We treat compliance as an ongoing relationship, not a once-a-year scramble. That means proactive reminders, clear communication, and returns that are reviewed carefully before they're filed.",
  },
  {
    icon: HeartHandshake,
    title: "Who we work with",
    description:
      "Salaried individuals, freelancers, and businesses of every size — from a single-owner shop to growing private limited companies — all across India.",
  },
  {
    icon: BadgeCheck,
    title: "How we measure success",
    description:
      "On-time filings, accurate computations, and clients who never have to think twice about whether their compliance is in order.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${siteConfig.name}`}
        title="Tax and compliance support that feels like having an expert on your team"
        description={
          <>
            {siteConfig.name}{" "}
            was built around a simple idea: tax compliance shouldn&apos;t be
            confusing, and it shouldn&apos;t be something you only think
            about once a year. We work with individuals and businesses
            across India on income tax, GST, bookkeeping, and everything in
            between — handling the details so you don&apos;t
            have to.
          </>
        }
      />

      <section className="border-y border-slate-100 bg-white py-10">
        <Container>
          <StatsBar />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What drives us"
            title="Built on accuracy, transparency, and staying ahead of deadlines"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 70}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-brand-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-gold-50/60 py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A process built around clarity, not paperwork for its own sake"
            />
            <p className="mt-6 text-slate-600">
              Every engagement starts with understanding your actual
              situation — your income sources, your business structure, your
              compliance history — before we recommend anything. From there,
              we handle the filing, but we also make sure you understand what
              was filed and why, so nothing feels like a black box.
            </p>
          </Reveal>
          <ol className="space-y-6">
            {[
              {
                step: "01",
                title: "We understand your situation",
                description:
                  "A quick conversation to understand your income, business, and current compliance status.",
              },
              {
                step: "02",
                title: "We recommend the right services",
                description:
                  "No upselling — just the services that actually apply to you, explained clearly.",
              },
              {
                step: "03",
                title: "We handle the filing",
                description:
                  "Returns, registrations, or responses are prepared, reviewed with you, and filed on time.",
              },
              {
                step: "04",
                title: "We stay on top of what's next",
                description:
                  "Ongoing reminders for upcoming due dates, so compliance stays continuous, not reactive.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTASection
        title="Let's talk about your tax and compliance needs"
        description="Whether it's a single ITR or ongoing GST and bookkeeping support, we're happy to start with a conversation."
      />
    </>
  );
}
