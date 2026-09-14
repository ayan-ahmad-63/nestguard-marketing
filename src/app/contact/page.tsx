"use client";
import { useState } from "react";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import { Icon, icons } from "@/components/marketing/shared";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Contact form submission:", Object.fromEntries(formData));
    setSubmitted(true);
  };

  return (
    <MarketingShell>
      <PageHero
        title="Get in touch"
        subtitle="Interested in NestGuard for your institution? Reach out and we'll walk you through the system."
      />

      <section className="mx-auto max-w-3xl px-5 sm:px-8 pb-32">
        {submitted ? (
          <div className="rounded-[2.5rem] border border-ng-border bg-ng-panel p-14 text-center shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8 shadow-inner">
              <span className="text-green-500"><Icon path={icons.check} size={32} /></span>
            </div>
            <h3 className="font-display font-medium text-3xl mb-4">Message sent</h3>
            <p className="text-ng-secondary text-lg">Thank you for your interest. We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-[2.5rem] border border-ng-border bg-ng-panel p-10 md:p-14 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ng-orange/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-8">
                <div>
                  <label className="block font-display text-sm font-medium mb-3">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-ng-border bg-ng-elevated px-5 py-4 text-base text-ng-text placeholder:text-ng-muted focus:outline-none focus:border-ng-orange transition-colors shadow-inner"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-display text-sm font-medium mb-3">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-ng-border bg-ng-elevated px-5 py-4 text-base text-ng-text placeholder:text-ng-muted focus:outline-none focus:border-ng-orange transition-colors shadow-inner"
                    placeholder="you@institution.edu"
                  />
                </div>
                <div>
                  <label className="block font-display text-sm font-medium mb-3">Institution</label>
                  <input
                    name="institution"
                    className="w-full rounded-2xl border border-ng-border bg-ng-elevated px-5 py-4 text-base text-ng-text placeholder:text-ng-muted focus:outline-none focus:border-ng-orange transition-colors shadow-inner"
                    placeholder="University or organization"
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="block font-display text-sm font-medium mb-3">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full h-full min-h-[200px] rounded-2xl border border-ng-border bg-ng-elevated px-5 py-4 text-base text-ng-text placeholder:text-ng-muted focus:outline-none focus:border-ng-orange transition-colors resize-none shadow-inner"
                  placeholder="Tell us about your use case..."
                />
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center mt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 rounded-full bg-ng-orange text-white font-display font-semibold text-base transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer shadow-[0_0_20px_rgba(255,107,0,0.3)]"
              >
                Send Message
              </button>
              <p className="text-center text-ng-secondary text-sm mt-6">
                Or email us directly at{" "}
                <a href="mailto:nestguard@uol.edu.pk" className="text-ng-orange hover:underline font-medium">nestguard@uol.edu.pk</a>
              </p>
            </div>
          </form>
        )}
      </section>
    </MarketingShell>
  );
}
