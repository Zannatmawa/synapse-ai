// "use client";
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// const HowItWorksSection = () => {
//     useGSAP(() => {
//         const steps = document.querySelectorAll(".step-card");

//         gsap.from(steps, {
//             y: 80,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.25,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: ".steps-wrapper",
//                 start: "top 80%",
//                 toggleActions: "play none none reverse",
//             },
//         });
//     }, []);
//     return (
//         <section className="steps-wrapper py-24 px-6 max-w-7xl mx-auto w-full bg-transparent text-zinc-300">
//             <div className="step-card text-center mb-20">
//                 <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-3">
//                     ✦ Process
//                 </div>
//                 <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
//                     Three steps to complete automation
//                 </h2>
//                 <p className="text-zinc-400 max-w-md mx-auto text-base font-normal">
//                     Getting started with Synapse AI is fast and seamless. Here is how you can transform your workflow today.
//                 </p>
//             </div>

//             <div className="step-card grid grid-cols-1 md:grid-cols-3 gap-8 relative">

//                 <div className="group flex flex-col items-center md:items-start text-center md:text-left p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl relative hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                     <div className="absolute top-4 right-6 text-6xl font-black text-zinc-800/20 font-mono select-none group-hover:text-emerald-500/10 transition-colors duration-300">
//                         01
//                     </div>
//                     <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-mono font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
//                         1
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-3">Connect Your Tools</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                         Integrate your current stack in a single click. Synapse pairs directly with Slack, Notion, GitHub, and over 1,000+ data sources natively.
//                     </p>
//                 </div>

//                 <div className="group flex flex-col items-center md:items-start text-center md:text-left p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl relative hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                     <div className="absolute top-4 right-6 text-6xl font-black text-zinc-800/20 font-mono select-none group-hover:text-teal-500/10 transition-colors duration-300">
//                         02
//                     </div>
//                     <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center font-mono font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
//                         2
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-3">Train Your Assistant</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                         Point the AI toward your docs, previous projects, or guidelines. It reads context and safely adapts to your brand voice and team rules in minutes.
//                     </p>
//                 </div>

//                 <div className="group flex flex-col items-center md:items-start text-center md:text-left p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl relative hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                     <div className="absolute top-4 right-6 text-6xl font-black text-zinc-800/20 font-mono select-none group-hover:text-cyan-500/10 transition-colors duration-300">
//                         03
//                     </div>
//                     <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
//                         3
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-3">Deploy & Optimize</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                         Run autonomous sequences instantly. Watch operational dashboards track metrics, handle requests, and flags anomalies dynamically.
//                     </p>
//                 </div>

//             </div>

//             <div className="step-card text-center mt-16">
//                 <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300 group cursor-pointer">
//                     Ready to begin? Setup takes less than 5 minutes
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                     </svg>
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default HowItWorksSection
"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ProcessTimeline = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".timeline-step", {
            opacity: 0,
            x: -20,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%"
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 max-w-4xl mx-auto w-full bg-transparent text-zinc-300">
            <div className="text-center mb-16">
                <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">✦ Execution Flow</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-100 mt-2 tracking-tight">Three steps to automation</h2>
            </div>

            <div className="relative border-l border-zinc-800 ml-4 md:ml-32 pl-8 space-y-12">

                {/* Step 1 */}
                <div className="timeline-step relative">
                    <div className="absolute -left-[41px] top-0 bg-zinc-950 border border-zinc-800 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-md">
                        1
                    </div>
                    <div className="md:absolute md:-left-36 md:top-0 font-mono text-xs text-zinc-600 uppercase tracking-wider">
                        [01 // CONNECT]
                    </div>
                    <div className="max-w-xl bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-zinc-100 mb-2">Connect Your Tools</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Integrate your active developer endpoints, access profiles, and database clusters securely within seconds.</p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="timeline-step relative">
                    <div className="absolute -left-[41px] top-0 bg-zinc-950 border border-zinc-800 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-md">
                        2
                    </div>
                    <div className="md:absolute md:-left-36 md:top-0 font-mono text-xs text-zinc-600 uppercase tracking-wider">
                        [02 // TRAIN]
                    </div>
                    <div className="max-w-xl bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-zinc-100 mb-2">Train Your Assistant</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Feed explicit runtime configuration schemas directly to your data arrays to streamline execution models.</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="timeline-step relative">
                    <div className="absolute -left-[41px] top-0 bg-zinc-950 border border-zinc-800 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-md">
                        3
                    </div>
                    <div className="md:absolute md:-left-36 md:top-0 font-mono text-xs text-zinc-600 uppercase tracking-wider">
                        [03 // OPTIMIZE]
                    </div>
                    <div className="max-w-xl bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-zinc-100 mb-2">Deploy & Optimize</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Run optimization logic autonomously while processing logs straight to your live production terminals safely.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProcessTimeline;