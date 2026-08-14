import About from "@/components/About";
import Audience from "@/components/Audience";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FounderQuote from "@/components/FounderQuote";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Nav from "@/components/Nav";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <FounderQuote />
        <About />
        <Features />
        <Audience />
        <Faq />
        <Join />
      </main>
      <Footer />
    </>
  );
}
