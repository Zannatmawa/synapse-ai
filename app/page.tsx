"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import HeroSection from "./components/sections/Hero";
import FeaturesSection from "./components/sections/Features";
import HowItWorksSection from "./components/sections/HowItWorks";
import TestimonialsSection from "./components/sections/Testimonials";
import PricingSection from "./components/sections/Pricing";
import CtaSection from "./components/sections/CallToAction";
import BackgroundCanvas from "./components/sections/BackgroundCampus";

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Home() {
  // Shared reference to track scroll progress for Three.js
  const scrollProgress = useRef(0);

  useGSAP(() => {
    // Update the scrollProgress ref based on total page scroll
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Three.js interactive background */}
      <BackgroundCanvas scrollProgress={scrollProgress} />

      {/* Standard HTML Content animated by GSAP */}
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