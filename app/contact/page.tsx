import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nova Atelier to discuss positioning, website design, and launch support for your next digital presence.",
};

export default function ContactPage() {
  return (
    <div className="space-y-6 pb-12">
      <PageIntro
        eyebrow="Contact"
        title="Start with clarity."
        description="Share your stage, objectives, and timeline. This starter includes a production-friendly contact flow that can later be connected to your CRM, inbox, or email provider."
      />
      <ContactSection />
      <CtaSection />
    </div>
  );
}
