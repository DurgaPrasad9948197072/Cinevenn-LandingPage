"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { subscribe, type SubscribeState } from "@/app/actions";

const initial: SubscribeState = { status: "idle", message: "" };

function SubmitButton({ done }: { done: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || done}
      className="inline-flex min-h-13 w-full cursor-pointer items-center justify-center rounded-full bg-accent px-7.5 text-[15px] font-semibold text-[#0a0a0a] transition-all duration-160 hover:bg-accent-hover hover:shadow-[0_0_26px_-6px_rgba(245,158,11,.5)] disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none sm:w-auto"
    >
      {done ? "You're on the list" : pending ? "Sending…" : "Notify Me"}
    </button>
  );
}

export default function JoinForm() {
  const [state, formAction] = useActionState(subscribe, initial);
  const done = state.status === "ok";

  return (
    <form action={formAction} className="mt-7.5">
      <div className="grid gap-2.5 sm:grid-cols-[1fr_auto]">
        <label htmlFor="email" className="sr-only">
          Your email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          disabled={done}
          placeholder="you@studio.com"
          aria-describedby="formNote"
          aria-invalid={state.status === "error" || undefined}
          className="min-h-13 w-full rounded-full border border-line-strong bg-card px-4.5 text-base transition-colors duration-160 placeholder:text-dim hover:border-white/26 focus:border-accent focus:bg-white/5 focus:ring-3 focus:ring-accent/18 focus:outline-none aria-invalid:border-[#e0705f] aria-invalid:ring-[#e0705f]/18 disabled:opacity-60"
        />
        <SubmitButton done={done} />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] size-px opacity-0"
      />

      <p id="formNote" className="mt-3.5 text-[13.5px] text-dim">
        No spam. One email when we&apos;re live.
      </p>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-[1.4em] text-[14.5px] ${
          done ? "text-accent-hover" : state.status === "error" ? "text-[#e8877a]" : ""
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}
