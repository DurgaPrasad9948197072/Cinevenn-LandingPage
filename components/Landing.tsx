import { offerValue, type Region } from "@/lib/site";
import About from "./About";
import Audience from "./Audience";
import CallSheet from "./CallSheet";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import Founder from "./Founder";
import FounderQuote from "./FounderQuote";
import FoundingMembers from "./FoundingMembers";
import Hero from "./Hero";
import Investors from "./Investors";
import Join from "./Join";
import Nav from "./Nav";
import Phases from "./Phases";
import ScriptSeal from "./ScriptSeal";
import Trust from "./Trust";
import Venture from "./Venture";

/** The whole page, rendered once per region so each variant can be static. */
export default function Landing({ region }: { region: Region }) {
  const value = offerValue[region];
  return (
    <>
      <Nav />
      <main id="main">
        <Hero value={value} />
        <FounderQuote />
        <FoundingMembers value={value} />
        <About />
        <CallSheet />
        <ScriptSeal />
        <Features />
        <Trust />
        <Audience />
        <Phases />
        <Founder />
        <Venture />
        <Faq />
        <Investors />
        <Join />
      </main>
      <Footer />
    </>
  );
}
