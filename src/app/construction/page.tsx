"use client";
import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";

export default function ConstructionPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Console"
        title={
          <>
            Under <br className="hidden md:block" />
            <em className="font-serif italic font-light text-transparent bg-clip-text animate-text-gradient" style={{ backgroundImage: "linear-gradient(90deg, var(--color-ng-orange), #FFB067, var(--color-ng-orange-deep), var(--color-ng-orange))" }}>Construction.</em>
          </>
        }
        subtitle={
          <>
            We're currently building the NestGuard console. Please check back later. <br className="hidden sm:block" />
            If you need more information or want to get in touch, our team is available.
          </>
        }
        sectionLinks={[
          { label: "Contact Us", href: "/contact" }
        ]}
        showCanvas={true}
        variant="construction"
        align="center"
      />
    </MarketingShell>
  );
}
