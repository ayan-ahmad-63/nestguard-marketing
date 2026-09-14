"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import CTABand from "@/components/marketing/CTABand";
import { Icon, icons, PrimaryBtn, SecondaryBtn } from "@/components/marketing/shared";
import { getLoginUrl } from "@/lib/env";

/* ──────────────────────────────────────────────────────────────
   NestGuard — Landing Page (Convoa / ChatQuartz Aesthetic)
   Hyper-modern, glowing, massive typography, bento grids.
   ────────────────────────────────────────────────────────────── */

export default function Landing() {
  const loginUrl = getLoginUrl();

  return (
    <MarketingShell>
      {/* ── Inline Animations ───────────────────────────── */}
      <style>{`
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          animation: text-gradient 5s ease infinite;
          background-size: 200% auto;
        }
        @keyframes grid-pan {
          0% { background-position: 0px 0px; }
          100% { background-position: 0px 32px; }
        }
        .animate-grid-pan {
          animation: grid-pan 9s linear infinite;
        }
      `}</style>

        {/* Hero & Dashboard Wrapper (Constrains Canvas) */}
        <div className="relative pb-20">
          
          {/* Minimalist Canvas Background */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 95%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 95%)'
            }} 
          >
            {/* Ultra-subtle dotted grid */}
            <div className="absolute inset-0 animate-grid-pan"
                 style={{ 
                   backgroundImage: 'radial-gradient(var(--color-ng-muted) 1.5px, transparent 1.5px)',
                   backgroundSize: '32px 32px', 
                   opacity: 0.4
                 }} 
            />
          </div>

        {/* ── 2. Hero Section ─────────────────────────────── */}
        <section className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 text-center flex flex-col items-center pt-40 md:pt-52">
          
          <div className="relative w-full flex flex-col items-center">
            {/* Radial Blur Behind Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[1200px] h-[150%] pointer-events-none z-[-1]"
                 style={{ 
                   backdropFilter: 'blur(8px)', 
                   WebkitBackdropFilter: 'blur(8px)',
                   maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)',
                   WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)'
                 }} />

            <div className="inline-flex items-center gap-2.5 rounded-full border border-ng-border px-4 py-1.5 mb-8 bg-ng-elevated backdrop-blur-md cursor-pointer hover:bg-ng-panel transition-colors shadow-sm relative z-10">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--color-ng-green)", boxShadow: "0 0 10px var(--color-ng-green)" }} />
              <span className="font-mono text-[12px] font-medium tracking-wide text-ng-text">NestGuard OS · v0.1</span>
            </div>
            
            <h1 className="font-display font-medium leading-[1.05] tracking-tight text-[40px] sm:text-[56px] md:text-[72px] max-w-4xl relative z-10">
              Hostel security <br />
              that actually knows <br />
              <span 
                className="text-transparent bg-clip-text animate-text-gradient" 
                style={{ backgroundImage: "linear-gradient(90deg, var(--color-ng-orange), #FFB067, var(--color-ng-orange-deep), var(--color-ng-orange))" }}
              >
                who’s inside
              </span>.
            </h1>
            
            <p className="mt-8 text-[16px] md:text-[20px] leading-relaxed text-ng-secondary max-w-2xl font-light relative z-10">
              Replace archaic sign-in registers with cryptographic biometric authentication. 
              Real-time monitoring, AI anomaly detection, and zero friction.
            </p>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Cross-domain navigation: plain anchor, not next/link */}
            <div className="w-full sm:w-auto"><PrimaryBtn href={loginUrl} size="lg">Deploy NestGuard</PrimaryBtn></div>
            <div className="w-full sm:w-auto"><SecondaryBtn onClick={() => document.getElementById("platform")?.scrollIntoView({behavior: "smooth"})}>Explore Platform</SecondaryBtn></div>
          </div>
        </section>

        {/* ── 3. 3D Floating Dashboard Preview ────────────── */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 mt-20 md:mt-32 mb-32" style={{ perspective: "1200px" }}>
          <div 
            className="w-full rounded-2xl border border-ng-border/50 overflow-hidden relative"
            style={{ 
              background: "var(--ng-glass)", 
              boxShadow: "var(--ng-frame-shadow)",
              transform: "rotateX(6deg) scale(0.98)",
              transformOrigin: "top center",
              transition: "transform 0.5s ease"
            }}
          >
            {/* Glossy overlay and Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ng-bg to-transparent z-30 pointer-events-none" />
            
            {/* Mac-like Window Chrome */}
            <div className="h-12 border-b border-ng-border bg-ng-panel flex items-center px-4 gap-2 relative z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 h-6 rounded-md bg-white/5 border border-white/5 px-4 flex items-center">
                <span className="font-mono text-[11px] text-ng-muted">app.nestguard.live / console</span>
              </div>
            </div>

            {/* Fake Dashboard Content */}
            <div className="p-6 md:p-10 grid md:grid-cols-[1fr_300px] gap-6 bg-ng-bg">
              {/* Left Column Feed */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-medium text-lg">Real-Time Access Stream</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="relative flex h-2 w-2 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <span className="font-mono text-[10px] leading-none text-green-500 font-bold mt-[1px]">LIVE NETWORK</span>
                  </div>
                </div>
                {[
                  { n: "Rahul Sharma", r: "BSE-2022-041", g: "Main Gate", s: "Verified", c: "var(--color-ng-green)" },
                  { n: "Priya Kapoor", r: "BSE-2022-119", g: "Block A", s: "Verified", c: "var(--color-ng-green)" },
                  { n: "UNKNOWN USER", r: "N/A", g: "Service Entry", s: "REJECTED", c: "var(--color-ng-red)" },
                  { n: "Arun Mehta", r: "BSE-2021-088", g: "Block B", s: "Verified", c: "var(--color-ng-green)" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-ng-border bg-ng-elevated">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border flex items-center justify-center font-display font-bold text-sm" style={{ background: `${row.c}15`, borderColor: row.c, color: row.c }}>
                        {row.n.charAt(0)}
                      </div>
                      <div>
                        <div className="font-display font-medium text-sm">{row.n}</div>
                        <div className="font-mono text-[11px] text-ng-muted">{row.r}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs text-ng-secondary">{row.g}</div>
                      <div className="font-mono text-[10px] font-bold mt-1" style={{ color: row.c }}>{row.s}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Right Column Stats */}
              <div className="flex flex-col gap-6">
                <div className="rounded-xl border border-ng-border p-5 bg-ng-elevated relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ng-orange/20 blur-3xl rounded-full" />
                  <div className="font-mono text-[10px] text-ng-orange font-bold mb-4">AI ANOMALY ENGINE</div>
                  <div className="font-display font-medium text-3xl mb-1">1 Critical</div>
                  <div className="font-mono text-xs text-ng-secondary">Service Entry Breach Attempt</div>
                </div>
                <div className="rounded-xl border border-ng-border p-5 bg-ng-elevated">
                  <div className="font-mono text-[10px] text-ng-muted font-bold mb-4">CAMPUS OCCUPANCY</div>
                  <div className="font-display font-medium text-3xl mb-1">214<span className="text-lg text-ng-secondary">/248</span></div>
                  <div className="w-full h-1.5 bg-ng-border rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-ng-blue rounded-full w-[86%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div> {/* End Hero & Dashboard Wrapper */}

        {/* ── 3.5. How It Works ───────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="font-display font-medium text-[36px] md:text-[48px] tracking-tight">How it works</h2>
            <p className="text-ng-secondary mt-4 text-lg max-w-2xl mx-auto">From scan to secured — in under a second.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: icons.finger, title: "Scan", desc: "Resident places a finger on the optical biometric reader mounted at the gate terminal." },
              { step: "02", icon: icons.brain, title: "Verify", desc: "NestGuard OS matches the fingerprint against the enrolled database and runs an anomaly check in real time." },
              { step: "03", icon: icons.check, title: "Grant", desc: "Access is granted or denied instantly. The event is permanently logged and visible to wardens across the network." },
            ].map((item) => (
              <div key={item.step} className="ng-card rounded-3xl border border-ng-border p-8 bg-ng-panel flex flex-col items-start gap-4 group">
                <div className="font-mono text-[11px] text-ng-orange font-bold tracking-widest">{item.step}</div>
                <div className="w-10 h-10 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center" style={{ color: "#FF6B00" }}>
                  <Icon path={item.icon} size={20} />
                </div>
                <h3 className="font-display font-medium text-xl">{item.title}</h3>
                <p className="text-ng-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Bento Box Features Grid ───────────────────── */}
        <section id="platform" className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="font-display font-medium text-[36px] md:text-[48px] tracking-tight">The ultimate security primitive.</h2>
            <p className="text-ng-secondary mt-4 text-lg max-w-2xl mx-auto">Engineered from the ground up to replace outdated hostel ledgers with biometric identity verification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Huge AI Card */}
            <div className="ng-card rounded-3xl border border-ng-border p-8 bg-ng-panel relative overflow-hidden md:col-span-2 md:row-span-2 flex flex-col justify-between group">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-ng-orange/20 blur-[80px] rounded-full group-hover:bg-ng-orange/30 group-hover:scale-110 transition-all duration-700" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-6" style={{ color: "#FF6B00" }}>
                  <Icon path={icons.brain} size={32} />
                </div>
                <h3 className="font-display font-medium text-3xl mb-3">Predictive Anomaly AI</h3>
                <p className="text-ng-secondary text-lg leading-relaxed max-w-md">Our behavioral engine learns the baseline habits of every student. Late-night excursions, tailgating, and proxy credential sharing are instantly flagged with confidence scores.</p>
              </div>
              {/* Persistent example flag + animated toast */}
              <div className="mt-6 flex flex-col gap-3 relative z-10">
                <div className="w-full rounded-xl border border-ng-border/50 bg-ng-elevated/60 p-3 flex items-center gap-3">
                  <div className="font-mono text-[10px] text-ng-muted whitespace-nowrap">Last flagged</div>
                  <div className="font-display text-sm font-medium text-ng-text">Suresh Kumar</div>
                  <div className="ml-auto font-mono text-[10px] text-ng-orange">3hrs past baseline</div>
                </div>
                <div className="w-full rounded-2xl border border-ng-border bg-ng-elevated p-4 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center text-red-500"><Icon path={icons.alert} size={20} /></div>
                   <div>
                     <div className="font-display font-medium text-sm">Deviation Detected</div>
                     <div className="font-mono text-[11px] text-ng-muted">Suresh Kumar · Entry 3hrs past baseline</div>
                   </div>
                </div>
              </div>
            </div>

            {/* Zero Trust */}
            <div className="ng-card rounded-3xl border border-ng-border p-8 bg-ng-panel md:col-span-2 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute -bottom-16 -right-12 text-ng-text opacity-10 group-hover:opacity-20 transition-all duration-700 transform group-hover:scale-105 z-0 pointer-events-none">
                <Icon path={icons.finger} size={280} strokeWidth={0.5} />
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-4" style={{ color: "#FF6B00" }}>
                  <Icon path={icons.scan} size={20} />
                </div>
                <h3 className="font-display font-medium text-2xl mb-2">Zero Trust Biometrics</h3>
                <p className="text-ng-secondary max-w-[85%]">Cards can be stolen. Registers can be forged. NestGuard anchors access strictly to physical identity through optical fingerprint verification.</p>
              </div>
              <div className="font-mono text-xs text-ng-orange font-bold uppercase tracking-widest relative z-10">End-to-End Encrypted</div>
            </div>

            {/* Live Telemetry */}
            <div className="ng-card rounded-3xl border border-ng-border p-8 bg-ng-panel flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-4" style={{ color: "#FF6B00" }}>
                  <Icon path={icons.bolt} size={20} />
                </div>
                <h3 className="font-display font-medium text-xl mb-2">Sub-second Latency</h3>
                <p className="text-ng-secondary text-sm">Verification happens on the edge. Wardens see the log update globally within 400ms.</p>
              </div>
              <div className="mt-4 font-display font-medium text-4xl text-ng-text/20 tracking-tight">~400<span className="text-lg">ms</span></div>
            </div>

            {/* Immutable Logs */}
            <div className="ng-card rounded-3xl border border-ng-border p-8 bg-ng-panel flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ng-elevated border border-ng-border flex items-center justify-center mb-4" style={{ color: "#FF6B00" }}>
                  <Icon path={icons.lock} size={20} />
                </div>
                <h3 className="font-display font-medium text-xl mb-2">Immutable Audit</h3>
                <p className="text-ng-secondary text-sm">Every access event is permanently logged and cannot be edited or deleted after the fact. Tamper-proof history.</p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Icon path={icons.shield} size={16} />
                <span className="font-mono text-[10px] text-ng-muted uppercase tracking-widest">Write-once ledger</span>
              </div>
            </div>

          </div>
        </section>

      <CTABand />
    </MarketingShell>
  );
}
