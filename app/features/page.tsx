// "use client";

// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function FeaturesSection() {
//     const containerRef = useRef(null);

//     useGSAP(() => {
//         gsap.from(".features-badge", {
//             y: 15,
//             opacity: 0,
//             duration: 0.4,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: ".feature-wrapper",
//                 start: "top 85%",
//             },
//         });

//         gsap.from(".features-title", {
//             y: 20,
//             opacity: 0,
//             duration: 0.5,
//             delay: 0.05,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: ".feature-wrapper",
//                 start: "top 85%",
//             },
//         });

//         gsap.from(".features-desc", {
//             y: 15,
//             opacity: 0,
//             duration: 0.5,
//             delay: 0.1,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: ".feature-wrapper",
//                 start: "top 85%",
//             },
//         });

//         const singleCards = document.querySelectorAll(".single-feature-card");
//         singleCards.forEach((card, index) => {
//             const dynamicDirection = index % 2 === 0 ? -25 : 25;

//             gsap.from(card, {
//                 x: dynamicDirection,
//                 opacity: 0,
//                 duration: 0.45,
//                 delay: index * 0.08,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: ".features-grid-container",
//                     start: "top 85%",
//                 },
//             });
//         });
//     }, { scope: containerRef });

//     return (
//         <section ref={containerRef} className="feature-wrapper py-24 px-6 w-full bg-transparent text-zinc-300 relative overflow-hidden">

//             <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none select-none" />

//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-20">
//                     <div className="features-badge text-emerald-400 font-mono text-xs tracking-widest uppercase mb-3">
//                         ✦ Core Capabilities
//                     </div>
//                     <h2 className="features-title text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
//                         Engineered for speed, built for scale
//                     </h2>
//                     <p className="features-desc text-zinc-400 max-w-lg mx-auto text-base font-normal leading-relaxed">
//                         Unlock deep structural optimization tools with automated architectures configured to supercharge system processes.
//                     </p>
//                 </div>

//                 <div className="features-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

//                     <div className="single-feature-card group flex flex-col justify-between p-6 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 hover:border-zinc-700/80 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                         <div>
//                             <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:border-emerald-500/30 group-hover:bg-zinc-800/50 transition-colors duration-300">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
//                             </div>

//                             <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors duration-200">
//                                 Task Automation
//                             </h3>
//                             <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                                 Instantly deploy custom background triggers that coordinate multi-app system flows dynamically.
//                             </p>
//                         </div>
//                         <div className="mt-6 text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">
//                         </div>
//                     </div>

//                     <div className="single-feature-card group flex flex-col justify-between p-6 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 hover:border-zinc-700/80 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                         <div>
//                             <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:border-emerald-500/30 group-hover:bg-zinc-800/50 transition-colors duration-300">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
//                             </div>

//                             <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors duration-200">
//                                 Predictive Insights
//                             </h3>
//                             <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                                 Isolate runtime bottlenecks and map incoming dataset matrices into real-time visual projections.
//                             </p>
//                         </div>
//                         <div className="mt-6 text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">
//                         </div>
//                     </div>

//                     <div className="single-feature-card group flex flex-col justify-between p-6 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 hover:border-zinc-700/80 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                         <div>
//                             <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:border-emerald-500/30 group-hover:bg-zinc-800/50 transition-colors duration-300">
//                                 <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
//                             </div>

//                             <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors duration-200">
//                                 Secure Isolation
//                             </h3>
//                             <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                                 Strict end-to-end multi-tenant security layers keeping your workspace configuration entirely localized.
//                             </p>
//                         </div>
//                         <div className="mt-6 text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">
//                         </div>
//                     </div>

//                     <div className="single-feature-card group flex flex-col justify-between p-6 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 hover:border-zinc-700/80 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                         <div>
//                             <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:border-emerald-500/30 group-hover:bg-zinc-800/50 transition-colors duration-300">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
//                             </div>

//                             <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors duration-200">
//                                 Connected Arrays
//                             </h3>
//                             <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                                 Link unified database clusters with third-party webhooks instantly via custom routing endpoints.
//                             </p>
//                         </div>
//                         <div className="mt-6 text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }
"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const FeaturesBento = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".bento-item", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%"
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto w-full bg-transparent text-zinc-300">
            <div className="mb-12">
                <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// CORE ARCHITECTURE</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-100 mt-2 tracking-tight">Engineered for speed</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Wide Feature Card (Takes 2 columns) */}
                <div className="bento-item md:col-span-2 p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl flex flex-col justify-between min-h-[300px]">
                    <div>
                        <div className="text-emerald-400 font-mono text-xs mb-4">[⚡ 01]</div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2">Task Automation Engine</h3>
                        <p className="text-zinc-400 text-sm max-w-md">Instantly sync runtime logs and trigger micro-tasks across multi-app nodes with zero native setup friction.</p>
                    </div>
                    <div className="mt-6 font-mono text-[11px] text-zinc-600 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/40">
                        SYSTEM_STATUS: OPERATIONAL // LATENCY: 12ms
                    </div>
                </div>

                {/* Standard Card */}
                <div className="bento-item p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div className="text-emerald-400 font-mono text-xs mb-4">[📊 02]</div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2">Predictive Insights</h3>
                        <p className="text-zinc-400 text-sm">Analyze distributed streaming anomalies securely.</p>
                    </div>
                </div>

                {/* Standard Card */}
                <div className="bento-item p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div className="text-emerald-400 font-mono text-xs mb-4">[🔒 03]</div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2">Secure Isolation</h3>
                        <p className="text-zinc-400 text-sm">Data streams stay isolated using end-to-end sandbox parameters.</p>
                    </div>
                </div>

                {/* Wide Feature Card */}
                <div className="bento-item md:col-span-2 p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div className="text-emerald-400 font-mono text-xs mb-4">[⚙️ 04]</div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2">Connected Frameworks</h3>
                        <p className="text-zinc-400 text-sm">Deploy triggers directly into production routines through enterprise-level webhooks.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesBento;