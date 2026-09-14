"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingThemeToggle from "@/components/ui/FloatingThemeToggle";

export default function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-ng-text font-body relative overflow-x-hidden" style={{ background: "var(--ng-bg)" }}>
      {/* Ambient orbs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[600px] rounded-full pointer-events-none opacity-40 blur-[140px] z-0"
           style={{ background: "radial-gradient(ellipse at center, var(--color-ng-orange), transparent 70%)" }} />
      <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[500px] rounded-full pointer-events-none opacity-30 blur-[120px] z-0"
           style={{ background: "radial-gradient(ellipse at center, var(--color-ng-blue), transparent 70%)" }} />

      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
      <FloatingThemeToggle />
    </div>
  );
}
