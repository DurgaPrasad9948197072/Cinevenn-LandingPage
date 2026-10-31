# Founding Member sign-up: backend contract

The landing page (this repo) owns the form. The Cinevenn backend
(`staging.cinevenn.com`, later production) owns saving sign-ups, sending email,
unsubscribes and the launch discount. Source: "Cinevenn Sign-up Flow: Changes
for Developer", 31 October 2026.

**The rule:** single opt-in. No confirmation email, no confirmation page, no
code to enter, and no mention of the free year in any sign-up message. At
launch, people register with the same email and the discount applies
automatically.

```
browser (cinevenn.com) ──POST https://staging.cinevenn.com/api/founding-members──▶ backend
                                                                                 saves, emails
```

The URL is `signup.endpoint` in `lib/site.ts`. Change it to the production API
at launch.

---

## 1. `POST /api/founding-members`: save a sign-up

Called from the visitor's browser by the form on cinevenn.com. It's a public
endpoint, so the backend does its own validation and rate limiting.

**CORS** (required, because the page and the API are on different hosts)

```
Access-Control-Allow-Origin: https://www.cinevenn.com     (echo the request Origin if it is in the allow-list)
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400
```

Allow-list `https://www.cinevenn.com`, `https://cinevenn.com`, and
`http://localhost:3001` for local dev. Answer the `OPTIONS` preflight with
204 and these headers. The `POST` response needs `Access-Control-Allow-Origin`
too, or the browser hides it and the form shows an error.

**Body** (the form checks it first, but validate it again here)

```json
{
  "email": "someone@example.com",
  "source": "hero",
  "acceptedTerms": true,
  "launchEmails": true,
  "consentVersion": "v1"
}
```

| Field            | Rules                                                         |
| ---------------- | ------------------------------------------------------------- |
| `email`          | trim and lowercase it again, at most 254 chars, valid address |
| `source`         | `hero` \| `offer` \| `final_cta`, the form it came from        |
| `acceptedTerms`  | must be `true` (checkbox 1)                                   |
| `launchEmails`   | must be `true` (checkbox 2)                                   |
| `consentVersion` | `v1` today; the exact wording is in section 7                 |

Don't trust a client timestamp. Use the server time for `consented_at`. Rate
limit by IP (e.g. 5 per minute), but don't store the IP.

**Behaviour**

| Case                              | Do                                                                                                 | Respond                         |
| --------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------- |
| New email                         | insert member and consent event, send the thank-you email (section 4)                              | `201 {"status":"created"}`      |
| Already subscribed                | add a consent event, re-send the thank-you email (throttle: at most once per 24 h per address)     | `200 {"status":"existing"}`     |
| Previously unsubscribed           | they've ticked consent again: clear `unsubscribed_at`, add a consent event, send the email         | `200 {"status":"existing"}`     |
| Body invalid                      | nothing                                                                                            | `400 {"error":"validation"}`    |
| Too many requests (e.g. 5/min/IP) | nothing                                                                                            | `429`                           |

The page shows "Thank you. You're in. 🎬 / We've sent a note to {email}" for
`created`, and "You're already in. We've sent a note to {email}" for
`existing`. So both cases must actually send a note, subject to the throttle.

Send the email after the row is committed, through a queue if possible. A slow
mail provider must not delay the response the visitor is waiting on.

**Never send email to an address that isn't saved.**

## 2. Data

```sql
create table founding_members (
  id                    uuid primary key default gen_random_uuid(),
  email                 citext not null unique,          -- lowercase
  source                text   not null check (source in ('hero','offer','final_cta')),
  accepted_terms        boolean not null,
  launch_emails         boolean not null,
  consent_version       text   not null,                 -- 'v1'
  consented_at          timestamptz not null,            -- latest consent
  created_at            timestamptz not null default now(),
  unsubscribe_token     text   not null unique,          -- random, 32+ bytes, url-safe
  unsubscribed_at       timestamptz,
  thank_you_sent_at     timestamptz,
  launch_email_sent_at  timestamptz,
  account_id            uuid                             -- set when they register (section 6)
);

-- Proof of consent: one row per form submission, never updated.
create table founding_member_consents (
  id               bigserial primary key,
  member_id        uuid not null references founding_members(id) on delete cascade,
  source           text not null,
  accepted_terms   boolean not null,
  launch_emails    boolean not null,
  consent_version  text not null,
  created_at       timestamptz not null default now()
);
```

Do **not** store the IP address, country or user agent with the email. The
privacy policy uses IP only to pick the currency.

**Retention:** delete founding members 12 months after launch unless
`account_id` is set. Run it as a scheduled job.

## 3. Unsubscribe

It must work in one click and stop all emails to that address.

- **`GET /unsubscribe?t=<unsubscribe_token>`** sets `unsubscribed_at = now()`
  and renders a plain page: "You're unsubscribed. You won't get any more emails
  from Cinevenn." No login, no confirm button. An unknown token gets the same
  page, so it doesn't reveal which addresses exist.
- **`POST /unsubscribe?t=<unsubscribe_token>`** does the same and returns 200.
  This is RFC 8058 one-click, which Gmail and Yahoo require for bulk senders.

Every email carries these headers:

```
List-Unsubscribe: <https://staging.cinevenn.com/unsubscribe?t=TOKEN>, <mailto:contact@cinevenn.com?subject=unsubscribe>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

The footer "Unsubscribe" link points to the same GET URL.

## 4. Thank-you email: send immediately after sign-up

Templates: `docs/emails/thank-you.html` and `docs/emails/thank-you.txt`.

This replaces the old "confirm your email" email. There is no confirm button
and no confirm page.

- **From:** `Dinesh from Cinevenn <contact@cinevenn.com>`
- **Reply-To:** `contact@cinevenn.com`
- **Subject:** `Thank you for trusting us 🎬`
- **Preview text:** `You're in. Sit back and relax.`

```
Hi there,

Thank you for trusting us.

You joined Cinevenn before launch day, before the reviews, before almost anyone
had heard of us. That kind of trust is rare, and we don't take it lightly.

Now sit back and relax. We'll take care of everything from here.

With thanks,

Dinesh Koyyalamudi (46DC)
Founder, Cinevenn
```

**Footer (required in every email):**

```
You're getting this because you joined Cinevenn at cinevenn.com.

Unsubscribe · Privacy Policy · Founding Member Terms

Follow along: @cinevenn

Cinevenn Ltd · Company No. 17543857 · Registered in England & Wales · 66 Paul Street, London EC2A 4NA
ICO registration ZC285603 · A FourSix46® venture.
```

| Footer link           | URL                                        |
| --------------------- | ------------------------------------------ |
| Unsubscribe           | `https://<backend>/unsubscribe?t=TOKEN`    |
| Privacy Policy        | `https://www.cinevenn.com/privacy`         |
| Founding Member Terms | `https://www.cinevenn.com/founding-terms`  |

Send both HTML and plain-text parts, replacing `{{unsubscribe_url}}` with the member's link. Set `thank_you_sent_at`.

## 5. Launch-day email

Templates: `docs/emails/launch.html` and `docs/emails/launch.txt`.

Send on launch day to every member where `unsubscribed_at is null`. Batch it,
make it idempotent with `launch_email_sent_at`, and trigger it from an admin
action or a one-off job.

- **From:** `Dinesh from Cinevenn <contact@cinevenn.com>`
- **Reply-To:** `contact@cinevenn.com`
- **Subject:** `Cinevenn is open. Your account is waiting 🎬`
- **Preview text:** `Register with the same email. Your discount is automatic.`

```
Hi there,

The wait is over. Cinevenn is open.

Create your account at cinevenn.com using this same email address. Your
Founding Member discount applies automatically, with no code and nothing to
claim.

Thank you for being here from the start.

Dinesh Koyyalamudi (46DC)
Founder, Cinevenn
```

Use the same footer and headers as section 4.

## 6. Automatic discount: build before launch

There's no coupon code and no claim step. On account creation:

1. Lowercase the account email and look it up in `founding_members`.
2. **Match:** grant every paid feature for the role they choose, free for 12
   months **from launch day** (not from registration), with no caps. Set
   `founding_members.account_id`.
3. **No match:** standard pricing.

Remove any coupon code or "Claim my free year" option inside the account.
Unsubscribing from emails does **not** remove the discount.

Role to free features (from `/founding-terms`):

| Role chosen at sign-up                                        | Free for 12 months                                 |
| ------------------------------------------------------------- | -------------------------------------------------- |
| Actors & crew                                                 | Industry Talent verification badge                 |
| Writers                                                       | Industry Talent verification badge + unlimited Script Seal |
| Media & reviewers                                             | Media & Reviewer verification badge                |
| Notable professionals                                         | Notable Professional verification badge            |
| Directors, producers, production companies, casting & agencies | Hiring Professional verification badge + unlimited Script Seal |

## 7. Consent wording on file

Keep this table in the backend so every `consent_version` resolves to what the
person actually saw. When the wording changes, bump `signup.consentVersion` in
`lib/site.ts` and add a row here.

| Version | Checkbox 1 (`acceptedTerms`)                             | Checkbox 2 (`launchEmails`)                                    | Live from   |
| ------- | -------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| `v1`    | I'm 18 or over and I accept the Founding Member Terms.   | Email me about Cinevenn's launch. I can unsubscribe anytime.   | 31 Oct 2026 |

## Remove everywhere

- The "confirm your email" email and any confirmation page.
- Any coupon code or "claim" option inside the account.
- Any sign-up message that mentions the free year.
