import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="rounded-[2rem] bg-foreground px-6 py-10 text-background sm:px-8 lg:px-12 lg:py-14">
      <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow text-background/70 before:bg-background/40">Next Step</span>
            <h2 className="mt-5 font-display text-4xl leading-none text-balance sm:text-5xl lg:text-[3.5rem]">
              Launch the premium foundation now, extend the business logic later.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-6">
            <p className="text-sm leading-7 text-background/70 sm:text-base">
              The stack stays intentionally simple: Next.js, Tailwind CSS, TypeScript, Framer Motion, and a small set of reusable components built for actual deployment.
            </p>
            <ButtonLink
              href="/contact"
              className="border border-white/20 bg-background text-foreground hover:bg-[#efe5d6]"
            >
              Start the Project
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
