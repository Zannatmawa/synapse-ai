"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import GridBackground from '../components/GridBackground'

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
            <GridBackground />
            <div className="mb-12">
                <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">CORE ARCHITECTURE</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-100 mt-2 tracking-tight">Engineered for speed</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bento-item md:col-span-2 p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl flex flex-col justify-between min-h-75">
                    <div>
                        <div className="text-emerald-400 font-mono text-xs mb-4">[⚡ 01]</div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2">Task Automation Engine</h3>
                        <p className="text-zinc-400 text-sm max-w-md">Instantly sync runtime logs and trigger micro-tasks across multi-app nodes with zero native setup friction.</p>
                    </div>
                    <div className="mt-6 font-mono text-[11px] text-zinc-600 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/40">
                        SYSTEM_STATUS: OPERATIONAL // LATENCY: 12ms
                    </div>
                </div>
                <div className="bento-item p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div className="text-emerald-400 font-mono text-xs mb-4">[📊 02]</div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2">Predictive Insights</h3>
                        <p className="text-zinc-400 text-sm">Analyze distributed streaming anomalies securely.</p>
                    </div>
                </div>

                <div className="bento-item p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div className="text-emerald-400 font-mono text-xs mb-4">[🔒 03]</div>
                        <h3 className="text-xl font-bold text-zinc-100 mb-2">Secure Isolation</h3>
                        <p className="text-zinc-400 text-sm">Data streams stay isolated using end-to-end sandbox parameters.</p>
                    </div>
                </div>
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