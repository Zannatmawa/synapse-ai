// "use client";
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import React from 'react'

// const NavigationBar = () => {
//     useGSAP(() => {
//         const navTween = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".navbar",
//                 start: "bottom top",
//             }
//         });
//         navTween.fromTo(".nav-bar", { backgroundColor: 'transparent' },
//             {
//                 backgroundColor: "#00000050",
//                 backgroundBlur: "blur(10px)",
//                 duration: 1,
//                 ease: "power1.inOut"
//             });
//     })

//     return (
//         <div className="navbar bg-black text-white  shadow-sm px-4">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul
//                         // tabIndex="-1"
//                         className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                         <li><a>Features</a></li>
//                         <li><a>Solutions</a></li>
//                         <li><a>Pricing</a></li>
//                         <li><a>Testimonials</a></li>
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl font-bold tracking-tight">Synapse AI</a>
//             </div>

//             <div className="navbar-center nav-bar hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1 gap-2">
//                     <li><a>Features</a></li>
//                     <li><a>Solutions</a></li>
//                     <li><a>Pricing</a></li>
//                     <li><a>Testimonials</a></li>
//                 </ul>
//             </div>

//             <div className="navbar-end">
//                 <a className="btn btn-primary text-white">Start Free Trial</a>
//             </div>
//         </div>
//     )
// }

// export default NavigationBar
"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const NavigationBar = () => {
    useGSAP(() => {
        gsap.to(".nav-container", {
            backgroundColor: "rgba(9, 10, 15, 0.4)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(255, 255, 255, 0.08)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "body",
                start: "top -40px",
                toggleActions: "play none none reverse",
            }
        });
    });

    return (
        <div className="nav-container fixed top-0 left-0 right-0 z-50 bg-transparent text-zinc-300 border-b border-transparent transition-all duration-300 px-6 h-20 flex items-center">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 text-zinc-300 hover:bg-zinc-900/50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-zinc-900/95 border border-zinc-800 backdrop-blur-xl rounded-2xl z-[1] mt-3 w-52 p-3 shadow-2xl gap-1 text-zinc-300">
                            <li><a className="hover:text-emerald-400 py-2">Features</a></li>
                            <li><a className="hover:text-emerald-400 py-2">Solutions</a></li>
                            <li><a className="hover:text-emerald-400 py-2">Pricing</a></li>
                            <li><a className="hover:text-emerald-400 py-2">Testimonials</a></li>
                        </ul>
                    </div>
                    <a className="text-xl font-black tracking-tight text-zinc-100 hover:opacity-90 transition-opacity cursor-pointer">Synapse AI</a>
                </div>

                <div className="hidden lg:flex items-center">
                    <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
                        <li><a className="hover:text-emerald-400 text-zinc-400 transition-colors cursor-pointer">Features</a></li>
                        <li><a className="hover:text-emerald-400 text-zinc-400 transition-colors cursor-pointer">Solutions</a></li>
                        <li><a className="hover:text-emerald-400 text-zinc-400 transition-colors cursor-pointer">Pricing</a></li>
                        <li><a className="hover:text-emerald-400 text-zinc-400 transition-colors cursor-pointer">Testimonials</a></li>
                    </ul>
                </div>

                <div>
                    <a className="h-10 px-5 flex items-center justify-center rounded-xl font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.2)] text-sm tracking-wide cursor-pointer">
                        Start Free Trial
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NavigationBar;