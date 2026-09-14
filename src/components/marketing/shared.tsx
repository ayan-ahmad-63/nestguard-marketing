"use client";
import React from "react";

/* Tabler-style outline icons — inherit `currentColor` */
export function Icon({ path, size = 24, strokeWidth = 1.6 }: { path: React.ReactNode; size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );
}

export const icons = {
  finger: <><path d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="2.5" /></>,
  bolt: <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />,
  chart: <><path d="M4 4v16h16" /><path d="M8 15v-3" /><path d="M12 15V8" /><path d="M16 15v-6" /></>,
  scan: <><path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2" /><path d="M8 12h8" /></>,
  check: <><path d="m5 13 4 4L19 7" /><circle cx="12" cy="12" r="9" opacity="0.35" /></>,
  alert: <><path d="M12 9v4M12 17h.01" /><path d="M10.3 4 3 17a2 2 0 0 0 1.7 3h14.6a2 2 0 0 0 1.7-3L14.7 4a2 2 0 0 0-3.4 0Z" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  brain: <><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M7 5H3" /><path d="M19 17v4" /><path d="M21 19h-4" /></>,
  cpu: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /><rect x="9" y="9" width="6" height="6" /></>,
  server: <><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><path d="M6 6h.01M6 18h.01" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="m22 2-11 11" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  gate: <><path d="M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18" /><path d="M14 10h.01" /><path d="M2 22h20" /></>,
  relay: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></>,
  wifi: <><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" /></>,
};

/* Shared rotating-border CTA button */
export function PrimaryBtn({ onClick, href, children, size = "md" }: { onClick?: () => void; href?: string; children: React.ReactNode; size?: "md" | "lg" }) {
  const pad = size === "lg" ? "px-8 py-4 text-[16px]" : "px-5 py-2 text-[14px]";
  const inner = (
    <div className="relative inline-flex group rounded-full p-[1.5px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]">
      <div
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{ background: "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, var(--color-ng-orange) 100%)" }}
      />
      <span className={`relative flex items-center justify-center w-full h-full font-display font-semibold text-ng-text rounded-full ${pad} bg-ng-bg`}
        style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1)" }}>
        {children}
      </span>
    </div>
  );
  if (href) {
    return <a href={href}>{inner}</a>;
  }
  return <button onClick={onClick} className="cursor-pointer">{inner}</button>;
}

export function SecondaryBtn({ onClick, href, children }: { onClick?: () => void; href?: string; children: React.ReactNode }) {
  const inner = (
    <span
      className="font-display font-semibold text-ng-text rounded-full px-8 py-4 text-[16px] transition-all duration-300 hover:bg-white/5 active:scale-[0.98] cursor-pointer border border-ng-border inline-flex items-center justify-center"
      style={{ background: "var(--ng-glass)", backdropFilter: "blur(12px)" }}
    >
      {children}
    </span>
  );
  if (href) return <a href={href}>{inner}</a>;
  return <button onClick={onClick} className="cursor-pointer">{inner}</button>;
}
