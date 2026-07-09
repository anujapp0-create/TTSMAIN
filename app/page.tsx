import { CheckCircle2, ShieldCheck, Clock, Users, ArrowRight, Star } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import StatsBar from "@/components/StatsBar";
import Reveal from "@/components/Reveal";
import { services, getServiceBySlug } from "@/lib/services";
import { getSortedPosts } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/siteConfig";

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Accurate & compliant",
    description:
      "Every filing is reviewed against the latest MCA, Income Tax, and GST rules before it's submitted — no shortcuts.",
  },
  {
    icon: Clock,
    title: "Never miss a deadline",
    description:
      "We track your due dates for you and reach out well before they're close, not after.",
  },
  {
    icon: Users,
    title: "Personal, not automated",
    description:
      "You work directly with people who know your file, not a rotating support queue.",
  },
  {
    icon: CheckCircle2,
    title: "Clear pricing",
    description:
      "You'll know what a service costs before we start — no surprise fees at filing time.",
  },
];

export default function Home() {
  const latestPosts = getSortedPosts().slice(0, 3);
  const flagship = getServiceBySlug("private-limited-company-registration")!;

  return (
    <>
      <section className="relative overflow-hidden bg-brand-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative flex flex-col gap-16 py-24 sm:py-32 lg:flex-row lg:items-center">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white">
              <Star size={13} fill="currentColor" />
              Our most requested service
            </span>
            <h1 className="mt-7 text-[2.75rem] font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4rem]">
              Register your{" "}
              <span className="font-serif italic text-gold-400">
                Private Limited Company
              </span>{" "}
              — done right, start to finish.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-brand-200">
              From DSC and name approval to SPICe+ filing with the MCA and
              your company PAN and TAN, {siteConfig.name}{" "}
              handles your entire incorporation — then keeps you compliant
              on income tax, GST, and bookkeeping once you&apos;re up and
              running.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/services/private-limited-company-registration/" variant="primary">
                Register My Company
              </Button>
              <Button
                href="/services/"
                variant="outline"
                className="border-brand-700 text-white hover:bg-brand-900"
              >
                Explore All Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="w-full max-w-md lg:ml-auto">
            <div className="rounded-3xl border border-gold-400/40 bg-brand-900/60 p-8 backdrop-blur">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold-400">
                <Star size={12} fill="currentColor" />
                Flagship service
              </span>
              <h2 className="mt-4 text-xl font-semibold text-white">
                Private Limited Company Registration
              </h2>
              <ul className="mt-5 space-y-4">
                {[
                  "DSC & DIN for all directors",
                  "Company name approval with the MCA",
                  "SPICe+ incorporation filing",
                  "Company PAN & TAN included",
                  "GST & Udyam registration add-on",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-100">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-gold-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/services/private-limited-company-registration/"
                variant="primary"
                className="mt-6 w-full"
              >
                See how it works
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-900 py-12">
        <Container>
          <Reveal>
            <StatsBar />
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Tax and compliance services built for how Indian businesses actually work"
              description="Company registration is where we do our best work — and we cover everything you need afterward, too."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-950 py-20 sm:py-24">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white">
              <Star size={13} fill="currentColor" />
              {flagship.title}
            </span>
            <h2 className="max-w-2xl text-3xl font-medium leading-[1.15] text-white sm:text-4xl">
              Thinking of starting a company? Let&apos;s get it registered
              properly.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-brand-200">
              {flagship.shortDescription}
            </p>
            <Button
              href={`/services/${flagship.slug}/`}
              variant="primary"
              className="inline-flex items-center gap-2"
            >
              Start My Registration
              <ArrowRight size={16} />
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="bg-slate-50 py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
              Why TaxTrack Solutions
            </p>
            <p className="mt-4 font-serif text-2xl italic leading-snug text-brand-900 sm:text-3xl">
              Compliance handled with care, not just paperwork.
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 70}>
                    <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:gap-6">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-gold-400">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <div>
                        <h3 className="font-semibold text-brand-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="From the blog"
              title="Straightforward tax guidance, in plain language"
            />
            <Button href="/blog/" variant="outline" className="w-fit">
              View all posts
            </Button>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
