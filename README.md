# Serai Media — Next.js

A clean, single-page Next.js (App Router + TypeScript + Tailwind CSS v4) build of the Serai Media site. Built to match the brand guidelines and website copy exactly — no invented copy, stats, testimonials, or case studies.

Verified: `npm install && npm run build` completes a clean static production build in this environment.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack build)
- **Tailwind CSS v4** — design tokens (`ink`, `graphite`, `steel`, `ash`, `paper`, `saffron`) defined once in `src/app/globals.css`
- **Fraunces** (display) + **Inter** (body/UI), self-hosted as variable fonts via `@fontsource-variable` — no external font request at build or runtime, and Fraunces keeps its optical-size/soft/wonk variable axes
- Zero UI dependencies beyond what the page actually uses: `clsx` + `tailwind-merge` (class merging), `zod` (form validation), `lucide-react` (menu/close icons). No unused shadcn/Radix components carried over.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, metadata, JSON-LD
    page.tsx           Assembles every section on the single page
    globals.css         Design tokens + editorial utility classes
    icon.png            Favicon (site monogram)
  components/
    Header.tsx           Fixed nav, scroll state, active-section tracking, mobile menu
    Hero.tsx              Hero + quiet proof strip
    StorySection.tsx       "The Story" — name, founder note, four numbered blocks
    ServicesSection.tsx     Numbered accordion, data-driven from data/services.ts
    Sections.tsx            Positioning ("small number of brands"), Proof, Final CTA
    ApplySection.tsx         Application form (zod-validated, client-side only)
    Footer.tsx                Minimal footer
    primitives.tsx             Reveal (scroll-in), Van (saffron treatment), Eyebrow, ApplyLink
  data/
    services.ts        Single source of truth for the five services + nav links
  hooks/
    use-reveal.ts       IntersectionObserver reveal-on-scroll, respects prefers-reduced-motion
  lib/
    utils.ts            cn() class-merging helper
public/
  images/
    wordmark-light.png / wordmark-dark.png
    monogram-light.png / monogram-dark.png
```

## Notes on content fidelity

- All copy is taken directly from the supplied website copy document — nothing rewritten, no invented claims.
- The "VAN" saffron treatment appears exactly where the brand guidelines specify (Story byline, Story Section 2 opening, founder line, Apply signature) — not on every instance of "Van".
- `[X] business days` is left as a literal placeholder in the Apply section, as instructed — fill in a real number in `src/components/ApplySection.tsx` before launch.
- **Proof section**: no fabricated case studies. It states plainly that selected work is being prepared, alongside the two real client names (TLJ, Shiva Jewelers) from the source copy.
- **Story portrait**: the real photo wasn't supplied, so `StorySection.tsx` renders a styled placeholder (dark gradient panel, "Photography arriving soon") instead of a stock photo. Swap it for a real `<Image>` once the Aug 15 shoot is in.
- **Application form**: fully validated client-side (zod) with a real "submitted" confirmation state, but is **not wired to a backend** — no email is actually sent. Wire it to your provider of choice (Resend, a serverless route, a form service) before launch; the submit handler lives in `src/components/ApplySection.tsx`.

## Before launch

- [ ] Replace `[X] business days` in `ApplySection.tsx` with a real number
- [ ] Wire the application form to an actual email/CRM destination
- [ ] Swap the Story portrait placeholder for real photography
- [ ] Add real case studies to `ProofSection` once available
- [ ] Point `metadataBase` in `layout.tsx` at the live domain if it changes
