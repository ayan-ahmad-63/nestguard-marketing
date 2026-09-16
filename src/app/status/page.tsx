"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import { Icon, icons } from "@/components/marketing/shared";

const services = [
  { name: "Main Application", status: "Operational", color: "var(--color-ng-green)" },
  { name: "AI Anomaly Engine", status: "In Development", color: "var(--color-ng-amber)" },
  { name: "Hardware Gateway", status: "In Development", color: "var(--color-ng-amber)" },
  { name: "Access Log Database", status: "In Development", color: "var(--color-ng-amber)" },
  { name: "Notification Service", status: "In Development", color: "var(--color-ng-amber)" },
];

export default function StatusPage() {
  return (
    <MarketingShell>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-40 md:pt-52 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side - Hero Text */}
          <div className="flex flex-col gap-12">
            <div>
              <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 relative z-10 ml-1">
                Status
              </p>
              <h1 className="font-display font-medium leading-[1.1] tracking-tight text-5xl sm:text-6xl md:text-7xl max-w-xl mb-6">
                System <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ng-orange to-amber-500">
                  Status.
                </span>
              </h1>
              <p className="font-body text-ng-secondary text-lg md:text-xl leading-relaxed max-w-md">
                Current operational status of all NestGuard services and hardware components.
              </p>
            </div>
            
            <div className="rounded-[2rem] border border-ng-border bg-ng-panel p-8 shadow-sm flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
              </div>
              <div>
                <h3 className="font-display font-medium text-lg mb-1">Systems Under Development</h3>
                <p className="text-sm text-ng-secondary mb-3">NestGuard is currently in active development.</p>
                <p className="font-mono text-[10px] text-ng-orange uppercase tracking-widest">Last updated: just now</p>
              </div>
            </div>
          </div>

          {/* Right Side - Status Box */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ng-orange/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 rounded-[2.5rem] border border-ng-border overflow-hidden bg-ng-panel shadow-2xl backdrop-blur-2xl flex flex-col">
              {/* Mac-like Window Chrome */}
              <div className="h-14 border-b border-ng-border bg-ng-panel/80 flex items-center px-6 gap-2 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 font-mono text-[11px] text-ng-muted tracking-widest uppercase">
                  status.nestguard.live
                </div>
              </div>
              <div className="flex flex-col">
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
            </div>
          </div>

        </div>
      </section>
    </MarketingShell>
  );
}
