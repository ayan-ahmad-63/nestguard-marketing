"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import CTABand from "@/components/marketing/CTABand";
import { Icon, icons } from "@/components/marketing/shared";

const team = [
  { 
    name: "Ayan Ahmad", 
    role: "Team Leader",
    bio: "Lead developer and architect of the NestGuard OS and biometric hardware integration. Focuses on systems architecture and physical access control.",
    gradient: "from-neutral-800 to-neutral-900"
  },
  { 
    name: "Ahmad Mujtaba", 
    role: "Team Member",
    bio: "Full-stack engineer responsible for the real-time command center, WebSockets telemetry, and the core frontend experience.",
    gradient: "from-zinc-800 to-zinc-900"
  },
  { 
    name: "Soban Asif", 
    role: "Team Member",
    bio: "Machine learning engineer specializing in behavioral anomaly detection algorithms and backend database optimization.",
    gradient: "from-stone-800 to-stone-900"
  },
];

export default function AboutPage() {
  return (
    <MarketingShell>
      {/* 1. Custom Editorial Hero */}
      <section className="relative z-10 w-full flex flex-col items-start justify-center min-h-screen pt-32 pb-24 overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-start text-left">
          
          <div className="relative z-10 w-full md:max-w-[55%] lg:max-w-[50%] pr-4 md:pr-0">
            <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 relative z-10">About The Project</p>
            <h1 className="font-display font-medium leading-[1.05] tracking-tight text-[40px] sm:text-[56px] md:text-[72px] mb-8 relative z-10">
              Access security, <br />
              <em className="font-serif italic font-light text-transparent bg-clip-text animate-text-gradient" style={{ backgroundImage: "linear-gradient(90deg, var(--color-ng-orange), #FFB067, var(--color-ng-orange-deep), var(--color-ng-orange))" }}>engineered</em> for students.
            </h1>
            <p className="text-ng-secondary text-[16px] md:text-[20px] leading-relaxed max-w-[480px] font-light mb-12 relative z-10">
              A final-year project born from a real problem — replacing forged sign-in ledgers with an automated, biometric, and real-time verifiable access pipeline.
            </p>
            {/* Section Links */}
            <div className="flex flex-wrap gap-4 relative z-10">
              {[
                { label: "The Problem", href: "#problem" },
                { label: "Meet the Team", href: "#team" }
              ].map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-xs font-semibold text-white tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] group"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Side Image (Absolute on Desktop, Flow on Mobile) */}
          <div className="mt-12 md:mt-0 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 flex justify-center w-full md:w-[40%] lg:w-[40%] max-w-[350px] lg:max-w-[400px] z-0 pointer-events-none">
            {/* Glowing orb behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-ng-orange/20 blur-[100px] rounded-full z-[-1]" />
            <img 
              src="/hero-fingerprint.png" 
              alt="3D Fingerprint Logo" 
              className="w-full object-contain drop-shadow-[0_20px_40px_rgba(255,107,0,0.15)] transition-transform duration-700 hover:scale-[1.03] pointer-events-auto" 
            />
          </div>
        </div>
      </section>

      {/* 2. "Why We Built This" - Structured Layout */}
      <section id="problem" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 border-t border-ng-border/50 scroll-mt-24">
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-16 lg:gap-24 items-start">
          <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] lg:sticky lg:top-32">
            The end of <br />
            <em className="font-serif italic font-light text-ng-secondary">manual</em> gatekeeping.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-2" style={{ color: "#FF6B00" }}>
                <Icon path={icons.lock} size={20} />
              </div>
              <h3 className="font-display font-medium text-xl">The Problem</h3>
              <p className="text-ng-secondary text-base leading-relaxed">
                University hostels across Pakistan rely on paper sign-in registers. These systems are trivially forgeable, offer zero real-time visibility, and create no usable data trail for wardens.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-2" style={{ color: "#FF6B00" }}>
                <Icon path={icons.bolt} size={20} />
              </div>
              <h3 className="font-display font-medium text-xl">The Solution</h3>
              <p className="text-ng-secondary text-base leading-relaxed">
                NestGuard replaces this with an end-to-end biometric access control system: optical fingerprint sensors at every gate, a real-time centralized dashboard, and permanent audit logging.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:col-span-2 mt-4 pt-8 border-t border-ng-border/50">
              <p className="text-ng-text text-lg leading-relaxed font-light">
                Developed as a Bachelor of Science in Computer Science final-year project, integrating embedded systems (Arduino + AS608), full-stack web architectures (Next.js + WebSockets), and machine learning (behavioral anomalies) into a single pane of glass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Team Section - Editorial Cards */}
      <section id="team" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 border-t border-ng-border/50">
        <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-20">
          The minds <br />
          <em className="font-serif italic font-light text-ng-secondary">behind</em> NestGuard.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col gap-6 group">
              {/* Photo Placeholder */}
              <div className={`w-full aspect-[3/4] rounded-2xl bg-gradient-to-br ${member.gradient} border border-ng-border relative overflow-hidden flex items-center justify-center group-hover:border-ng-orange/30 transition-colors duration-500`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <span className="font-display font-light text-[120px] text-white/5 group-hover:text-white/10 transition-colors duration-500 group-hover:scale-110 transform">
                  {member.name.charAt(0)}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white -rotate-90">
                    <Icon path={icons.arrowRight} size={14} />
                  </div>
                </div>
              </div>
              
              {/* Bio Block */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-medium text-2xl">{member.name}</h3>
                <p className="font-mono text-[10px] text-ng-orange uppercase tracking-widest mb-2">{member.role}</p>
                <p className="text-ng-secondary text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Supervisor & Affiliation */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24 md:py-32 border-t border-ng-border/50">
        <div className="grid md:grid-cols-2 gap-8 h-full">
          {/* Supervisor Card */}
          <div className="w-full rounded-[2rem] border border-ng-border bg-ng-panel p-10 md:p-14 flex flex-col justify-between min-h-[300px] relative overflow-hidden group hover:border-ng-orange/30 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ng-orange/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-ng-orange/10 transition-colors" />
            <div className="relative z-10">
              <div className="text-ng-orange mb-8"><Icon path={icons.brain} size={28} /></div>
              <h3 className="font-display font-medium text-3xl mb-2">Majid Hussain</h3>
              <p className="text-ng-secondary text-base">Lecturer, Dept. of CS&IT</p>
            </div>
            <div className="relative z-10 mt-8 pt-8 border-t border-ng-border/50">
              <p className="font-mono text-[10px] text-ng-muted font-bold uppercase tracking-widest">Project Supervisor</p>
            </div>
          </div>
          
          {/* Affiliation Card */}
          <div className="w-full rounded-[2rem] border border-ng-border bg-ng-panel p-10 md:p-14 flex flex-col justify-between min-h-[300px] relative overflow-hidden group hover:border-ng-orange/30 transition-colors">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors" />
            <div className="relative z-10">
              <div className="text-ng-text mb-8"><Icon path={icons.gate} size={28} /></div>
              <h3 className="font-display font-medium text-3xl mb-2">The University of Lahore</h3>
              <p className="text-ng-secondary text-base">Department of <br/>Computer Science & IT</p>
            </div>
            <div className="relative z-10 mt-8 pt-8 border-t border-ng-border/50">
              <p className="font-mono text-[10px] text-ng-muted font-bold uppercase tracking-widest">Academic Affiliation</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
