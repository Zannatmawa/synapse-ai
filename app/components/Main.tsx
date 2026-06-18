import React from 'react'
import HeroSection from './sections/Hero'
// import FeaturesSection from './sections/Features'
import HowItWorksSection from './sections/HowItWorks'
import TestimonialsSection from './sections/Testimonials'
import PricingSection from './sections/Pricing'
import CtaSection from './sections/CallToAction'

const Main = () => {
    return (
        <>
            <HeroSection />
            {/* <FeaturesSection /> */}
            <HowItWorksSection />
            <TestimonialsSection />
            <PricingSection />
            <CtaSection />

        </>
    )
}

export default Main