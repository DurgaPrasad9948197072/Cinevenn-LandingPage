import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalTable } from "@/components/LegalPage";
import { roleUnlocks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founding Member Terms | Cinevenn",
  description:
    "The terms of the Cinevenn Founding Member offer: every paid feature for your role, free for 12 months from launch day.",
  alternates: { canonical: "/founding-terms" },
};

const { company } = site;

export default function FoundingTermsPage() {
  return (
    <LegalPage title="Founding Member Terms" updated="27 October 2026">
      <p>
        These terms explain the Cinevenn Founding Member offer. The offer is run by {company.name},
        registered in England &amp; Wales, Company No. {company.companyNo}, with our registered
        office at {company.street}, {company.city} {company.postcode}.
      </p>

      <h2>Who can join</h2>
      <ul>
        <li>Anyone aged 18 or over who enters their email address on cinevenn.com before launch day.</li>
        <li>One Founding Member benefit per person or organisation.</li>
        <li>The benefit is personal. It can&apos;t be sold, transferred or exchanged for cash.</li>
      </ul>

      <h2>What you get</h2>
      <p>
        Every paid feature for the role you choose when you create your Cinevenn account, free for
        12 months from launch day. There are no caps on included features.
      </p>
      <LegalTable>
        <thead>
          <tr>
            <th scope="col">Role you choose</th>
            <th scope="col">Free for 12 months</th>
          </tr>
        </thead>
        <tbody>
          {roleUnlocks.map((r) => (
            <tr key={r.role}>
              <td className="text-foreground">{r.role}</td>
              <td>{r.unlocks}</td>
            </tr>
          ))}
        </tbody>
      </LegalTable>
      <p>
        Your free 12 months start on launch day for every Founding Member. If you create your
        account after launch day, your free period still ends 12 months after launch day.
      </p>

      <h2>Verification</h2>
      <p>
        Verification is free for Founding Members. You only get a verification badge if your
        identity is successfully verified. If it can&apos;t be verified, no badge is issued, and we
        won&apos;t give any payment, refund, credit or discount in its place.
      </p>

      <h2>How you get it</h2>
      <ul>
        <li>We&apos;ll email you when Cinevenn launches, with a link to create your account.</li>
        <li>
          Your free year is applied automatically, but only to the account created with the email
          address you signed up with.
        </li>
        <li>
          Create your Cinevenn account with that email, and choose your role. Your free 12 months
          are applied automatically. There is no code to enter.
        </li>
      </ul>

      <h2>After your free 12 months</h2>
      <ul>
        <li>We&apos;ll email you before your free 12 months end.</li>
        <li>We don&apos;t take card details for the free year, so you won&apos;t be charged automatically.</li>
        <li>After it ends, standard prices apply to any feature you choose to buy.</li>
      </ul>

      <h2>Values shown on our website</h2>
      <p>
        The &ldquo;up to&rdquo; values on cinevenn.com are based on our standard yearly prices for
        the highest-value role: the Hiring Professional badge plus 15 Script Seals. What you receive
        depends on the role you choose.
      </p>

      <h2>Changes and ending the offer</h2>
      <ul>
        <li>
          We may close the offer to new sign-ups at any time before launch. Anyone already signed up
          keeps their benefit.
        </li>
        <li>If launch is delayed, your free 12 months still start on launch day.</li>
        <li>
          If we change these terms, we won&apos;t reduce the benefit for Founding Members who have
          already signed up.
        </li>
        <li>
          We may remove the benefit from anyone who breaks these terms or the Cinevenn platform
          rules, for example by creating fake accounts or misusing features.
        </li>
      </ul>

      <h2>Your data</h2>
      <p>
        How we use your email address is explained in our Privacy Policy at{" "}
        <Link href="/privacy">cinevenn.com/privacy</Link>.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of England and Wales. If you&apos;re a consumer, your
        legal rights aren&apos;t affected, and you may also have rights under the law where you
        live.
      </p>
    </LegalPage>
  );
}
