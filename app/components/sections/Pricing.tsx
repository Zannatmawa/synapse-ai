"use client"
import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".pricing-badge", {
            y: 15,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".pricing-wrapper",
                start: "top 85%",
            }
        });

        gsap.from(".pricing-title", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".pricing-wrapper",
                start: "top 85%",
            }
        });

        gsap.from(".pricing-desc", {
            y: 15,
            opacity: 0,
            duration: 0.5,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".pricing-wrapper",
                start: "top 85%",
            }
        });

        gsap.from(".pricing-toggle-area", {
            scale: 0.95,
            opacity: 0,
            duration: 0.4,
            delay: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: ".pricing-wrapper",
                start: "top 85%",
            }
        });

        gsap.from(".single-pricing-tier", {
            rotationX: -25,
            y: 40,
            transformOrigin: "bottom center",
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".pricing-cards-container",
                start: "top 85%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="pricing-wrapper py-24 px-6 w-full bg-transparent text-zinc-300 [perspective:1200px]">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <div className="pricing-badge text-emerald-400 font-mono text-xs tracking-widest uppercase mb-3">
                        ✦ Pricing Plans
                    </div>
                    <h2 className="pricing-title text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
                        Simple, transparent pricing plans
                    </h2>
                    <p className="pricing-desc text-zinc-400 max-w-md mx-auto text-base font-normal">
                        Start small and scale up as your automation needs grow. Cancel or change plans at any time.
                    </p>
                </div>

                <div className="pricing-toggle-area flex items-center justify-center gap-4 mb-16">
                    <span className={`text-sm font-medium tracking-wide transition-colors duration-200 ${!isYearly ? 'text-zinc-100' : 'text-zinc-500'}`}>
                        Monthly
                    </span>
                    <input
                        type="checkbox"
                        className="toggle border-zinc-700 bg-zinc-800 checked:bg-emerald-500 checked:border-emerald-600 hover:bg-zinc-700 [--tglbg:theme(colors.zinc.400)] checked:[--tglbg:theme(colors.zinc.900)]"
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                    />
                    <span className={`text-sm font-medium tracking-wide transition-colors duration-200 flex items-center ${isYearly ? 'text-zinc-100' : 'text-zinc-500'}`}>
                        Yearly
                        <span className="ml-2 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                            Save 20%
                        </span>
                    </span>
                </div>

                <div className="pricing-cards-container grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                    {/* Tier 1: Starter (Added relative) */}
                    <div className="single-pricing-tier relative flex flex-col justify-between p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl hover:border-zinc-700 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                        <div>
                            <h3 className="text-xl font-bold text-zinc-100 mb-2">Starter</h3>
                            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Perfect for individuals and small teams getting started with AI.</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-zinc-100 tracking-tight">${isYearly ? '24' : '29'}</span>
                                <span className="text-zinc-500 text-sm font-medium">/month</span>
                            </div>

                            <ul className="space-y-4 text-sm mb-8">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">Up to 5 team members</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">5,000 automated tasks/mo</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">Core multi-app workflow tools</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">Standard web support</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-block bg-transparent hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 border border-zinc-700 hover:border-zinc-600 rounded-xl font-medium tracking-wide transition-all duration-200">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Tier 2: Pro */}
                    <div className="single-pricing-tier relative flex flex-col justify-between p-8 bg-zinc-900/40 backdrop-blur-md border-2 border-emerald-500/50 rounded-2xl shadow-[0_20px_40px_rgba(16,185,129,0.1)]">
                        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-zinc-950 text-[10px] font-mono font-bold px-3 py-1 rounded-md uppercase tracking-widest whitespace-nowrap shadow-md">
                            Most Popular
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-zinc-100 mb-2">Pro</h3>
                            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Designed for expanding businesses needing deep insights.</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-zinc-100 tracking-tight">${isYearly ? '64' : '79'}</span>
                                <span className="text-zinc-500 text-sm font-medium">/month</span>
                            </div>

                            <ul className="space-y-4 text-sm mb-8">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-100 font-semibold">Unlimited team members</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">50,000 automated tasks/mo</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">Advanced deep data analysis</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">Priority 24/7 support setup</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-block bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold tracking-wide border-none rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20">
                                Start Free Trial
                            </button>
                        </div>
                    </div>

                    {/* Tier 3: Enterprise (Added relative) */}
                    <div className="single-pricing-tier relative flex flex-col justify-between p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl hover:border-zinc-700 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                        <div>
                            <h3 className="text-xl font-bold text-zinc-100 mb-2">Enterprise</h3>
                            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Custom features and strict security controls for organizations.</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-zinc-100 tracking-tight">Custom</span>
                            </div>

                            <ul className="space-y-4 text-sm mb-8">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">Custom volume task limits</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">Dedicated isolated database arrays</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">SSO, SAML, and premium security</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="text-zinc-300">Dedicated success manager</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-block bg-transparent hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 border border-zinc-700 hover:border-zinc-600 rounded-xl font-medium tracking-wide transition-all duration-200">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PricingSection;