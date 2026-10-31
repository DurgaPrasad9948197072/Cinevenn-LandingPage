import type { Metadata } from "next";
import LegalPage, { LegalTable } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Cinevenn",
  description:
    "How Cinevenn Ltd uses your personal data when you visit cinevenn.com or join as a Founding Member before launch.",
  alternates: { canonical: "/privacy" },
};

const { company } = site;
const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

const purposes = [
  ["Emailing you about Cinevenn's launch and your Founding Member benefit", "Your consent"],
  ["Applying your Founding Member benefit when you create an account", "Contract (the Founding Member Terms)"],
  ["Showing values in your currency", "Legitimate interests: showing you relevant information"],
  ["Keeping the website secure and preventing misuse", "Legitimate interests: protecting our website and users"],
  ["Replying to your emails", "Legitimate interests: answering your questions"],
];

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="27 October 2026">
      <p>
        This policy explains how {company.name} uses your personal data when you visit cinevenn.com
        or join as a Founding Member before launch. It covers this website only. The Cinevenn
        platform will have its own, fuller privacy policy at launch.
      </p>

      <h2>Who we are</h2>
      <p>
        {company.name} is the controller of your personal data. We&apos;re registered in England
        &amp; Wales, Company No. {company.companyNo}, with our registered office at {company.street},{" "}
        {company.city} {company.postcode}. You can contact us at {mail}.
      </p>
      <p>
        We&apos;re registered with the Information Commissioner&apos;s Office (ICO) under
        registration number {company.icoNumber}.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Your email address</strong>, when you join as a Founding Member.
        </li>
        <li>
          <strong>The date you joined</strong> and which sign-up form you used.
        </li>
        <li>
          <strong>Your approximate country</strong>, worked out from your IP address, so we can show
          values in your currency. We don&apos;t store your IP address with your email.
        </li>
        <li>
          <strong>Basic technical data</strong> your browser sends, such as device and browser
          type, kept in our hosting provider&apos;s security logs.
        </li>
        <li>
          <strong>Your message and contact details</strong>, if you email us.
        </li>
      </ul>
      <p>
        You don&apos;t have to give us your email address. Without it, we can&apos;t add you as a
        Founding Member.
      </p>

      <h2>Why we use it</h2>
      <LegalTable>
        <thead>
          <tr>
            <th scope="col">What we use it for</th>
            <th scope="col">Our lawful basis</th>
          </tr>
        </thead>
        <tbody>
          {purposes.map(([use, basis]) => (
            <tr key={use}>
              <td className="text-foreground">{use}</td>
              <td>{basis}</td>
            </tr>
          ))}
        </tbody>
      </LegalTable>

      <h2>Who we share it with</h2>
      <p>
        We don&apos;t sell your personal data. We share it only with service providers that help us
        run this website and send emails, such as our hosting and email providers. They may only use
        it to provide their service to us, under contracts that require them to protect it.
        We&apos;ll also share it if the law requires us to.
      </p>

      <h2>International transfers</h2>
      <p>
        Some of our providers and team members are outside the UK, including in the USA and India.
        When your data leaves the UK, we protect it with safeguards recognised under UK law. These
        include the UK International Data Transfer Agreement, the UK Addendum to the EU Standard
        Contractual Clauses, or UK adequacy regulations where they apply.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>
          <strong>Founding Member emails:</strong> until 12 months after launch, or until you
          unsubscribe or ask us to delete it, whichever comes first. If you create a Cinevenn
          account, your data then falls under the platform&apos;s privacy policy.
        </li>
        <li>
          <strong>Security logs:</strong> up to 90 days.
        </li>
        <li>
          <strong>Emails you send us:</strong> as long as we need to deal with your message, and no
          longer than 2 years.
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>Under UK data protection law, you can ask us to:</p>
      <ul>
        <li>give you a copy of your personal data</li>
        <li>correct it if it&apos;s wrong</li>
        <li>delete it</li>
        <li>restrict how we use it</li>
        <li>stop using it where we rely on legitimate interests</li>
        <li>send it to you or another company in a reusable format</li>
      </ul>
      <p>
        You can withdraw your consent to emails at any time, using the unsubscribe link in any email
        or by contacting us. To use any of these rights, email {mail}. We&apos;ll reply within one
        month. We don&apos;t make decisions about you using automated means alone.
      </p>

      <h2>Complaints</h2>
      <p>
        If you&apos;re unhappy with how we use your data, please contact us first so we can put it
        right. You can also complain to the Information Commissioner&apos;s Office (ICO) at{" "}
        <a href="https://ico.org.uk" rel="noopener" target="_blank">
          ico.org.uk
        </a>{" "}
        or on <a href="tel:+443031231113">0303 123 1113</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        This website only uses cookies that are strictly necessary for it to work. We don&apos;t use
        advertising or analytics cookies. If that changes, we&apos;ll ask for your consent first.
      </p>

      <h2>Age</h2>
      <p>
        This website and the Founding Member offer are for people aged 18 and over. We don&apos;t
        knowingly collect data from anyone younger. If you think someone under 18 has signed up,
        email us and we&apos;ll delete their details.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we&apos;ll update this page and the date at the top. If a change
        affects how we use your email address, we&apos;ll tell you by email first.
      </p>
    </LegalPage>
  );
}
