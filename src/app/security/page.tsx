"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import CTABand from "@/components/marketing/CTABand";
import { Icon, icons } from "@/components/marketing/shared";
import Typewriter from "@/components/marketing/Typewriter";

const sections = [
  {
    icon: icons.brain,
    title: "AI Anomaly Detection",
    paragraphs: [
      "NestGuard's behavioral analysis engine builds a baseline profile for every enrolled student based on their typical entry and exit patterns — time of day, frequency, preferred gates.",
      "When an access event deviates significantly from this baseline, the system flags it with a confidence score. Examples include entries at unusual hours, scanning at an unfamiliar gate, or multiple rapid scans that suggest credential sharing.",
      "The underlying approach uses statistical outlier detection (Isolation Forest) to identify events that don't match normal behavior. Flagged events appear on the security dashboard with full context so wardens can make informed decisions — the system assists, it does not replace human judgment.",
    ],
  },
  {
    icon: icons.chart,
    title: "Risk Scoring",
    paragraphs: [
      "Each student receives a dynamic risk score calculated from multiple behavioral factors: frequency of late-night entries, number of anomaly flags, unauthorized access attempts, and visitor request patterns.",
      "Risk scores are visible to wardens and administrators on the analytics dashboard. Students with elevated scores can be monitored more closely or flagged for a conversation — the goal is early intervention, not punishment.",
      "Scores decay over time when behavior normalizes, ensuring that a single unusual event doesn't permanently mark a student.",
    ],
  },
  {
    icon: icons.lock,
    title: "Audit & Logging",
    paragraphs: [
      "Every access event — entry, exit, denied attempt, visitor check-in — is permanently logged with a timestamp, gate identifier, student identity, and verification method.",
      "Logs are immutable: once written, records cannot be edited or deleted by any user role, including administrators. This guarantees an honest, auditable trail for institutional compliance and dispute resolution.",
      "The access log supports full-text search, date-range filtering, and export to CSV for external reporting.",
    ],
  },
  {
    icon: icons.shield,
    title: "Role-Based Access Control",
    paragraphs: [
      "NestGuard enforces four distinct roles, each with carefully scoped permissions:",
    ],
  },
];

const roles = [
  { role: "Admin", abilities: "Full system configuration, user management, gate provisioning, analytics access" },
  { role: "Warden", abilities: "Approve visitor passes, manage leave requests, view access logs, acknowledge alerts" },
  { role: "Security", abilities: "Monitor live access feed, respond to alerts, view gate status" },
  { role: "Student", abilities: "Request visitor passes, submit leave applications, view own access history" },
];

export default function Security() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Security & AI"
        title={
          <>
            Intelligent, verifiable <br className="hidden md:block" />
            <em className="font-serif italic font-light text-transparent bg-clip-text animate-text-gradient" style={{ backgroundImage: "linear-gradient(90deg, var(--color-ng-orange), #FFB067, var(--color-ng-orange-deep), var(--color-ng-orange))" }}>security.</em>
          </>
        }
        subtitle="Powered by behavioral AI and immutable logging. We analyze baseline routines to proactively flag risks before they escalate."
        showCanvas={true}
        variant="security"
        sectionLinks={[
          { label: "AI Anomaly Detection", href: "#anomaly-detection" },
          { label: "Core Mechanics", href: "#mechanics" },
          { label: "Architecture", href: "#architecture" }
        ]}
      />

      {/* 1. Primary Feature Block: AI */}
      <section id="anomaly-detection" className="border-y border-ng-border/50 bg-ng-panel/30 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ng-border/50">
          <div className="py-24 md:py-32 md:pr-16 flex flex-col justify-center">
            <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 ml-1">AI Anomaly Detection</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              We analyze baseline routines to proactively flag risks.
            </h2>
            <div className="flex flex-col gap-4">
              {sections[0].paragraphs.map((p, j) => (
                <p key={j} className="text-ng-secondary text-base leading-relaxed font-light">{p}</p>
              ))}
            </div>
          </div>
          
          <div className="py-24 md:py-32 md:pl-16 flex flex-col justify-center">
            {/* Abstract UI representation of AI tracking */}
            <div className="w-full rounded-2xl border border-ng-border bg-ng-panel/80 p-8 shadow-2xl relative overflow-hidden group hover:border-ng-orange/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-ng-border pb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                  </div>
                  <div>
                    <div className="text-white font-medium tracking-wide">High Confidence Alert</div>
                    <div className="text-ng-secondary text-sm font-mono mt-1">SIMULTANEOUS_LOGIN_ATTEMPT</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-ng-secondary">Baseline Deviation</span>
                    <span className="text-ng-orange font-mono">94%</span>
                  </div>
                  <div className="w-full h-1.5 bg-ng-elevated rounded-full overflow-hidden">
                    <div className="w-[94%] h-full bg-gradient-to-r from-ng-orange to-red-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Secondary Features Grid */}
      <section id="mechanics" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 scroll-mt-24">
        <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 text-center md:text-left ml-1">Core Mechanics</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-32">
          {sections.slice(1, 3).map((s, i) => (
            <div key={i} className="group relative bg-ng-panel/30 border border-ng-border rounded-2xl p-8 md:p-10 hover:border-ng-orange/50 transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ng-orange/0 to-ng-orange/0 group-hover:from-ng-orange/5 group-hover:to-transparent transition-colors duration-700 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-6 shadow-sm text-ng-orange group-hover:scale-110 group-hover:border-ng-orange/30 transition-all duration-300">
                  <Icon path={s.icon} size={24} />
                </div>
                <h3 className="font-display font-medium text-2xl tracking-tight mb-4">{s.title}</h3>
                <div className="flex flex-col gap-4">
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-ng-secondary text-base leading-relaxed font-light">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Role-Based Access Control Grid */}
        <div id="architecture" className="border-t border-ng-border/50 pt-24 md:pt-32 scroll-mt-24">
          <div className="text-center md:text-left mb-16">
            <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 ml-1">Architecture</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight">Role-Based Access Control</h2>
            <p className="text-ng-secondary text-base mt-4 max-w-2xl font-light">Four distinct roles, each with carefully scoped permissions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r, i) => (
              <div key={i} className="group flex flex-col bg-ng-panel border border-ng-border rounded-xl p-8 hover:border-ng-orange/50 transition-all duration-500 hover:-translate-y-1">
                <div className="text-ng-orange font-mono text-xl mb-4 tracking-wider">{r.role}</div>
                <p className="text-ng-secondary text-sm leading-relaxed font-light mt-auto">{r.abilities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
