"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Smooth slide-up for the main heading
        gsap.from(".cta-title", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            }
        });

        // Soft delayed fade-in for the subtext
        gsap.from(".cta-desc", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            }
        });

        // Clean subtle pop for the action buttons
        gsap.from(".cta-actions", {
            y: 15,
            scale: 0.98,
            opacity: 0,
            duration: 0.5,
            delay: 0.25,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            }
        });

        // Fade in micro-copy last
        gsap.from(".cta-micro", {
            opacity: 0,
            duration: 0.4,
            delay: 0.35,
            ease: "linear",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="w-full bg-transparent text-zinc-300 py-24 px-6 border-t border-zinc-900"
        >
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center p-12 rounded-3xl bg-zinc-900/10 backdrop-blur-md border border-zinc-800/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

                {/* Headline */}
                <h2 className="cta-title text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-zinc-100">
                    Ready to build your workspace <br />
                    that <span className="text-emerald-400">thinks ahead?</span>
                </h2>

                {/* Subtext */}
                <p className="cta-desc text-zinc-400 max-w-xl text-md md:text-lg mb-8 leading-relaxed font-normal">
                    Join over 10,000+ professionals automating manual work sequences and unlocking predictive data insights daily. No credit card required.
                </p>

                {/* Actions */}
                <div className="cta-actions flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <button className="btn bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 rounded-xl border-none transition-all duration-200 shadow-lg shadow-emerald-500/10">
                        Start Your Free Trial
                    </button>
                    <button className="btn bg-transparent hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 border border-zinc-700 hover:border-zinc-600 px-8 rounded-xl font-medium tracking-wide transition-all duration-200">
                        Schedule Demo
                    </button>
                </div>

                {/* Micro-Copy */}
                <p className="cta-micro text-xs text-zinc-500 mt-6 tracking-wide font-mono">
                    14-day trial period • Instant configuration • Cancel anytime
                </p>

            </div>
        </section>
    )
}

export default CtaSection;