"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import CTABand from "@/components/marketing/CTABand";
import { Icon, icons } from "@/components/marketing/shared";

const features = [
  {
    icon: icons.eye,
    title: "Centralized Dashboard",
    desc: "A single pane of glass for every gate on campus. The live access feed shows real-time entry and exit events as they happen. Gate status, occupancy counts, and critical alerts are all visible at a glance — no page refreshes, no manual checks.",
  },
  {
    icon: icons.users,
    title: "Visitor Management",
    desc: "Students can request visitor passes through a structured approval workflow. Hosts submit the request, wardens approve or deny, and the visitor receives a time-bound entry pass. Every visitor event is logged alongside resident traffic for a complete picture.",
  },
  {
    icon: icons.check,
    title: "Leave & Permission Management",
    desc: "Students submit leave requests digitally. Wardens can approve, reject, or review pending requests from the dashboard. The system cross-references leave status with gate activity, flagging students who scan in during an active leave period.",
  },
  {
    icon: icons.chart,
    title: "Analytics Dashboard",
    desc: "Occupancy trends, peak traffic hours, per-gate throughput, and behavioral risk scores — all visualized in a purpose-built analytics view. Export data for institutional reporting or drill down into individual student movement patterns over time.",
  },
  {
    icon: icons.shield,
    title: "Role-Based Access Control",
    desc: "Four distinct roles — Admin, Warden, Security, and Student — each with carefully scoped permissions. Admins configure the system, wardens manage day-to-day operations, security monitors alerts, and students interact only with their own data.",
  },
];

export default function PlatformPage() {
  return (
    <MarketingShell>
      <PageHero
        title="One console for every gate."
        subtitle="NestGuard OS gives wardens, security staff, and administrators a unified command center for real-time hostel access monitoring, visitor management, and anomaly detection."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="flex flex-col gap-32">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-6 shadow-lg" style={{ color: "#FF6B00" }}>
                <Icon path={f.icon} size={32} />
              </div>
              <h3 className="font-display font-medium text-3xl md:text-4xl mb-4 max-w-2xl">{f.title}</h3>
              <p className="text-ng-secondary text-lg leading-relaxed max-w-3xl mb-12">{f.desc}</p>
              
              {/* Placeholder panel mimicking the dashboard mockup style */}
              <div className="w-full max-w-4xl rounded-2xl border border-ng-border bg-ng-panel p-6 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-ng-orange/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-ng-blue/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="w-full relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="h-4 w-1/4 bg-ng-border rounded-full" />
                    <div className="flex gap-2">
                      <div className="h-4 w-4 bg-ng-border rounded-full" />
                      <div className="h-4 w-4 bg-ng-border rounded-full" />
                      <div className="h-4 w-4 bg-ng-border rounded-full" />
                    </div>
                  </div>
                  <div className="h-3 w-full bg-ng-border/50 rounded-full mb-4" />
                  <div className="h-3 w-[85%] bg-ng-border/50 rounded-full mb-8" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="h-24 bg-ng-elevated rounded-xl border border-ng-border" />
                    <div className="h-24 bg-ng-elevated rounded-xl border border-ng-border" />
                    <div className="h-24 bg-ng-elevated rounded-xl border border-ng-border" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
