import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
      <Container className="max-w-4xl">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 font-display text-5xl leading-[0.94] text-balance text-foreground sm:text-6xl lg:text-[5.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}
