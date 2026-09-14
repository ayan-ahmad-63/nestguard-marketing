import React from "react";
import type { Metadata } from "next";
import "@/index.css";

export const metadata: Metadata = {
  title: "NestGuard — Next-generation Hostel Security",
  description:
    "Replace archaic sign-in registers with cryptographic biometric authentication. Real-time monitoring, AI anomaly detection, and zero friction.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "NestGuard — Next-generation Hostel Security",
    description:
      "Biometric access control for university hostels. Real-time monitoring, AI anomaly detection, and permanent audit logging.",
    siteName: "NestGuard",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Inline script: apply persisted theme before first paint to prevent
          a flash of the wrong theme. Must run synchronously, before React
          hydrates. No AppProvider needed — the marketing site has no
          server-side session or alert state.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ng-theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
