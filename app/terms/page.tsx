import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Terms of Use | Cinevenn",
  description: "The terms that apply when you use cinevenn.com before the Cinevenn platform launches.",
  alternates: { canonical: "/terms" },
};

const { company } = site;

export default function TermsPage() {
  return (
    <LegalPage title="Website Terms of Use" updated="27 October 2026">
      <p>
        These terms apply when you use cinevenn.com before the Cinevenn platform launches. By using
        this website, you agree to them. The platform will have its own terms at launch.
      </p>

      <h2>Who we are</h2>
      <p>
        cinevenn.com is run by {company.name}, registered in England &amp; Wales, Company No.{" "}
        {company.companyNo}, with our registered office at {company.street}, {company.city}{" "}
        {company.postcode}. You can contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Cinevenn is a FourSix46® venture. FourSix46® is a registered trade mark of{" "}
        {site.ecosystem.owner}, used under licence.
      </p>

      <h2>Using this website</h2>
      <ul>
        <li>You may use this website for your own personal or professional interest in Cinevenn.</li>
        <li>
          Don&apos;t misuse it. That means no hacking, scraping, automated or fake sign-ups, false
          information, or anything unlawful.
        </li>
        <li>We may change, suspend or withdraw the website at any time.</li>
      </ul>

      <h2>Information on this website</h2>
      <p>
        This website describes a platform that hasn&apos;t launched yet. Features, timings and
        prices may change before launch. We work to keep everything accurate, but it&apos;s general
        information only.
      </p>

      <h2>Our intellectual property</h2>
      <p>
        The Cinevenn name, logos, designs, text and other content on this website belong to{" "}
        {company.name} or our licensors. You may not copy or reuse them without our written
        permission.
      </p>

      <h2>Links to other websites</h2>
      <p>
        We link to other websites, such as foursix46.com, 46dc.com and our social media pages.
        We&apos;re not responsible for their content or how they use your data.
      </p>

      <h2>Founding Member offer</h2>
      <p>
        The Founding Member offer is covered by our Founding Member Terms at{" "}
        <Link href="/founding-terms">cinevenn.com/founding-terms</Link>.
      </p>

      <h2>Privacy</h2>
      <p>
        How we use your personal data is explained in our Privacy Policy at{" "}
        <Link href="/privacy">cinevenn.com/privacy</Link>.
      </p>

      <h2>Our liability</h2>
      <p>
        We provide this website free of charge and as it is. As far as the law allows, we&apos;re
        not responsible for any loss caused by using it or by it being unavailable.
      </p>
      <p>
        Nothing in these terms limits our liability for death or personal injury caused by our
        negligence, for fraud, or for anything else the law doesn&apos;t allow us to limit. If
        you&apos;re a consumer, your legal rights aren&apos;t affected.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms. The version on this page when you use the website is the one
        that applies.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of England and Wales, and the courts of England and
        Wales can hear any dispute. If you live in Scotland or Northern Ireland, you can also bring
        a claim in your local courts. If you live outside the UK, you may also have rights under
        your local law.
      </p>
    </LegalPage>
  );
}
