"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { signup, site, type SignupSource } from "@/lib/site";

type Props = {
  /** Anchor for the nav's "Claim my free year" link. */
  id?: string;
  source: SignupSource;
  /** The form's own "under the button" line, shown above the privacy line. */
  note?: ReactNode;
  className?: string;
};

type Field = "email" | "terms" | "updates";

const errorText: Record<Field, string> = {
  email: "Please enter a valid email address.",
  terms: "Please confirm you're 18 or over and accept the Founding Member Terms.",
  updates: "Please tick this so we can email you about the launch.",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const link =
  "text-muted-fg underline decoration-line-strong underline-offset-4 transition-colors duration-160 hover:text-accent hover:decoration-accent";

/**
 * Founding Member sign-up: single opt-in, one email field and two required
 * ticks. Posts straight to the Cinevenn backend (`signup.endpoint`).
 */
export default function SignupForm({ id: anchor, source, note, className = "" }: Props) {
  const id = useId();
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const [done, setDone] = useState<{ email: string; existing: boolean } | null>(null);
  const inputs = useRef<Partial<Record<Field, HTMLInputElement | null>>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const next: Partial<Record<Field, boolean>> = {
      email: !EMAIL.test(email),
      terms: data.get("terms") !== "on",
      updates: data.get("updates") !== "on",
    };
    setErrors(next);
    const firstInvalid = (["email", "terms", "updates"] as const).find((f) => next[f]);
    if (firstInvalid) {
      inputs.current[firstInvalid]?.focus();
      return;
    }

    // Honeypot filled: show success, send nothing.
    if (data.get("company")) {
      setDone({ email, existing: false });
      return;
    }

    setBusy(true);
    setFailed(false);
    try {
      const res = await fetch(signup.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.toLowerCase(),
          source,
          acceptedTerms: true,
          launchEmails: true,
          consentVersion: signup.consentVersion,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const body = (await res.json()) as { status?: string };
      setDone({ email, existing: body.status === "existing" });
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div id={anchor} role="status" className={`scroll-mt-28 rounded-2xl text-left border border-accent/28 bg-accent/8 p-6 ${className}`}>
        <p className="mb-2 font-display text-2xl font-semibold text-foreground">
          Thank you. You&apos;re in. <span aria-hidden>🎬</span>
        </p>
        <p className="text-muted-fg">
          {done.existing && "You're already in. "}We&apos;ve sent a note to{" "}
          <strong className="font-semibold break-all text-foreground">{done.email}</strong>.
        </p>
        <p className="mt-1 text-muted-fg">
          Sit back and relax. We&apos;ll take care of everything from here.
        </p>
      </div>
    );
  }

  const clear = (f: Field) => errors[f] && setErrors((prev) => ({ ...prev, [f]: false }));
  const errorId = (f: Field) => `${id}-${f}-error`;
  const fieldError = (f: Field) =>
    errors[f] && (
      <p id={errorId(f)} className="mt-1.5 text-[13.5px] text-red-400">
        {errorText[f]}
      </p>
    );
  const checkbox = (f: "terms" | "updates", label: ReactNode) => (
    <div>
      <label className="flex cursor-pointer items-start gap-2.5 text-[14px] leading-6 text-muted-fg">
        <input
          ref={(el) => {
            inputs.current[f] = el;
          }}
          type="checkbox"
          name={f}
          required
          aria-invalid={errors[f] || undefined}
          aria-describedby={errors[f] ? errorId(f) : undefined}
          onChange={() => clear(f)}
          className="mt-1 size-4 shrink-0 cursor-pointer accent-accent"
        />
        <span>{label}</span>
      </label>
      {fieldError(f)}
    </div>
  );

  return (
    <form id={anchor} noValidate onSubmit={onSubmit} className={`scroll-mt-28 text-left ${className}`}>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          ref={(el) => {
            inputs.current.email = el;
          }}
          id={`${id}-email`}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={254}
          placeholder="Your email address"
          aria-invalid={errors.email || undefined}
          aria-describedby={errors.email ? errorId("email") : undefined}
          onChange={() => clear("email")}
          className="min-h-12 w-full min-w-0 rounded-full border border-line-strong bg-card px-5 text-[15px] text-foreground transition-colors duration-160 placeholder:text-dim focus:border-accent focus:outline-none sm:flex-1"
        />
        <button
          type="submit"
          disabled={busy}
          className="inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent px-6 text-[15px] font-semibold text-[#0a0a0a] transition-all duration-160 hover:bg-accent-hover hover:shadow-[0_0_26px_-6px_rgba(245,158,11,.5)] disabled:cursor-wait disabled:opacity-70"
        >
          {busy ? "Joining…" : "Claim my free year"}
        </button>
      </div>
      {fieldError("email")}

      {/* Honeypot: hidden from people, filled in by naive bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] size-px opacity-0"
      />

      <div className="mt-4 grid gap-2">
        {checkbox(
          "terms",
          <>
            I&apos;m 18 or over and I accept the{" "}
            <Link href="/founding-terms" target="_blank" className={link}>
              Founding Member Terms
            </Link>
            .
          </>,
        )}
        {checkbox("updates", signup.updates)}
      </div>

      {failed && (
        <p role="alert" className="mt-3 text-[13.5px] text-red-400">
          Something went wrong. Please try again, or email{" "}
          <a href={`mailto:${site.email}`} className={link}>
            {site.email}
          </a>
          .
        </p>
      )}

      {note && <p className="mt-4 text-sm text-dim">{note}</p>}
      <p className={`text-sm text-dim ${note ? "mt-1" : "mt-4"}`}>
        We&apos;ll never sell your email.{" "}
        <Link href="/privacy" target="_blank" className={link}>
          Privacy Policy
        </Link>
      </p>
    </form>
  );
}
