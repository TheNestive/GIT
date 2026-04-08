import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { contactDetails } from "@/content/site";

export function ContactSection() {
  return (
    <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="space-y-6">
            <div>
              <span className="eyebrow">Direct</span>
              <h2 className="mt-5 font-display text-4xl leading-none text-balance text-foreground sm:text-5xl">
                A clean contact flow with room to grow.
              </h2>
            </div>
            <p className="text-sm leading-7 text-muted sm:text-base">
              The current endpoint validates and accepts submissions locally so the website feels complete during development. Replace it later with email, CRM, or database logic when needed.
            </p>
            <div className="grid gap-4">
              {contactDetails.map((detail) => (
                <article key={detail.title} className="rounded-[1.5rem] border border-line bg-surface-strong p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">{detail.title}</p>
                  {detail.href === "#" ? (
                    <p className="mt-3 text-base text-foreground">{detail.value}</p>
                  ) : (
                    <a href={detail.href} className="mt-3 inline-flex text-base text-foreground transition-colors hover:text-accent-strong">
                      {detail.value}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
