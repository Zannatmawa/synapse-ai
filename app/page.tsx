"use client";
import HeroSection from "./components/sections/Hero";
import HowItWorksSection from "./components/sections/HowItWorks";
import CtaSection from "./components/sections/CallToAction";
import FeaturesSection from "./features/page";
import PricingSection from "./pricing/page";
import TestimonialsSection from "./testimonials/page";



export default function Home() {


  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">

      <div className="relative z-10">
        <div className="bg-[#090a0f]">
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <PricingSection />
          <CtaSection />
        </div>
      </div>
    </main>
  );
}
//git add . && git commit -m "issues solving" && git push
//https://www.cravburgers.shop/
//https://www.produx.design/