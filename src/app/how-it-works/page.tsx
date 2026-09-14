"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import CTABand from "@/components/marketing/CTABand";
import { Icon, icons } from "@/components/marketing/shared";

const steps = [
  {
    step: "01",
    icon: icons.finger,
    title: "Scan",
    desc: "A student places their finger on the AS608 optical biometric reader mounted at the gate terminal. The sensor captures the fingerprint and performs a 1:N match against the enrolled template database on-device.",
  },
  {
    step: "02",
    icon: icons.scan,
    title: "Verify",
    desc: "The gateway microcontroller receives the match result from the sensor. If the fingerprint matches an enrolled student, the system checks for duplicate or replay events (e.g., the same student scanning twice within seconds). If no anomalies are found, the gate relay is triggered.",
  },
  {
    step: "03",
    icon: icons.gate,
    title: "Unlock",
    desc: "The relay energizes the solenoid lock, retracting the bolt for a configurable duration (default: 5 seconds). The student passes through, and the lock re-engages automatically. A green LED confirms access; a red LED signals denial.",
  },
  {
    step: "04",
    icon: icons.lock,
    title: "Log",
    desc: "The hardware gateway service translates the raw sensor event into a structured access log entry and sends it to the central NestGuard server via HTTP. The event appears on the live dashboard feed within 400ms of the scan. Logs are write-once — they cannot be edited or deleted after creation.",
  },
  {
    step: "05",
    icon: icons.brain,
    title: "Analyze",
    desc: "The AI anomaly engine evaluates the new event against the student's behavioral baseline. Factors include time of day relative to normal patterns, gate familiarity, and recent access frequency. If the event deviates significantly, a confidence-scored anomaly flag is attached to the log entry.",
  },
  {
    step: "06",
    icon: icons.alert,
    title: "Alert",
    desc: "If the event is flagged as anomalous or the scan was unauthorized (no fingerprint match), the system generates a real-time alert. Wardens and security staff see the alert on their dashboard immediately. Critical alerts can also trigger notifications via email and Telegram integration.",
  },
];

export default function HowItWorksPage() {
  return (
    <MarketingShell>
      <PageHero
        title="From scan to secured."
        subtitle="The full NestGuard pipeline — six steps, under one second, fully automated."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="relative mx-auto max-w-4xl">
          {/* Centered vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ng-border via-ng-orange/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-24">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-ng-bg border border-ng-border flex items-center justify-center shrink-0 mb-8 shadow-[0_0_20px_rgba(255,107,0,0.15)] shadow-ng-orange/10">
                  <div className="absolute inset-2 rounded-full border border-ng-orange/30 flex items-center justify-center">
                    <span className="font-mono text-lg font-bold text-ng-orange">{s.step}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center max-w-2xl bg-ng-panel/50 backdrop-blur-sm border border-ng-border rounded-3xl p-8 shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-6 shadow-sm" style={{ color: "#FF6B00" }}>
                    <Icon path={s.icon} size={28} />
                  </div>
                  <h3 className="font-display font-medium text-3xl mb-4">{s.title}</h3>
                  <p className="text-ng-secondary text-lg leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
