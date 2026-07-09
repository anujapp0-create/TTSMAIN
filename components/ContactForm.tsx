"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  "Individual Tax Filing",
  "Business Tax Filing",
  "Bookkeeping & Payroll",
  "Tax Notice & Compliance Consulting",
  "Something else",
];

function encodeForm(data: FormData) {
  return new URLSearchParams(data as unknown as Record<string, string>).toString();
}

// Submits to Netlify Forms (https://docs.netlify.com/manage/forms/setup/).
// Netlify detects this form at deploy time by scanning the static HTML for
// the data-netlify attribute and the hidden form-name field below, so both
// need to stay present in the markup exactly as rendered here.
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(data),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:grid-cols-2"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-900">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-900">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-900">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-brand-900">
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          defaultValue={services[0]}
        >
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-900">
          Tell us a bit more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:bg-gold-400 disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="mt-3 text-sm text-brand-700">
            Thanks — your message has been sent. We&apos;ll get back to you
            shortly.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Something went wrong sending your message. Please try again, or
            email us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
