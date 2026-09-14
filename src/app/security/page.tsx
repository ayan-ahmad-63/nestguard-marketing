"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import CTABand from "@/components/marketing/CTABand";
import { Icon, icons } from "@/components/marketing/shared";

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

export default function SecurityPage() {
  return (
    <MarketingShell>
      <PageHero
        title="Intelligent, verifiable security."
        subtitle="NestGuard combines real-time behavioral analysis with permanent audit logging to make hostel security transparent, accountable, and proactive."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="flex flex-col gap-32">
          {sections.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-6 shadow-lg" style={{ color: "#FF6B00" }}>
                <Icon path={s.icon} size={32} />
              </div>
              <h3 className="font-display font-medium text-3xl md:text-4xl mb-6">{s.title}</h3>
              <div className="flex flex-col gap-4 items-center">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-ng-secondary text-lg leading-relaxed max-w-3xl">{p}</p>
                ))}
                {s.title === "Role-Based Access Control" && (
                  <div className="mt-8 w-full max-w-4xl rounded-2xl border border-ng-border overflow-hidden bg-ng-panel shadow-2xl text-left">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-ng-border bg-ng-elevated">
                          <th className="px-6 py-4 font-display font-medium text-sm text-ng-text">Role</th>
                          <th className="px-6 py-4 font-display font-medium text-sm text-ng-text">Capabilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        {roles.map((r) => (
                          <tr key={r.role} className="border-b border-ng-border last:border-b-0 hover:bg-white/[0.02] transition-colors">
                            <td className="px-6 py-5 font-mono text-sm text-ng-orange font-medium w-1/4">{r.role}</td>
                            <td className="px-6 py-5 text-sm text-ng-secondary leading-relaxed">{r.abilities}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
