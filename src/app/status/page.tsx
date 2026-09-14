"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import { Icon, icons } from "@/components/marketing/shared";

const services = [
  { name: "Main Application", status: "In Development", color: "var(--color-ng-amber)" },
  { name: "AI Anomaly Engine", status: "In Development", color: "var(--color-ng-amber)" },
  { name: "Hardware Gateway", status: "In Development", color: "var(--color-ng-amber)" },
  { name: "Access Log Database", status: "In Development", color: "var(--color-ng-amber)" },
  { name: "Notification Service", status: "In Development", color: "var(--color-ng-amber)" },
];

export default function StatusPage() {
  return (
    <MarketingShell>
      <PageHero
        title="System Status"
        subtitle="Current operational status of all NestGuard services."
      />

      <section className="mx-auto max-w-3xl px-5 sm:px-8 pb-32">
        <div className="rounded-[2.5rem] border border-ng-border bg-ng-panel p-8 mb-10 flex flex-col sm:flex-row items-center gap-6 shadow-xl relative overflow-hidden text-center sm:text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none" />
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
          </div>
          <div className="relative z-10">
            <h3 className="font-display font-medium text-2xl mb-1">Systems Under Development</h3>
            <p className="font-mono text-xs text-ng-secondary uppercase tracking-widest">Last updated: just now</p>
          </div>
        </div>

        {/* Service rows */}
        <div className="rounded-[2.5rem] border border-ng-border overflow-hidden bg-ng-panel shadow-2xl">
          {services.map((s, i) => (
            <div key={s.name} className={`flex flex-col sm:flex-row items-center sm:justify-between p-6 md:p-8 ${i < services.length - 1 ? "border-b border-ng-border" : ""} hover:bg-white/[0.02] transition-colors gap-4`}>
              <span className="font-display text-lg font-medium">{s.name}</span>
              <div className="flex items-center gap-3 bg-ng-elevated px-4 py-2 rounded-full border border-ng-border">
                <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ background: s.color, color: s.color }} />
                <span className="font-mono text-sm text-ng-secondary uppercase tracking-widest">{s.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
