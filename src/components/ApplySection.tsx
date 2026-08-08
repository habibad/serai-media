"use client";

import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { z } from "zod";
import { Eyebrow, Reveal, Van } from "./primitives";
import { cn } from "@/lib/utils";

const industries = [
  "Retail",
  "Restaurant & F&B",
  "Wellness",
  "Fitness",
  "Real Estate",
  "Beauty & Cosmetics",
  "Other",
];

const budgets = [
  "Under $3,000",
  "$3,000–$6,000",
  "$6,000–$10,000",
  "$10,000+",
];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  business: z
    .string()
    .trim()
    .min(1, "Please enter your business name")
    .max(120),
  industry: z.string().min(1, "Please select an industry"),
  presence: z
    .string()
    .trim()
    .min(1, "Please enter a website or Instagram handle")
    .max(200),
  budget: z.string().min(1, "Please select a budget range"),
  goal: z
    .string()
    .trim()
    .min(10, "Tell us a little more — a sentence or two is plenty")
    .max(2000),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = {
  name: "",
  business: "",
  industry: "",
  presence: "",
  budget: "",
  goal: "",
};

export function ApplySection() {
  return (
    <section id="apply" className="border-b border-border py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Apply</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <h2 className="display text-[2.25rem] sm:text-5xl lg:text-[4rem]">
                Let&rsquo;s see if it&rsquo;s a fit.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="prose-editorial mt-10">
                <p>
                  We take on a small number of brands at a time — enough to
                  give each one real attention, not so many that any one
                  client becomes a line item.
                </p>
                <p>
                  Tell us about your business. If it&rsquo;s a fit,
                  we&rsquo;ll be in touch within [X] business days.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 md:mt-24 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-7">
            <ApplicationForm />
          </Reveal>

          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10 border-t border-border pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <p className="eyebrow">Prefer email?</p>
                <a
                  href="mailto:hello@seraimedia.com"
                  className="mt-3 inline-block border-b border-ash pb-0.5 text-[1.0625rem] text-ink transition-colors duration-300 hover:border-ink"
                >
                  hello@seraimedia.com
                </a>
              </div>
              <div>
                <p className="eyebrow">Based in</p>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  Austin, TX — working with brands locally and beyond.
                </p>
              </div>
              <div>
                <p className="eyebrow">Reviewed personally by</p>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  <Van rest="dhana Srinivasan" />, Principal Strategist &amp;
                  Founder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ApplicationForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = schema.safeParse(values);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = document.getElementById(`${uid}-${Object.keys(next)[0]}`);
      first?.focus();
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-border bg-secondary/60 px-8 py-16 md:px-12"
      >
        <span
          aria-hidden="true"
          className="block size-1.5 rounded-full bg-saffron"
        />
        <h3 className="display mt-8 text-[1.75rem] sm:text-[2.25rem]">
          Your answers are ready to send.
        </h3>
        <p className="mt-6 max-w-md text-sm leading-[1.85] text-graphite">
          This form isn&rsquo;t connected to an inbox yet, so nothing has
          been delivered. Until it is, send the same details to{" "}
          <a
            href="mailto:hello@seraimedia.com"
            className="border-b border-ash pb-0.5 text-ink transition-colors hover:border-ink"
          >
            hello@seraimedia.com
          </a>{" "}
          and Vandhana will read it personally.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setValues(empty);
          }}
          className="mt-10 border-b border-ash pb-1 text-sm text-ink transition-colors duration-300 hover:border-ink"
        >
          Edit your answers
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <Field
          id={`${uid}-name`}
          label="Name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id={`${uid}-business`}
          label="Business name"
          value={values.business}
          onChange={set("business")}
          error={errors.business}
          autoComplete="organization"
        />
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <SelectField
          id={`${uid}-industry`}
          label="Industry"
          value={values.industry}
          onChange={set("industry")}
          error={errors.industry}
          options={industries}
        />
        <Field
          id={`${uid}-presence`}
          label="Website or Instagram handle"
          value={values.presence}
          onChange={set("presence")}
          error={errors.presence}
          autoComplete="url"
        />
      </div>

      <SelectField
        id={`${uid}-budget`}
        label="Monthly marketing budget range"
        value={values.budget}
        onChange={set("budget")}
        error={errors.budget}
        options={budgets}
      />

      <Field
        id={`${uid}-goal`}
        label="What are you hoping to fix?"
        value={values.goal}
        onChange={set("goal")}
        error={errors.goal}
        textarea
      />

      <div className="pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 border border-ink bg-ink px-7 py-4 text-sm tracking-wide text-paper transition-colors duration-300 hover:border-graphite hover:bg-graphite"
        >
          Submit Application
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-saffron transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </form>
  );
}

const fieldBase =
  "w-full border-0 border-b bg-transparent px-0 py-3 text-[1rem] text-ink placeholder:text-ash focus:outline-none transition-colors duration-300";

function Field({
  id,
  label,
  value,
  onChange,
  error,
  textarea,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  textarea?: boolean | undefined;
  autoComplete?: string | undefined;
}) {
  const Tag = textarea ? "textarea" : "input";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs tracking-[0.14em] text-steel uppercase"
      >
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        value={value}
        rows={textarea ? 5 : undefined}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        className={cn(
          fieldBase,
          "resize-none focus:border-saffron",
          error ? "border-destructive" : "border-input",
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs tracking-[0.14em] text-steel uppercase"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          fieldBase,
          "appearance-none rounded-none focus:border-saffron",
          error ? "border-destructive" : "border-input",
          value ? "text-ink" : "text-ash",
        )}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
