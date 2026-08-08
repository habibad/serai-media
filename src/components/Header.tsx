"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/services";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between transition-all duration-500",
          scrolled ? "py-4" : "py-6 md:py-8",
        )}
      >
        <a
          href="#top"
          aria-label="Serai Media — back to top"
          className="flex items-center"
        >
          <Image
            src="/images/wordmark-dark.png"
            alt="Serai Media"
            width={1752}
            height={795}
            priority
            className={cn(
              "hidden w-auto transition-all duration-500 sm:block",
              scrolled ? "h-6" : "h-7 md:h-8",
            )}
          />
          <Image
            src="/images/monogram-dark.png"
            alt="Serai Media"
            width={682}
            height={983}
            priority
            className="h-8 w-auto sm:hidden"
          />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className="group relative inline-block py-1 text-[0.8125rem] tracking-[0.06em] text-graphite transition-colors duration-300 hover:text-ink"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-500",
                        isActive
                          ? "scale-x-100 bg-saffron"
                          : "scale-x-0 bg-ink group-hover:scale-x-100",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="-mr-2 inline-flex size-11 items-center justify-center text-ink md:hidden"
        >
          <Menu strokeWidth={1.25} className="size-5" />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-ink text-paper transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="shell flex items-center justify-between py-6">
          <span className="eyebrow text-ash">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="-mr-2 inline-flex size-11 items-center justify-center text-paper"
          >
            <X strokeWidth={1.25} className="size-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="shell mt-10">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-paper/12">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display block py-6 text-[2.25rem] text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm leading-relaxed text-ash">
            hello@seraimedia.com
            <br />
            Austin, TX
          </p>
        </nav>
      </div>
    </header>
  );
}
