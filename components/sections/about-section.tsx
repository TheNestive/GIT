import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/content/site";

export function AboutSection() {
  return (
    <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Structured like a real client build, not a disposable demo."
            description="The starter gives you a premium visual baseline and a maintainable architecture for evolving the site into a real company presence."
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={0.08}>
            <article className="rounded-[1.75rem] border border-line bg-surface-strong p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-strong">Why It Works</p>
              <p className="mt-4 max-w-2xl font-display text-3xl leading-tight text-balance text-foreground sm:text-4xl">
                Premium companies need more than a homepage. They need a coherent digital system.
              </p>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                This setup uses reusable sections, scalable content constants, responsive layouts, metadata, legal structure, and motion that adds polish without noise.
              </p>
              <div className="mt-8">
                <ButtonLink href="/about">Read the Approach</ButtonLink>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={0.12 + index * 0.08}>
                <article className="rounded-[1.75rem] border border-line bg-surface-strong p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-strong">{value.title}</p>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
