// "use client";

// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function FeaturesSection() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const headerRef = useRef<HTMLDivElement>(null);
//     const gridRef = useRef<HTMLDivElement>(null);

//     useGSAP(
//         () => {
//             if (!headerRef.current || !gridRef.current) return;

//             gsap.from(headerRef.current, {
//                 y: 60,
//                 opacity: 0,
//                 duration: 1,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: headerRef.current,
//                     start: "top 85%",
//                     toggleActions: "play none none reverse",
//                     markers: true,
//                 },
//             });

//             gsap.from(gridRef.current.querySelectorAll(".feature-card"), {
//                 y: 80,
//                 opacity: 0,
//                 duration: 0.8,
//                 stagger: 0.2,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: gridRef.current,
//                     start: "top 80%",
//                     toggleActions: "play none none reverse",
//                     markers: true,
//                 },
//             });
//         },
//         { scope: sectionRef }
//     );

//     return (
//         <section
//             ref={sectionRef}
//             className="py-24 px-6 max-w-7xl mx-auto w-full bg-transparent text-zinc-300"
//         >
//             <div ref={headerRef} className="text-center mb-20">
//                 <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
//                     Everything you need to scale operations
//                 </h2>
//                 <p className="text-zinc-400 max-w-xl mx-auto text-base md:text-lg">
//                     Stop bouncing between fractured tools. Synapse AI unites your
//                     operations under a single, highly predictive ecosystem.
//                 </p>
//             </div>

//             <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 <div className="feature-card group bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-8 hover:border-teal-500/30 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                     <div className="w-12 h-12 bg-teal-500/10 text-teal-400 rounded-xl flex items-center justify-center mb-6 border border-teal-500/20 group-hover:scale-110 transition-transform duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
//                         </svg>
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-3">Analyze Deep Data</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                         Drop in heavy databases or complex spreadsheets. Get comprehensive real-time visualizations and core anomaly updates instantly.
//                     </p>
//                 </div>

//                 <div className="feature-card group bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-8 hover:border-emerald-500/30 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                     <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
//                         </svg>
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-3">Automate Workflows</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                         Build complex multi-app chains instantly. Let AI trigger actions, follow custom business rules, and eliminate manual busywork background tasks.
//                     </p>
//                 </div>

//                 <div className="feature-card group bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-8 hover:border-cyan-500/30 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
//                     <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l8.982-11.795H13.19l.812-5.109L5 15.904h4.813Z" />
//                         </svg>
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-3">Generate Insights</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed font-normal">
//                         Walk into meetings with predictive answers. Receive high-level summaries and actionable growth options curated directly for your team ecosystem.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }