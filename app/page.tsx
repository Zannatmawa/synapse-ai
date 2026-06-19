import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import HeroSection from "./components/sections/Hero";
import FeaturesSection from "./components/sections/Features";
import HowItWorksSection from "./components/sections/HowItWorks";
import TestimonialsSection from "./components/sections/Testimonials";
import PricingSection from "./components/sections/Pricing";
import CtaSection from "./components/sections/CallToAction";
gsap.registerPlugin(ScrollTrigger, SplitText);



export default function Home() {
  return (
    <div className="bg-[#090a0f]">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
//git add . && git commit -m "issues solving" && git push
//https://www.cravburgers.shop/
//https://www.produx.design/