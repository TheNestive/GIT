import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { PageIntro } from "@/components/sections/page-intro";
import { ProcessSection } from "@/components/sections/process-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Nova Atelier approaches strategy, design, and digital execution for premium brands.",
};

export default function AboutPage() {
  return (
    <div className="space-y-6 pb-12">
      <PageIntro
        eyebrow="About"
        title="A calm, exacting studio built to elevate ambitious brands."
        description="Nova Atelier brings brand clarity, polished execution, and a premium digital point of view to businesses preparing for their next stage of growth."
      />

      <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Perspective"
              title="We design websites as strategic environments, not decoration."
              description="Every page is shaped to communicate authority, reduce friction, and create a consistent experience across brand, product, and commercial touchpoints."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
              <p>
                We believe premium brands need more than a pleasant interface. They need a clear narrative, a visual system with restraint, and a structure that helps people understand value quickly.
              </p>
              <p>
                Nova Atelier combines positioning, UX thinking, refined art direction, and practical engineering so the final site is as dependable as it is distinctive.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="The standards behind every engagement."
              description="The starter is organized the same way a real client project would be: intentional structure, clear ownership, and room to scale."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <article className="h-full rounded-[1.75rem] border border-line bg-surface-strong p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent-strong">{value.title}</p>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <CtaSection />
    </div>
  );
}
