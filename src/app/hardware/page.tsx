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
        title="The physical access layer."
        subtitle="Optical biometric sensors, relay-driven locks, and a dedicated hardware gateway — purpose-built for hostel gate access control."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-16">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Build status note */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-ng-border bg-ng-panel p-8 md:p-10 flex flex-col items-center text-center gap-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center shrink-0 mb-2 shadow-sm" style={{ color: "var(--color-ng-amber)" }}>
            <Icon path={icons.alert} size={24} />
          </div>
          <div>
            <h4 className="font-display font-medium text-xl mb-3">Current Build Status</h4>
            <p className="text-ng-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              The hardware integration is currently demonstrated in simulated mode — the gateway generates realistic mock sensor events for demonstration and evaluation purposes. Physical deployment with AS608 sensors and solenoid locks is in progress.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
