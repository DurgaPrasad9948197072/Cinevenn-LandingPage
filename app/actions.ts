"use server";

export type SubscribeState = {
  status: "idle" | "ok" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/**
 * Launch-list signup.
 *
 * Set SUBSCRIBE_ENDPOINT in .env.local to your real destination (Formspree,
 * Mailchimp, or your own backend). Until it's set the action fails loudly
 * rather than silently dropping signups.
 */
export async function subscribe(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  // Honeypot — bots fill hidden fields, humans don't.
  if (formData.get("company")) {
    return { status: "ok", message: "You're on the list. One email when we're live." };
  }

  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email address so we can reach you.",
    };
  }

  const endpoint = process.env.SUBSCRIBE_ENDPOINT;

  if (!endpoint) {
    console.warn("[subscribe] SUBSCRIBE_ENDPOINT is not set — signup dropped:", email);
    return {
      status: "error",
      message: "Signups aren't switched on yet. Email contact@cinevenn.com and we'll add you.",
    };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email, source: "cinevenn.com/landing" }),
    });

    if (!res.ok) throw new Error(`Upstream responded ${res.status}`);

    return {
      status: "ok",
      message: "You're on the list. One email when we're live.",
    };
  } catch (err) {
    console.error("[subscribe] failed:", err);
    return {
      status: "error",
      message: "Something went wrong. Email contact@cinevenn.com and we'll add you.",
    };
  }
}
