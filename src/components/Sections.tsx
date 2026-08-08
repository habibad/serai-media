import { Eyebrow, Reveal } from "./primitives";

export function PositioningSection() {
  return (
    <section className="border-b border-border bg-ink py-28 text-paper md:py-44">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-paper/30" />
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-saffron"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="display mt-14 max-w-5xl text-[2.25rem] sm:text-5xl lg:text-[4.5rem]">
            We work with a small number of brands at a time.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-14 max-w-2xl text-[1.0625rem] leading-[1.85] text-ash md:mt-20">
            If your product already earns loyalty and your marketing
            hasn&rsquo;t caught up — we should talk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section id="proof" className="border-b border-border py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Proof</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <h2 className="display text-[2.25rem] sm:text-5xl lg:text-[4rem]">
                Good work should speak for itself.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 max-w-xl text-[1.0625rem] leading-[1.85] text-graphite">
                Selected work is being prepared with our clients. Case
                studies will be published here as each brand signs off on
                what we share.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-border md:mt-24 md:grid-cols-3">
          {["TLJ", "Shiva Jewelers", "Austin, TX"].map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="flex h-full flex-col justify-between gap-16 border-b border-border py-10 md:border-r md:border-b-0 md:px-8 md:py-14 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span
                  aria-hidden="true"
                  className="font-sans text-xs tracking-[0.16em] text-ash"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="display text-[1.5rem] sm:text-[1.75rem]">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-ink py-28 text-paper md:py-44">
      <div className="shell">
        <Reveal>
          <span
            aria-hidden="true"
            className="block size-1.5 rounded-full bg-saffron"
          />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-12 text-[3rem] sm:text-7xl lg:text-[7rem]">
            Let&rsquo;s close the gap.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-16 md:mt-20">
            <a
              href="#apply"
              className="group inline-flex items-center gap-3 border border-paper bg-paper px-7 py-4 text-sm tracking-wide text-ink transition-colors duration-300 hover:bg-transparent hover:text-paper"
            >
              Apply to Work With Us
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
