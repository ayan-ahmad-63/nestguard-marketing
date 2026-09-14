"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon, icons } from "./shared";
import { getLoginUrl } from "@/lib/env";

const NAV_LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "Security", href: "/security" },
  { label: "Hardware", href: "/hardware" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const loginUrl = getLoginUrl();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
      <nav
        className={`h-16 rounded-full border px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "border-ng-border" : "border-transparent"}`}
        style={
          scrolled
            ? { background: "var(--ng-glass)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", boxShadow: "var(--ng-shadow-lg)" }
            : { background: "transparent", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "none" }
        }
      >
        <Link href="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
          <Image src="/logo-row.png" alt="NestGuard" width={892} height={264} className="h-9 w-auto shrink-0 object-contain" priority />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-[14px] font-medium transition-colors ${pathname === link.href ? "text-ng-text" : "text-ng-secondary hover:text-ng-text"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center">
            {/* Cross-domain link: next/link would not work correctly here */}
            <a href={loginUrl} className="text-[14px] font-semibold text-ng-secondary hover:text-ng-text transition-colors mr-5">
              Log in
            </a>
          </div>
          <button
            className="md:hidden w-8 h-8 grid place-items-center rounded-full text-ng-secondary cursor-pointer hover:bg-white/10"
            onClick={() => setMenu((m) => !m)}
          >
            <Icon path={<><path d="M4 7h16M4 12h16M4 17h16" /></>} size={20} />
          </button>
        </div>
      </nav>

      {menu && (
        <div
          className="md:hidden mt-3 rounded-3xl border border-ng-border p-5 flex flex-col gap-4 shadow-2xl"
          style={{ background: "var(--ng-panel)", backdropFilter: "blur(24px)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="font-body text-[14px] font-medium text-ng-secondary hover:text-ng-text transition-colors" onClick={() => setMenu(false)}>
              {link.label}
            </Link>
          ))}
          <div className="h-px w-full bg-ng-border my-2" />
          <a href={loginUrl} className="font-display font-semibold text-ng-text text-[14px]" onClick={() => setMenu(false)}>
            Log in to Console
          </a>
        </div>
      )}
    </header>
  );
}
