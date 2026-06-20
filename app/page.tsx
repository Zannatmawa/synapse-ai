"use client";

import React, { useRef } from "react";
import HeroSection from "./components/sections/Hero";
import FeaturesSection from "./components/sections/Features";
import HowItWorksSection from "./components/sections/HowItWorks";
import TestimonialsSection from "./components/sections/Testimonials";
import PricingSection from "./components/sections/Pricing";
import CtaSection from "./components/sections/CallToAction";



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