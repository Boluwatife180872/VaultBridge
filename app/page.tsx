import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import ExtraPage from "./sections/ExtraPage";
import WhatWeDo from "./sections/WhatWeDo";
import Testimonials from "./sections/Testimonials";
import HeroCTA from "./sections/HeroCTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <section id="features" className="scroll-mt-[140px]">
        <WhyUs />
      </section>
      <section id="services" className="scroll-mt-[140px]">
        <ExtraPage />
      </section>
      <section id="products" className="scroll-mt-[140px]">
        <WhatWeDo />
      </section>
      <section id="testimonials" className="scroll-mt-[140px]">
        <Testimonials />
      </section>
      <HeroCTA />
      <Footer />
    </>
  );
}
