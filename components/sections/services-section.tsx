import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/site";

export function ServicesSection() {
  return (
    <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="A concise service offer with enough depth for a credible launch."
            description="Use these blocks as a foundation for studio services, consulting offers, internal capabilities, or a broader corporate presentation."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="group h-full rounded-[1.75rem] border border-line bg-surface-strong p-6 transition-colors hover:border-accent/40 hover:bg-white/80 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                    {service.label}
                  </span>
                  <span className="text-xl text-accent-strong transition-transform group-hover:translate-x-1">+</span>
                </div>
                <h3 className="mt-6 font-display text-3xl text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="flex justify-start">
            <ButtonLink href="/services">View Full Service Detail</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
