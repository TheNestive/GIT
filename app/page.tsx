import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Home",
  description:
    "A minimal clean starter homepage for Nova Atelier.",
};

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-133px)] max-w-6xl items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">Minimal Starter</p>
        <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Nova Atelier
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          A clean Next.js foundation with one homepage, ready to be rebuilt step by step.
        </p>
        <div className="mt-8 flex justify-center">
          <Button>Start Building</Button>
        </div>
      </div>
    </section>
  );
}
