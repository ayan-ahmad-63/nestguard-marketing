"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import HeroCanvas from "@/components/marketing/HeroCanvas";
import CTABand from "@/components/marketing/CTABand";
import { Icon, icons } from "@/components/marketing/shared";

const steps = [
  {
    step: "01",
    icon: icons.finger,
    title: "Scan",
    desc: "A student places their finger on the AS608 optical biometric reader mounted at the gate terminal. The sensor captures the fingerprint and performs a 1:N match against the enrolled template database on-device.",
  },
  {
    step: "02",
    icon: icons.scan,
    title: "Verify",
    desc: "The gateway microcontroller receives the match result from the sensor. If the fingerprint matches an enrolled student, the system checks for duplicate or replay events (e.g., the same student scanning twice within seconds). If no anomalies are found, the gate relay is triggered.",
  },
  {
    step: "03",
    icon: icons.gate,
    title: "Unlock",
    desc: "The relay energizes the solenoid lock, retracting the bolt for a configurable duration (default: 5 seconds). The student passes through, and the lock re-engages automatically. A green LED confirms access; a red LED signals denial.",
  },
  {
    step: "04",
    icon: icons.lock,
    title: "Log",
    desc: "The hardware gateway service translates the raw sensor event into a structured access log entry and sends it to the central NestGuard server via HTTP. The event appears on the live dashboard feed within 400ms of the scan. Logs are write-once — they cannot be edited or deleted after creation.",
  },
  {
    step: "05",
    icon: icons.brain,
    title: "Analyze",
    desc: "The AI anomaly engine evaluates the new event against the student's behavioral baseline. Factors include time of day relative to normal patterns, gate familiarity, and recent access frequency. If the event deviates significantly, a confidence-scored anomaly flag is attached to the log entry.",
  },
  {
    step: "06",
    icon: icons.alert,
    title: "Alert",
    desc: "If the event is flagged as anomalous or the scan was unauthorized (no fingerprint match), the system generates a real-time alert. Wardens and security staff see the alert on their dashboard immediately. Critical alerts can also trigger notifications via email and Telegram integration.",
  },
];

export default function HowItWorksPage() {
  return (
    <MarketingShell>
      {/* Locked Fullscreen View */}
      <div className="relative h-screen w-full overflow-hidden bg-ng-bg">
        
        {/* Full-height canvas background */}
        <div className="absolute inset-0 z-0">
          <HeroCanvas variant="how-it-works" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 h-full pt-24 md:pt-32">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-24 h-full w-full">
            
            {/* Left Side: Static Hero Content */}
            <div className="flex flex-col justify-center h-full pb-32 lg:pb-0">
                <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 relative z-10">
                  How It Works
                </p>
                <h1 className="font-display font-medium leading-[1.05] tracking-tight text-[40px] sm:text-[56px] md:text-[72px] mb-8">
                  From scan to <br/>
                  <em className="font-serif italic font-light text-transparent bg-clip-text animate-text-gradient" style={{ backgroundImage: "linear-gradient(90deg, var(--color-ng-orange), #FFB067, var(--color-ng-orange-deep), var(--color-ng-orange))" }}>
                    secured.
                  </em>
                </h1>
              <p className="font-body text-ng-secondary text-[16px] md:text-[20px] leading-relaxed max-w-md hidden md:block">
                The full NestGuard pipeline — six steps, under one second, fully automated. Scroll to explore.
              </p>
            </div>

            {/* Right Side: Internal Scroll Container */}
            <div 
              className="h-full overflow-y-auto snap-y snap-mandatory pb-[30vh]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
              
              <div className="relative flex flex-col">

                {steps.map((s, i) => (
                  <div key={i} className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-stretch snap-center min-h-[60vh] lg:min-h-[80vh] py-10">
                    {/* Step Number / Node on the line */}
                    <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-16 relative z-10">
                      {/* Top connecting line */}
                      {i !== 0 && (
                        <div className="absolute -top-10 w-px bg-ng-orange/30 -z-10" style={{ bottom: "calc(50% - 26px)" }} />
                      )}
                      {/* Bottom connecting line */}
                      {i !== steps.length - 1 && (
                        <div className="absolute -bottom-10 w-px bg-ng-orange/30 -z-10" style={{ top: "calc(50% + 26px)" }} />
                      )}

                      <div className="font-display font-medium text-ng-orange text-xl bg-ng-bg px-2 py-1 rounded-lg">{s.step}</div>
                      <div className="w-3 h-3 rounded-full bg-ng-orange mt-4 shadow-[0_0_15px_rgba(255,107,0,1)]" />
                    </div>
                    
                    {/* Content Box */}
                    <div className="flex-1 flex flex-col justify-center bg-ng-panel/60 backdrop-blur-xl border border-ng-border/50 rounded-[2rem] p-8 lg:p-10 shadow-2xl transition-all hover:border-ng-orange/30 hover:bg-ng-panel/80">
                      <div className="md:hidden font-display font-medium text-ng-orange text-xl mb-4">Step {s.step}</div>
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-6 shadow-lg" style={{ color: "#FF6B00" }}>
                        <Icon path={s.icon} size={32} />
                      </div>
                      <h3 className="font-display font-medium text-2xl lg:text-3xl tracking-tight mb-4">{s.title}</h3>
                      <p className="text-ng-secondary text-base lg:text-lg leading-relaxed max-w-2xl">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
