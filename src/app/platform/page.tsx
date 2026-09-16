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
        eyebrow="Platform"
        title={
          <>
            One Unified <br className="hidden md:block" />
            <em className="font-serif italic font-light text-transparent bg-clip-text animate-text-gradient" style={{ backgroundImage: "linear-gradient(90deg, var(--color-ng-orange), #FFB067, var(--color-ng-orange-deep), var(--color-ng-orange))" }}>Command Center.</em>
          </>
        }
        subtitle="Real-time campus visibility. Monitor access, manage visitors, and detect anomalies from a single unified dashboard."
        showCanvas={true}
        variant="platform"
        sectionLinks={[
          { label: "Dashboard", href: "#dashboard" },
          { label: "Core Capabilities", href: "#capabilities" }
        ]}
      />

      {/* 1. Primary Feature Block */}
      <section id="dashboard" className="border-y border-ng-border/50 bg-ng-panel/30 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ng-border/50">
          <div className="py-24 md:py-32 md:pr-16 flex flex-col justify-center">
            <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8">Centralized Dashboard</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              A single pane of glass for every gate on campus.
            </h2>
            <p className="text-ng-secondary text-base leading-relaxed font-light">
              The live access feed shows real-time entry and exit events as they happen. Gate status, occupancy counts, and critical alerts are all visible at a glance — no page refreshes, no manual checks.
            </p>
          </div>
          
          <div className="py-24 md:py-32 md:pl-16 flex items-center justify-center">
            {/* Dashboard Mockup Panel */}
            <div className="w-full rounded-2xl border border-ng-border bg-ng-panel/80 p-6 shadow-2xl relative overflow-hidden group hover:border-ng-orange/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-ng-orange/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-ng-orange/20 transition-colors duration-500" />
              
              <div className="w-full relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-3 w-1/3 bg-ng-border/80 rounded-full" />
                  <div className="flex gap-2">
                    <div className="h-3 w-3 bg-ng-border/60 rounded-full" />
                    <div className="h-3 w-3 bg-ng-border/60 rounded-full" />
                    <div className="h-3 w-3 bg-ng-border/60 rounded-full" />
                  </div>
                </div>
                <div className="h-2 w-full bg-ng-border/40 rounded-full mb-4" />
                <div className="h-2 w-[85%] bg-ng-border/40 rounded-full mb-8" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-ng-elevated/50 rounded-xl border border-ng-border/50" />
                  <div className="h-20 bg-ng-elevated/50 rounded-xl border border-ng-border/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Platform Capabilities Grid */}
      <section id="capabilities" className="mx-auto max-w-6xl px-5 sm:px-8 pt-32 pb-32 scroll-mt-24">
        <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 text-center md:text-left">Core Capabilities</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.slice(1).map((f, i) => (
            <div key={i} className="group relative bg-ng-panel/30 border border-ng-border rounded-2xl p-8 md:p-10 hover:border-ng-orange/30 hover:shadow-[0_0_20px_rgba(255,107,0,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-ng-orange/0 to-ng-orange/0 group-hover:from-ng-orange/5 group-hover:to-transparent transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-6 shadow-sm text-ng-orange group-hover:scale-110 group-hover:border-ng-orange/30 transition-all duration-300">
                  <Icon path={f.icon} size={24} />
                </div>
                <h3 className="font-display font-medium text-2xl tracking-tight mb-4">{f.title}</h3>
                <p className="text-ng-secondary text-base leading-relaxed font-light">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
