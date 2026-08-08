import { ApplyLink, Reveal } from "./primitives";

export function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-border pt-36 pb-20 md:pt-52 md:pb-28"
    >
      <div className="shell">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-8">
            <Reveal as="div" className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-saffron"
              />
              <p className="eyebrow">Austin, Texas</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-10 text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-[5.2rem] xl:text-[5.75rem]">
                Your product is already excellent.
                <span className="mt-3 block text-steel">
                  Your marketing hasn&rsquo;t caught up.
                </span>
              </h1>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
            <Reveal delay={160}>
              <p className="max-w-md text-[1.0625rem] leading-[1.8] text-graphite lg:border-l lg:border-border lg:pl-8">
                Serai Media is a social, brand, and growth partner for
                premium retail, restaurant, and wellness brands in Austin and
                beyond.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={240}>
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-24">
            <ApplyLink />
            <a
              href="#services"
              className="group inline-flex items-center gap-2 border-b border-ash pb-1 text-sm text-ink transition-colors duration-300 hover:border-ink"
            >
              See What We Do
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

export function ProofStrip() {
  return (
    <div className="border-b border-border">
      <div className="shell py-6">
        <p className="text-[0.8125rem] tracking-[0.14em] text-steel uppercase">
          TLJ <span className="text-ash">&middot;</span> Shiva Jewelers{" "}
          <span className="text-ash">&middot;</span> Austin, TX
        </p>
      </div>
    </div>
  );
}
