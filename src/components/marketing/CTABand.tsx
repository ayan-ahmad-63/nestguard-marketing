"use client";
import { LogoMark } from "@/components/ui/Logo";
import { PrimaryBtn } from "./shared";
import { getLoginUrl } from "@/lib/env";

export default function CTABand() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-32">
      <div className="rounded-[3rem] border border-ng-border px-8 py-20 text-center relative overflow-hidden bg-ng-panel shadow-sm">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at center, var(--color-ng-blue), transparent 60%)" }} />
        <div className="relative z-10 flex flex-col items-center">
          <LogoMark size={64} />
          <h2 className="font-display font-medium text-[40px] md:text-[56px] tracking-tight mt-8 mb-4 max-w-2xl">
            Ready to secure your campus?
          </h2>
          <p className="text-ng-secondary text-lg max-w-md mb-10">
            Deploy NestGuard OS to your gateway terminals and take absolute control of hostel safety today.
          </p>
          <PrimaryBtn href={getLoginUrl()} size="lg">Log in to Console</PrimaryBtn>
        </div>
      </div>
    </section>
  );
}
