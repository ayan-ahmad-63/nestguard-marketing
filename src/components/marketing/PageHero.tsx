"use client";

import HeroCanvas from "./HeroCanvas";

export default function PageHero({ 
  title, 
  subtitle,
  eyebrow,
  variant = "default",
  align = "left",
  showCanvas = true,
  sectionLinks
}: { 
  title: React.ReactNode; 
  subtitle: React.ReactNode;
  eyebrow?: string;
  variant?: "platform" | "security" | "hardware" | "default";
  align?: "left" | "center";
  showCanvas?: boolean;
  sectionLinks?: { label: string; href: string }[];
}) {
  return (
    <section className={`relative z-10 w-full flex flex-col items-start justify-center min-h-screen pt-32 pb-24`}>
      {showCanvas && <HeroCanvas variant={variant} align={align} />}
      
      <div className={`relative w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-start text-left`}>
        {/* Radial Blur Behind Text (Only if canvas is shown) */}
        {showCanvas && (
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[150%] max-w-[1200px] h-[150%] pointer-events-none z-[-1]"
               style={{ 
                 backdropFilter: 'blur(8px)', 
                 WebkitBackdropFilter: 'blur(8px)',
                 maskImage: 'radial-gradient(ellipse at center left, black 20%, transparent 60%)',
                 WebkitMaskImage: 'radial-gradient(ellipse at center left, black 20%, transparent 60%)'
               }} />
        )}

        {eyebrow && (
          <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 relative z-10">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-medium leading-[1.05] tracking-tight text-[40px] sm:text-[56px] md:text-[72px] max-w-5xl relative z-10 mb-8">
          {title}
        </h1>
        <div className={`text-ng-secondary text-[16px] md:text-[20px] leading-relaxed max-w-2xl font-light relative z-10 mb-12`}>
          {subtitle}
        </div>

        {/* Section Links */}
        {sectionLinks && sectionLinks.length > 0 && (
          <div className="flex flex-wrap gap-4 relative z-10">
            {sectionLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-xs font-semibold text-white tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] group"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
