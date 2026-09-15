"use client";

import HeroCanvas from "./HeroCanvas";

export default function PageHero({ 
  title, 
  subtitle,
  eyebrow,
  variant = "default",
  align = "center",
  showCanvas = true
}: { 
  title: React.ReactNode; 
  subtitle: React.ReactNode;
  eyebrow?: string;
  variant?: "platform" | "security" | "hardware" | "default";
  align?: "left" | "center";
  showCanvas?: boolean;
}) {
  return (
    <section className={`relative z-10 w-full flex flex-col items-center justify-center min-h-screen pt-20 pb-20`}>
      {showCanvas && <HeroCanvas variant={variant} align={align} />}
      
      <div className={`relative w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
        {/* Radial Blur Behind Text (Only if canvas is shown) */}
        {showCanvas && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[1200px] h-[150%] pointer-events-none z-[-1]"
               style={{ 
                 backdropFilter: 'blur(8px)', 
                 WebkitBackdropFilter: 'blur(8px)',
                 maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)',
                 WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)'
               }} />
        )}

        {eyebrow && (
          <span className="font-display font-medium text-[16px] md:text-[18px] text-ng-text mb-4 relative z-10">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display font-medium leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl max-w-4xl relative z-10">
          {title}
        </h1>
        <div className={`mt-6 text-[16px] md:text-[18px] leading-relaxed text-ng-secondary max-w-2xl font-light relative z-10 ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </div>
      </div>
    </section>
  );
}
