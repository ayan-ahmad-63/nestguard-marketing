"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-ng-text font-body relative overflow-x-hidden" style={{ background: "var(--ng-bg)" }}>
      {/* Ambient orbs */}

      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
