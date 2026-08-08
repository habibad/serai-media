"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { ApplyLink, Eyebrow, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-border py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>What We Do</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <h2 className="display text-[2.25rem] sm:text-5xl lg:text-[4rem]">
                How we close the gap
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="prose-editorial mt-10">
                <p>
                  You didn&rsquo;t cut corners on the product. Somewhere, a
                  competitor with a weaker offering is outranking you — on
                  Google, on Instagram, on foot traffic — simply because they
                  show up consistently and you haven&rsquo;t had the time to.
                </p>
                <p className="!text-ink">
                  That&rsquo;s the only problem we solve.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <ServiceAccordion />
        </div>
      </div>
    </section>
  );
}

function ServiceAccordion() {
  const [open, setOpen] = useState<string | null>(services[0]?.id ?? null);

  return (
    <div className="border-t border-border">
      {services.map((service, index) => {
        const isOpen = open === service.id;
        const panelId = `panel-${service.id}`;
        const buttonId = `trigger-${service.id}`;

        return (
          <Reveal key={service.id} delay={index * 60}>
            <div className="border-b border-border">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : service.id)}
                  className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 py-7 text-left md:grid-cols-[5rem_1fr_auto] md:gap-x-8 md:py-9"
                >
                  <span
                    className={cn(
                      "pt-1 font-sans text-xs tracking-[0.16em] transition-colors duration-300",
                      isOpen
                        ? "text-saffron"
                        : "text-ash group-hover:text-steel",
                    )}
                  >
                    {service.number}
                  </span>

                  <span className="block">
                    <span className="display block text-[1.5rem] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 sm:text-[2rem] lg:text-[2.5rem]">
                      {service.name}
                    </span>
                    <span className="mt-2 block max-w-xl text-sm leading-relaxed text-steel">
                      {service.promise}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="relative mt-3 block size-3.5 shrink-0"
                  >
                    <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-ink" />
                    <span
                      className={cn(
                        "absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "scale-y-0" : "scale-y-100",
                      )}
                    />
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 pb-12 md:grid-cols-[5rem_1fr] md:gap-x-8"
              >
                <div aria-hidden="true" />
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
                  <div className="lg:col-span-6">
                    <p className="text-[1.0625rem] leading-[1.85] text-graphite">
                      {service.description}
                    </p>
                    <p className="mt-8 text-sm leading-relaxed text-steel">
                      <span className="text-ink">Best for:</span>{" "}
                      {service.bestFor}
                    </p>
                    <div className="mt-8">
                      <ApplyLink variant="quiet">
                        Apply to Work With Us
                      </ApplyLink>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="eyebrow">What&rsquo;s included</p>
                    <ul className="mt-5 space-y-3">
                      {service.included.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-graphite"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-px w-3 shrink-0 bg-ash"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {service.platforms && (
                      <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-steel">
                        <span className="text-ink">
                          {service.platforms.label}:
                        </span>{" "}
                        {service.platforms.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
