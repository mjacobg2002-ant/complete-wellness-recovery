import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Programs } from "./components/Programs";
import { Approach } from "./components/Approach";
import { Steps } from "./components/Steps";
import { Mission } from "./components/Mission";
import { Referrals } from "./components/Referrals";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Programs />
        <Approach />
        <Steps />
        <Mission />
        <Referrals />
      </main>
      <Footer />
    </>
  );
}
