import type { ReactNode } from "react";
import { Eyebrow, Reveal, Van } from "./primitives";

export function StorySection() {
  return (
    <section id="story" className="border-b border-border py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>The Story</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <h2 className="display text-[2rem] sm:text-4xl lg:text-[3.25rem]">
                Why a marketing agency is named after an old roadside inn.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 md:mt-24 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="relative flex aspect-[4/5] w-full max-w-[22rem] items-center justify-center overflow-hidden border border-border bg-gradient-to-br from-graphite to-ink sm:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(115deg,#F7F7F5_0px,#F7F7F5_1px,transparent_1px,transparent_34px)]"
                />
                <div className="relative px-8 text-center">
                  <span
                    aria-hidden="true"
                    className="mx-auto mb-4 block size-2 rounded-full bg-saffron"
                  />
                  <p className="display text-lg text-paper italic">
                    Portrait of Vandhana
                  </p>
                  <span className="mt-2 block text-[0.6875rem] tracking-[0.18em] text-steel uppercase">
                    Photography arriving soon
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute right-6 bottom-6 size-1.5 rounded-full bg-saffron"
                />
              </div>
              <figcaption className="mt-4 max-w-[22rem] text-xs leading-relaxed text-steel">
                By <Van rest="dhana Srinivasan" /> — Principal Strategist &amp;
                Founder, Serai Media
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <Reveal delay={80}>
              <p className="text-sm tracking-[0.04em] text-steel">By</p>
              <p className="display mt-2 text-3xl sm:text-4xl">
                <Van rest="dhana Srinivasan" />
              </p>
              <p className="mt-3 text-sm text-steel">
                Principal Strategist &amp; Founder, Serai Media
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 space-y-20 md:mt-32 md:space-y-28">
          <StoryBlock label="The Name">
            <p>
              A serai — short for cara
              <span className="text-saffron">van</span>serai — was the walled
              inn built along the old trade routes. Travelers arrived at
              dusk, strangers to everyone inside, and were fed and sheltered
              until dawn.
            </p>
            <p>
              But a serai was never just shelter. It was where news, goods,
              and stories passed between people who might never meet again.
              Word carried a merchant&rsquo;s reputation two towns further
              than his own footsteps ever would.
            </p>
          </StoryBlock>

          <Reveal>
            <blockquote className="border-t border-border pt-10">
              <p className="display max-w-4xl text-[1.85rem] sm:text-4xl lg:text-[3rem]">
                The serai was the original network. It didn&rsquo;t make
                anything. It made things known.
              </p>
            </blockquote>
          </Reveal>

          <StoryBlock label="Why It's My Name">
            <p>
              I&rsquo;m <span className="text-saffron">Van</span>dhana — and
              yes, I noticed the echo too. A cara
              <strong className="font-semibold">van</strong>serai, and me. It
              felt less like a coincidence and more like the name had been
              waiting for the business.
            </p>
            <p>I&rsquo;ve spent my whole life arriving somewhere new.</p>
            <p>
              Chennai, then a different Indian state every few years, growing
              up. Then Canada. Then Texas. Every move meant the same thing: a
              stranger at a new door, starting from nobody-knows-you, having
              to make a new place notice I existed. I&rsquo;ve done that more
              times than most people move house.
            </p>
            <p>
              So when I sat down to name this business, I didn&rsquo;t have
              to invent a metaphor. I already knew what it felt like to be
              excellent at something — a friendship, a skill, a way of
              showing up — and have absolutely no one around to know it yet.
            </p>
            <p>That&rsquo;s the exact job I do for brands.</p>
          </StoryBlock>

          <StoryBlock label="The Work, In One Line">
            <p>
              Every client I take on has already done the hard part. The
              product is right. The food is right. The craft is right.
              What&rsquo;s missing isn&rsquo;t quality — it&rsquo;s an inn on
              the road. A place where the people passing by actually stop,
              notice, and carry the word onward.
            </p>
            <p className="!text-ink font-medium">
              Premium brands come to me when the product is already
              excellent and the marketing hasn&rsquo;t caught up.
            </p>
            <p>
              I close that gap. Branding, social presence, advertising,
              influencer partnerships, strategy — whatever it takes for the
              right people to finally know.
            </p>
          </StoryBlock>

          <StoryBlock label="How I Work">
            <p>
              I take a small number of clients at a time — by design, not by
              accident. A serai never held everyone on the route. It held the
              ones worth stopping for, and it gave them its full attention
              while they stayed.
            </p>
            <p>
              That&rsquo;s the model. Fewer brands. More care. Real strategy
              instead of a rotating account manager who&rsquo;s never met
              you.
            </p>
          </StoryBlock>
        </div>

        <Reveal>
          <div className="mt-20 flex flex-wrap items-center gap-6 border-t border-border pt-10 md:mt-28">
            <div className="flex size-14 flex-none items-center justify-center rounded-full border border-ash bg-secondary">
              <span className="display text-lg text-steel italic">V</span>
            </div>
            <p className="max-w-md text-[1.0625rem] leading-relaxed text-graphite">
              Serai Media is led by <Van rest="dhana Srinivasan" />, Principal
              Strategist &amp; Founder.{" "}
              <a
                href="#apply"
                className="group inline-flex items-center gap-1.5 border-b border-saffron pb-0.5 font-medium text-ink"
              >
                Apply to work with us
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StoryBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 gap-y-6 border-t border-border pt-10 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-4">
          <h3 className="eyebrow font-sans">{label}</h3>
        </div>
        <div className="prose-editorial lg:col-span-7 lg:col-start-6">
          {children}
        </div>
      </div>
    </Reveal>
  );
}
