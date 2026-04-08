import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Nova Atelier crafts premium digital experiences for future-facing brands that want clarity, elegance, and authority online.",
};

export default function HomePage() {
  return (
    <div className="space-y-6 pb-12">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </div>
  );
}
