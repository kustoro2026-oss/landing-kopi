import Hero from "@/components/sections/Hero";
import USPBanner from "@/components/sections/USPBanner";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <USPBanner />
      <About />
      <Process />
      <Products />
      <Testimonials />
      <Location />
      <FAQ />
      <CTASection />
    </>
  );
}
