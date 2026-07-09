import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} for a free consultation on income tax, GST, bookkeeping, or compliance.`,
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} - ${siteConfig.address.pin}`,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your tax and compliance needs"
        description="Book a free consultation and we'll help you figure out exactly what you need — whether it's a single return or ongoing support for your business."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionHeading title="Contact details" />
            <ul className="mt-8 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-slate-500">
                        {item.label}
                      </span>
                      <span className="block font-semibold text-brand-900">
                        {item.value}
                      </span>
                    </span>
                  </span>
                );
                return (
                  <li key={item.label}>
                    {item.href ? <a href={item.href}>{content}</a> : content}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-900">
                <Clock size={16} />
                Office hours
              </h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.hours.map((slot) => (
                  <li
                    key={slot.day}
                    className="flex justify-between text-sm text-slate-600"
                  >
                    <span>{slot.day}</span>
                    <span className="font-medium text-brand-900">
                      {slot.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <SectionHeading title="Send us a message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
