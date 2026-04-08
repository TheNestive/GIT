import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { heroStats } from "@/content/site";

export function HeroSection() {
  return (
    <section className="section-shell rounded-[2.25rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-8">
          <Reveal>
            <span className="eyebrow">Premium Corporate Presence</span>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="max-w-4xl space-y-6">
              <h1 className="font-display text-5xl leading-[0.92] text-balance text-foreground sm:text-6xl lg:text-[6.5rem]">
                Digital presence designed with luxury restraint and startup clarity.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Nova Atelier is a production-ready website starter for future-facing companies that need authority, polish, and a clean technical foundation from day one.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">Discuss Your Launch</ButtonLink>
              <ButtonLink
                href="/services"
                className="border border-line bg-transparent text-foreground hover:border-accent-strong hover:bg-accent-soft"
              >
                Explore Services
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.35))] p-6 shadow-soft sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-line bg-white/55 p-5">
                  <p className="font-display text-4xl text-foreground sm:text-5xl">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-line bg-foreground px-5 py-6 text-background">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-background/60">Starter Focus</p>
              <p className="mt-3 font-display text-3xl leading-none sm:text-4xl">
                Beautiful enough to launch, simple enough to maintain.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
