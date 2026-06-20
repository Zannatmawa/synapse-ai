"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link'; // or 'react-router-dom' depending on your setup
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

    // Centralized route definition for clean parsing
    const navLinks = [
        { label: "Features", href: "/features" },
        { label: "Solutions", href: "/solutions" },
        { label: "Pricing", href: "/pricing" },
        { label: "Testimonials", href: "/testimonials" },
    ];

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
                        {/* Mobile Dropdown Navigation */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-zinc-900/95 border border-zinc-800 backdrop-blur-xl rounded-2xl z-[1] mt-3 w-52 p-3 shadow-2xl gap-1 text-zinc-300">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-emerald-400 py-2 block w-full">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src="/logo.png"
                            alt="Synapse AI Logo"
                            width={220}
                            height={220}
                            priority
                        />

                    </Link>
                </div>
                <div className="hidden lg:flex items-center">
                    <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-emerald-400 text-zinc-400 transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <Link href="/register" className="h-10 px-5 flex items-center justify-center rounded-xl font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.2)] text-sm tracking-wide">
                        Start Free Trial
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NavigationBar;