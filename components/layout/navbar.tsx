"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";

import { navigation, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2, ease: "easeInOut" } },
};

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 py-4">
      <nav className="section-shell rounded-[1.75rem] px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface-strong font-display text-xl text-foreground">
              NA
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-foreground">{siteConfig.name}</p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-muted">
                Digital Presence Studio
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "bg-foreground text-background" : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full border border-line bg-surface-strong px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-line-strong hover:bg-white/70 sm:inline-flex"
            >
              Start a Conversation
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface-strong text-sm font-semibold text-foreground lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-navigation"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-4 overflow-hidden rounded-[1.5rem] border border-line bg-surface-strong p-3 lg:hidden"
            >
              <div className="grid gap-2">
                {navigation.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                        active ? "bg-foreground text-background" : "text-muted hover:bg-accent-soft hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
