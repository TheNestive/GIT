import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/site";

export function ProcessSection() {
  return (
    <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Simple delivery steps that make the starter practical."
            description="The structure stays light, but it is organized to support an actual project lifecycle from positioning to launch."
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <article className="rounded-[1.75rem] border border-line bg-surface-strong p-6">
                <p className="font-display text-5xl leading-none text-accent-strong">{step.step}</p>
                <h3 className="mt-6 font-display text-3xl text-foreground">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
