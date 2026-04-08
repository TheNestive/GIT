import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { PageIntro } from "@/components/sections/page-intro";
import { ServicesSection } from "@/components/sections/services-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Nova Atelier services spanning strategy, website design, content systems, and launch preparation.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-6 pb-12">
      <PageIntro
        eyebrow="Services"
        title="A focused service stack for brands that need premium digital execution."
        description="Use the structure below as a strong starting point for a real studio, consultancy, or company website. The content is neutral and ready to adapt."
      />

      <ServicesSection />

      <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <Container className="space-y-8">
          <Reveal>
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow">Delivery Model</span>
              <h2 className="font-display text-4xl leading-none text-balance text-foreground sm:text-5xl">
                Modular offers, one coherent outcome.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="rounded-[1.75rem] border border-line bg-surface-strong p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                      {service.label}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{service.longDescription}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  );
}
