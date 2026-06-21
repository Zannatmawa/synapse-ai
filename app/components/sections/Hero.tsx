"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import Aurora from '../Aurora';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".reveal-text", {
            y: -20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
        gsap.from(".hero-title-main", {
            y: 80,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power4.out"
        });
        gsap.from(".hero-title-highlight", {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            delay: 0.5,
            ease: "back.out(1.7)"
        });
        gsap.from(".hero-text", {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.7,
            ease: "power3.out"
        });
        gsap.from(".hero-btn", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "all"
        });
        gsap.from(".stats-card", {
            y: 50,
            opacity: 0,
            duration: 1.1,
            delay: 1.2,
            ease: "power4.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="relative overflow-hidden flex flex-col min-h-screen bg-zinc-950 overflow-hidden text-zinc-300">
            <Aurora />
            <div className="flex-grow flex items-center justify-center py-20 px-4 relative z-10">
                <div className="text-center">
                    <div className="max-w-3xl flex flex-col items-center">
                        <div className="reveal-text inline-flex items-center gap-2 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 text-xs font-mono tracking-wider uppercase px-4 py-1.5 rounded-full mb-8 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-zinc-400 ">Trusted by 10,000+ professionals</span>
                        </div>
                        <h1 className="hero-title-main text-5xl md:text-7xl font-extrabold text-zinc-100 tracking-tight mt-4 mb-6">
                            The AI Workspace That <br />
                            <span className="hero-title-highlight  font-serif font-normal italic text-emerald-400 low-case tracking-normal px-2">
                                thinks ahead
                            </span>
                        </h1>
                        <p className="hero-text py-6 text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
                            Automate workflows, analyze data, and generate insights with an AI assistant designed for modern teams.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-20">
                            <button className="hero-btn h-12 px-8 rounded-xl font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] tracking-wide">
                                Start Free Trial
                            </button>
                            <button className="hero-btn h-12 px-8 rounded-xl font-medium bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-200 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>
                                Watch Demo
                            </button>
                        </div>

                        <div className="stats-card grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/60 bg-zinc-900/30 backdrop-blur-xl w-full max-w-2xl border border-zinc-800/80 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="flex flex-col items-center justify-center p-4">
                                <div className="stat-value text-zinc-100 font-extrabold text-3xl md:text-4xl tracking-tight">50K+</div>
                                <div className="stat-title font-mono text-xs tracking-wider uppercase mt-2 text-zinc-500">Active Users</div>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4">
                                <div className="stat-value text-emerald-400 font-extrabold text-3xl md:text-4xl tracking-tight">99.9%</div>
                                <div className="stat-title font-mono text-xs tracking-wider uppercase mt-2 text-zinc-500">Uptime</div>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4">
                                <div className="stat-value text-cyan-400 font-extrabold text-3xl md:text-4xl tracking-tight">2M+</div>
                                <div className="stat-title font-mono text-xs tracking-wider uppercase mt-2 text-zinc-500">Tasks Automated</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;