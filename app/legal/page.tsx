import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { legalSections } from "@/content/site";

export const metadata: Metadata = {
  title: "Legal Notice & Privacy",
  description:
    "Review the placeholder legal notice and privacy information for the Nova Atelier website starter.",
};

export default function LegalPage() {
  return (
    <div className="space-y-6 pb-12">
      <PageIntro
        eyebrow="Legal"
        title="Legal notice and privacy information."
        description="This page uses neutral placeholder copy so the structure is ready for legal review and localization before launch."
      />

      <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <Container className="max-w-4xl space-y-10">
          {legalSections.map((section) => (
            <article key={section.title} className="space-y-4 border-b border-line pb-8 last:border-b-0 last:pb-0">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">{section.title}</h2>
              <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </div>
  );
}
