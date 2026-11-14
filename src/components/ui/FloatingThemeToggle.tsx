"use client";

import { useEffect, useState } from "react";

export default function FloatingThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isLight = document.documentElement.classList.contains("light");
    setIsDark(!isLight);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("ng-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("ng-theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={`group relative inline-flex h-[28px] w-[56px] shrink-0 cursor-pointer items-center rounded-full border border-ng-border bg-ng-panel/90 p-[2px] backdrop-blur-md transition-all duration-300 hover:border-ng-orange/50 hover:shadow-[0_0_12px_rgba(255,107,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ng-orange focus-visible:ring-offset-2 focus-visible:ring-offset-ng-bg ${className}`}
      style={{
        boxShadow: isDark
          ? "inset 0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.2)"
          : "inset 0 1px 2px rgba(20, 18, 31, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Background Track Icons */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-[6px]">
        {/* Inactive Moon on Left (shows when in light mode) */}
        <span
          className={`flex h-4 w-4 items-center justify-center transition-all duration-300 ${
            isDark ? "opacity-0 scale-75" : "text-ng-muted opacity-70 scale-100 group-hover:text-ng-text"
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>

        {/* Inactive Sun on Right (shows when in dark mode) */}
        <span
          className={`flex h-4 w-4 items-center justify-center transition-all duration-300 ${
            isDark ? "text-ng-muted/70 opacity-70 scale-100 group-hover:text-ng-orange/80" : "opacity-0 scale-75"
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        </span>
      </span>

      {/* Sliding Knob */}
      <span
        className={`relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full text-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105 active:scale-95 ${
          mounted && !isDark ? "translate-x-[28px]" : "translate-x-0"
        }`}
        style={{
          background: !isDark
            ? "linear-gradient(135deg, #FFA000 0%, var(--color-ng-orange) 100%)"
            : "linear-gradient(135deg, var(--color-ng-orange) 0%, var(--color-ng-orange-deep) 100%)",
          boxShadow: !isDark
            ? "0 2px 6px rgba(255, 160, 0, 0.45), 0 0 10px rgba(255, 107, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)"
            : "0 2px 6px rgba(0, 0, 0, 0.4), 0 0 10px rgba(255, 107, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
        }}
      >
        {isDark ? (
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="transition-transform duration-300 -rotate-12"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 rotate-0"
          >
            <circle cx="12" cy="12" r="3.5" fill="currentColor" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </span>
    </button>
  );
}
