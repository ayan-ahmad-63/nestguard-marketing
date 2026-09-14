"use client";

export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 text-center flex flex-col items-center pt-40 md:pt-52 pb-20">
      <h1 className="font-display font-medium leading-[1.05] tracking-tight text-[40px] sm:text-[56px] md:text-[72px] max-w-4xl">
        {title}
      </h1>
      <p className="mt-8 text-[16px] md:text-[20px] leading-relaxed text-ng-secondary max-w-2xl font-light">
        {subtitle}
      </p>
    </section>
  );
}
