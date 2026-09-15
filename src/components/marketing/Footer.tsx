"use client";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="border-t border-ng-border bg-ng-panel/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid md:grid-cols-5 gap-10">
        {/* Logo + tagline */}
        <div className="md:col-span-2">
          <Image src="/logo-row.png" alt="NestGuard" width={892} height={264} className="h-9 w-auto shrink-0 object-contain" />
          <p className="mt-6 text-sm leading-relaxed text-ng-secondary max-w-xs">
            Next-generation biometric access control for institutional security. Replace guesswork with verifiable, tamper-proof records.
          </p>
        </div>

        {/* Platform */}
        <div>
          <p className="font-display font-medium text-sm text-ng-text mb-5">Platform</p>
          <ul className="flex flex-col gap-3">
            <li><Link href="/security" className="text-sm text-ng-secondary hover:text-ng-text transition-colors">Security</Link></li>
            <li><Link href="/hardware" className="text-sm text-ng-secondary hover:text-ng-text transition-colors">Hardware</Link></li>
            <li><Link href="/how-it-works" className="text-sm text-ng-secondary hover:text-ng-text transition-colors">How It Works</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="font-display font-medium text-sm text-ng-text mb-5">Company</p>
          <ul className="flex flex-col gap-3">
            <li><Link href="/about" className="text-sm text-ng-secondary hover:text-ng-text transition-colors">About</Link></li>
            <li><Link href="/about#team" className="text-sm text-ng-secondary hover:text-ng-text transition-colors">Team</Link></li>
            <li><Link href="/contact" className="text-sm text-ng-secondary hover:text-ng-text transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="font-display font-medium text-sm text-ng-text mb-5">Resources</p>
          <ul className="flex flex-col gap-3">
            <li><Link href="/docs" className="text-sm text-ng-secondary hover:text-ng-text transition-colors">Documentation</Link></li>
            <li><Link href="/status" className="text-sm text-ng-secondary hover:text-ng-text transition-colors">System Status</Link></li>

          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ng-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-ng-muted">© 2026 NestGuard</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ng-orange animate-pulse" />
            <p className="font-mono text-[11px] text-ng-muted uppercase tracking-widest">In Development</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
