"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import CTABand from "@/components/marketing/CTABand";

export default function DocsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Documentation"
        title={
          <>
            Technical <br className="hidden md:block" />
            <em className="font-serif italic font-light text-transparent bg-clip-text animate-text-gradient" style={{ backgroundImage: "linear-gradient(90deg, var(--color-ng-orange), #FFB067, var(--color-ng-orange-deep), var(--color-ng-orange))" }}>Reference.</em>
          </>
        }
        subtitle="Complete technical documentation for the NestGuard platform."
        showCanvas={true}
        variant="default"
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 scroll-mt-24">
        <div className="grid md:grid-cols-[1fr_2.5fr] gap-12 items-start">
          
          {/* Sidebar */}
          <div className="hidden md:flex flex-col gap-4 sticky top-32">
            <h3 className="font-display font-medium text-lg mb-2">Contents</h3>
            <div className="flex flex-col gap-3 text-sm font-light text-ng-secondary">
              <a href="#overview" className="hover:text-ng-orange transition-colors">Overview</a>
              <a href="#architecture" className="hover:text-ng-orange transition-colors">Architecture</a>
              <a href="#tech-stack" className="hover:text-ng-orange transition-colors">Technology Stack</a>
              <a href="#roles" className="hover:text-ng-orange transition-colors">User Roles</a>
              <a href="#getting-started" className="hover:text-ng-orange transition-colors">Getting Started</a>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-16">
            
            <div id="overview" className="scroll-mt-32">
              <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">What is NestGuard?</h2>
              <p className="text-ng-secondary text-base leading-relaxed font-light mb-8">
                NestGuard is a biometric access control system designed for university hostels. It replaces manual sign-in registers with optical fingerprint authentication at gate terminals, providing real-time monitoring, AI-driven anomaly detection, and a permanent audit trail.
              </p>
            </div>

            <div id="architecture" className="scroll-mt-32">
              <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">Architecture</h2>
              <p className="text-ng-secondary text-base leading-relaxed font-light mb-8">
                The system consists of three layers:
              </p>
              
              <div className="grid gap-4">
                {[
                  { title: "Hardware Layer", desc: "AS608 optical fingerprint sensors + Arduino microcontrollers + relay-driven solenoid locks at each gate." },
                  { title: "Gateway Service", desc: "A Node.js service bridging serial (UART) communication from Arduino to the main server via HTTP. Supports a simulated mode for demos." },
                  { title: "Web Application", desc: "Next.js frontend with a Node.js/Express backend. Handles user management, access log storage, analytics, visitor management, and the real-time dashboard." }
                ].map((item, idx) => (
                  <div key={idx} className="group relative bg-ng-panel/30 border border-ng-border rounded-xl p-6 hover:border-ng-orange/30 transition-all duration-300">
                    <h3 className="font-display font-medium text-xl mb-2 text-ng-text">{item.title}</h3>
                    <p className="text-ng-secondary text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="tech-stack" className="scroll-mt-32">
              <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">Technology Stack</h2>
              
              <div className="rounded-2xl border border-ng-border bg-ng-panel/50 overflow-hidden">
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
                      <tr key={label} className="border-b border-ng-border last:border-b-0 hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 font-mono text-sm text-ng-orange font-medium w-1/4">{label}</td>
                        <td className="px-6 py-4 text-sm text-ng-secondary font-light">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="roles" className="scroll-mt-32">
              <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">User Roles</h2>
              <p className="text-ng-secondary text-base leading-relaxed font-light">
                The system supports four roles: <strong className="text-white font-medium">Admin</strong> (full system configuration), <strong className="text-white font-medium">Warden</strong> (daily operations, visitor approvals), <strong className="text-white font-medium">Security</strong> (monitoring and alert response), and <strong className="text-white font-medium">Student</strong> (personal access history, visitor/leave requests).
              </p>
            </div>

            <div id="getting-started" className="scroll-mt-32">
              <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">Getting Started</h2>
              <div className="rounded-2xl bg-black/40 border border-ng-border p-6 font-mono text-sm shadow-inner overflow-x-auto">
                <div className="text-ng-muted mb-2"># Clone and install</div>
                <div className="text-emerald-400 mb-1">$ <span className="text-white">git clone https://github.com/your-org/nestguard.git</span></div>
                <div className="text-emerald-400 mb-4">$ <span className="text-white">cd nestguard-frontend && npm install</span></div>
                <div className="text-ng-muted mb-2"># Run the development server</div>
                <div className="text-emerald-400">$ <span className="text-white">npm run dev</span></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
