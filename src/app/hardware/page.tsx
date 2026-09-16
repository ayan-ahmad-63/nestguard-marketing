"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import CTABand from "@/components/marketing/CTABand";
import { Icon, icons } from "@/components/marketing/shared";

const sections = [
  {
    icon: icons.finger,
    title: "AS608 Optical Fingerprint Sensor",
    paragraphs: [
      "The AS608 is an optical fingerprint module that captures, stores, and matches fingerprint templates on-device. It communicates over UART serial to the gateway microcontroller.",
      "Optical sensing was chosen for durability and cost-effectiveness in a hostel environment where sensors are exposed to dust, moisture, and heavy daily use. The sensor handles template enrollment, 1:N matching, and duplicate detection entirely on the module itself.",
      "Each enrolled fingerprint is stored as a compact template (512 bytes), not a raw image — the original fingerprint cannot be reconstructed from the stored data.",
    ],
  },
  {
    icon: icons.gate,
    title: "Gate Mechanism",
    paragraphs: [
      "Gate access is controlled by a relay module driving a solenoid lock. On a successful fingerprint match, the gateway microcontroller energizes the relay, retracting the solenoid bolt for a configurable duration (default: 5 seconds) before re-locking automatically.",
      "The relay provides galvanic isolation between the low-voltage control circuit and the lock's power supply. A status LED at the gate provides immediate visual feedback: green for access granted, red for denied.",
    ],
  },
  {
    icon: icons.server,
    title: "Hardware Gateway Service",
    paragraphs: [
      "The hardware gateway is a dedicated background service that bridges the Arduino's serial communication (UART over USB) to the main NestGuard application via HTTP API calls.",
      "It translates raw sensor events (fingerprint match, no-match, enrollment) into structured access log entries that the dashboard consumes in real time.",
      "For development and demonstration, the gateway supports a simulated mode that generates realistic mock sensor events without requiring physical hardware. This allows the full system to be demonstrated in a classroom or presentation setting.",
    ],
  },
  {
    icon: icons.wifi,
    title: "Multi-Gate Support",
    paragraphs: [
      "NestGuard is designed for multi-gate deployments. Each gate has its own sensor and relay, connected to an independent gateway service instance. The central server aggregates events from all gates into a single unified feed.",
      "Gates can be added, removed, or taken offline without affecting the rest of the system. Each gate reports its own health telemetry (last heartbeat, battery state if applicable, connection status) to the dashboard.",
    ],
  },
];

export default function HardwarePage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Hardware"
        title={
          <>
            Purpose-built physical <br className="hidden md:block" />
            <em className="font-serif italic font-light text-transparent bg-clip-text animate-text-gradient" style={{ backgroundImage: "linear-gradient(90deg, var(--color-ng-orange), #FFB067, var(--color-ng-orange-deep), var(--color-ng-orange))" }}>infrastructure.</em>
          </>
        }
        subtitle="Deploy with confidence. Our purpose-built optical biometric gateways and high-durability relay systems guarantee sub-second authentication under the most demanding hostel environments."
        variant="hardware"
        sectionLinks={[
          { label: "Biometric Core", href: "#biometric-core" },
          { label: "Architecture", href: "#architecture" },
          { label: "Build Status", href: "#build-status" }
        ]}
      />

      {/* 1. Primary Feature Block: AS608 */}
      <section id="biometric-core" className="border-y border-ng-border/50 bg-ng-panel/30 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ng-border/50">
          <div className="py-20 md:py-32 md:pr-16 flex flex-col justify-center">
            <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-6 ml-1">Biometric Core</p>
            <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl leading-tight mb-8">
              {sections[0].title}
            </h2>
            <div className="flex flex-col gap-4">
              {sections[0].paragraphs.map((p, j) => (
                <p key={j} className="text-ng-secondary text-lg leading-relaxed font-light">{p}</p>
              ))}
            </div>
          </div>
          
          <div className="py-20 md:py-32 md:pl-16 flex flex-col justify-center">
            {/* Abstract UI representation of Hardware/Sensor */}
            <div className="w-full rounded-2xl border border-ng-border bg-ng-panel/80 p-8 shadow-2xl relative overflow-hidden group hover:border-ng-orange/50 transition-colors duration-500 flex items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center shadow-lg mb-6 relative group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-2xl border border-ng-orange/30 animate-ping opacity-20" />
                  <div className="text-ng-orange opacity-80">
                    <Icon path={icons.finger} size={48} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-ng-orange animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-ng-orange animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-ng-orange animate-pulse delay-150" />
                </div>
                <div className="font-mono text-xs text-ng-secondary mt-4 tracking-widest uppercase">UART Serial / 57600 baud</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hardware Architecture Grid */}
      <section id="architecture" className="mx-auto max-w-6xl px-5 sm:px-8 pt-32 pb-32 scroll-mt-24">
        <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-12 text-center md:text-left ml-1">Architecture</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {sections.slice(1).map((s, i) => (
            <div key={i} className="group relative bg-ng-panel/30 border border-ng-border rounded-2xl p-8 hover:border-ng-orange/50 transition-colors duration-500 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-ng-orange/0 to-ng-orange/0 group-hover:from-ng-orange/5 group-hover:to-transparent transition-colors duration-700 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-6 shadow-sm text-ng-orange group-hover:scale-110 group-hover:border-ng-orange/30 transition-all duration-300 shrink-0">
                  <Icon path={s.icon} size={24} />
                </div>
                <h3 className="font-display font-medium text-2xl tracking-tight mb-4">{s.title}</h3>
                <div className="flex flex-col gap-4 mt-auto">
                  <p className="text-ng-secondary text-sm leading-relaxed font-light">{s.paragraphs[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Build status note */}
        <div id="build-status" className="mx-auto max-w-3xl rounded-2xl border border-ng-border bg-ng-panel p-8 md:p-10 flex flex-col items-center text-center gap-4 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500 scroll-mt-32">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-500" />
          <div className="w-12 h-12 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center shrink-0 mb-2 shadow-sm text-amber-500 group-hover:scale-110 transition-transform duration-300">
            <Icon path={icons.alert} size={24} />
          </div>
          <div className="relative z-10">
            <h4 className="font-display font-medium text-xl mb-3">Current Build Status</h4>
            <p className="text-ng-secondary text-base md:text-lg leading-relaxed font-light">
              The hardware integration is currently demonstrated in simulated mode — the gateway generates realistic mock sensor events for demonstration and evaluation purposes. Physical deployment with AS608 sensors and solenoid locks is in progress.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
