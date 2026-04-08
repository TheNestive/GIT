"use client";

import Link, { type LinkProps } from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type ButtonLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export function ButtonLink({ children, className, ...props }: ButtonLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        {...props}
        className={cn(
          "inline-flex items-center gap-3 rounded-full border border-transparent bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-strong",
          className,
        )}
      >
        <span>{children}</span>
        <motion.span
          aria-hidden="true"
          initial={false}
          className="inline-flex"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          -&gt;
        </motion.span>
      </Link>
    </motion.div>
  );
}
