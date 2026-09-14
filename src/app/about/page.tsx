"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import CTABand from "@/components/marketing/CTABand";

const team = [
  { name: "Ayan Ahmad", role: "Team Leader" },
  { name: "Ahmad Mujtaba", role: "Team Member" },
  { name: "Soban Asif", role: "Team Member" },
];

export default function AboutPage() {
  return (
    <MarketingShell>
      <PageHero
        title="About NestGuard"
        subtitle="A final-year project born from a real problem — the lack of secure, automated, real-time access monitoring in university hostels."
      />

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          <h2 className="font-display font-medium text-3xl md:text-4xl mb-8">Why we built this</h2>
          <div className="flex flex-col gap-6 text-ng-secondary text-lg leading-relaxed">
            <p>
              University hostels across Pakistan still rely on paper sign-in registers and manual gatekeeping. These systems are trivially forgeable, offer zero real-time visibility, and create no usable data trail for wardens or administration.
            </p>
            <p>
              NestGuard replaces this with an end-to-end biometric access control system: optical fingerprint sensors at every gate, a real-time centralized dashboard, AI-driven anomaly detection, and permanent audit logging. The goal is not to surveil students, but to make hostel access transparent, accountable, and safe for everyone.
            </p>
            <p>
              This project was developed as a Bachelor of Science in Software Engineering final-year project, combining embedded systems (Arduino + AS608 sensor), full-stack web development (Next.js + Node.js), and machine learning (behavioral anomaly detection) into a single integrated platform.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-5 sm:px-8 pb-24 text-center">
        <h2 className="font-display font-medium text-3xl md:text-4xl mb-12">The Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member) => (
            <div key={member.name} className="w-[240px] rounded-3xl border border-ng-border bg-ng-panel p-8 flex flex-col items-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-ng-elevated border border-ng-border flex items-center justify-center mb-5 shadow-inner">
                <span className="font-display font-bold text-2xl text-ng-orange">{member.name.charAt(0)}</span>
              </div>
              <h3 className="font-display font-medium text-lg mb-1">{member.name}</h3>
              <p className="font-mono text-xs text-ng-secondary uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supervisor & Affiliation */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-32">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-ng-border bg-ng-panel p-10 md:p-14 flex flex-col items-center text-center gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ng-orange/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <p className="font-mono text-xs text-ng-orange font-bold uppercase tracking-widest mb-3">Supervisor</p>
            <h3 className="font-display font-medium text-2xl md:text-3xl mb-1">Majid Hussain</h3>
            <p className="text-ng-secondary text-base">Lecturer, Department of CS&IT</p>
          </div>
          
          <div className="w-24 h-px bg-ng-border relative z-10" />
          
          <div className="relative z-10 flex flex-col items-center">
            <p className="font-mono text-xs text-ng-muted font-bold uppercase tracking-widest mb-3">Affiliation</p>
            <p className="text-ng-secondary text-base md:text-lg leading-relaxed max-w-lg">Department of Computer Science and Information Technology</p>
          </div>
        </div>
      </section>

      <CTABand />
    </MarketingShell>
  );
}
