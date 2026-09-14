"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import CTABand from "@/components/marketing/CTABand";

export default function DocsPage() {
  return (
    <MarketingShell>
      <PageHero
        title="Documentation"
        subtitle="Technical documentation for the NestGuard platform."
      />

      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-24">
        <article className="prose prose-invert max-w-none">
          <div className="rounded-2xl border border-ng-border bg-ng-panel p-8 md:p-12">
            <h2 className="font-display font-medium text-2xl mb-6 text-ng-text">NestGuard — Overview</h2>

            <div className="flex flex-col gap-6 text-ng-secondary text-sm leading-relaxed">
              <div>
                <h3 className="font-display font-medium text-lg text-ng-text mb-3">What is NestGuard?</h3>
                <p>NestGuard is a biometric access control system designed for university hostels. It replaces manual sign-in registers with optical fingerprint authentication at gate terminals, providing real-time monitoring, AI-driven anomaly detection, and a permanent audit trail.</p>
              </div>

              <div>
                <h3 className="font-display font-medium text-lg text-ng-text mb-3">Architecture</h3>
                <p>The system consists of three layers:</p>
                <ul className="list-disc ml-5 mt-2 flex flex-col gap-2">
                  <li><strong className="text-ng-text">Hardware Layer</strong> — AS608 optical fingerprint sensors + Arduino microcontrollers + relay-driven solenoid locks at each gate</li>
                  <li><strong className="text-ng-text">Gateway Service</strong> — A Node.js service bridging serial (UART) communication from Arduino to the main server via HTTP. Supports a simulated mode for demos.</li>
                  <li><strong className="text-ng-text">Web Application</strong> — Next.js frontend with a Node.js/Express backend. Handles user management, access log storage, analytics, visitor management, and the real-time dashboard.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display font-medium text-lg text-ng-text mb-3">Technology Stack</h3>
                <div className="rounded-xl border border-ng-border overflow-hidden mt-2">
                  <table className="w-full text-left">
                    <tbody>
                      {[
                        ["Frontend", "Next.js 15, React 19, Tailwind CSS 4, TypeScript"],
                        ["Backend", "Node.js, Express, Prisma ORM"],
                        ["Database", "PostgreSQL"],
                        ["AI/ML", "Python, scikit-learn (Isolation Forest)"],
                        ["Hardware", "Arduino Uno, AS608 Sensor, Relay Module"],
                        ["Gateway", "Node.js, SerialPort library"],
                      ].map(([label, value]) => (
                        <tr key={label} className="border-b border-ng-border last:border-b-0">
                          <td className="px-4 py-2.5 font-mono text-xs text-ng-orange font-medium w-1/4">{label}</td>
                          <td className="px-4 py-2.5 text-xs text-ng-secondary">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-display font-medium text-lg text-ng-text mb-3">User Roles</h3>
                <p>The system supports four roles: <strong className="text-ng-text">Admin</strong> (full system configuration), <strong className="text-ng-text">Warden</strong> (daily operations, visitor approvals), <strong className="text-ng-text">Security</strong> (monitoring and alert response), and <strong className="text-ng-text">Student</strong> (personal access history, visitor/leave requests).</p>
              </div>

              <div>
                <h3 className="font-display font-medium text-lg text-ng-text mb-3">Getting Started</h3>
                <div className="rounded-xl bg-ng-elevated border border-ng-border p-4 font-mono text-xs">
                  <div className="text-ng-muted mb-1"># Clone and install</div>
                  <div className="text-ng-text">git clone https://github.com/your-org/nestguard.git</div>
                  <div className="text-ng-text">cd nestguard-frontend && npm install</div>
                  <div className="text-ng-text mt-2">npm run dev</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
