"use client";

import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-revealed={revealed}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

/** The three saffron letters — used sparingly, exactly where the copy calls for it. */
export function Van({ rest }: { rest: string }) {
  return (
    <span>
      <span className="text-saffron">Van</span>
      {rest}
    </span>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function ApplyLink({
  children = "Apply to Work With Us",
  variant = "solid",
  className,
}: {
  children?: ReactNode;
  variant?: "solid" | "quiet" | "inverse";
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 text-sm tracking-wide transition-colors duration-300";

  const styles = {
    solid:
      "border border-ink bg-ink px-7 py-4 text-paper hover:bg-graphite hover:border-graphite",
    inverse:
      "border border-paper bg-paper px-7 py-4 text-ink hover:bg-transparent hover:text-paper",
    quiet: "border-b border-ash pb-1 text-ink hover:border-ink",
  } as const;

  return (
    <a href="#apply" className={cn(base, styles[variant], className)}>
      {children}
      {variant !== "quiet" && (
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-saffron transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
