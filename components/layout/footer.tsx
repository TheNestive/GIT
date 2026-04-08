import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-6">
      <div className="section-shell overflow-hidden rounded-[2rem] border-none bg-surface-dark px-6 py-10 text-white sm:px-8 lg:px-12 lg:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Nova Atelier</p>
            <h2 className="mt-4 font-display text-4xl leading-none text-balance sm:text-5xl">
              Built for a future company. Ready for real deployment.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              This starter pairs premium presentation with a clean codebase so the site can move into production without carrying prototype debt.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/45">Navigation</p>
              <div className="mt-5 grid gap-3">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/45">Contact</p>
              <div className="mt-5 grid gap-3 text-sm text-white/70">
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
                <p>{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </Container>

        <Container className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Nova Atelier. All rights reserved.</p>
          <p>Next.js, Tailwind CSS, TypeScript, Framer Motion</p>
        </Container>
      </div>
    </footer>
  );
}
