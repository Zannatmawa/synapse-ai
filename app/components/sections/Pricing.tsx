"use client"
import React, { useState } from 'react'

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        // <section className="py-20 px-4 bg-base-100 text-base-content w-full">
        //     <div className="max-w-6xl mx-auto">

        //         {/* Section Header */}
        //         <div className="text-center mb-8">
        //             <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Pricing Plans</div>
        //             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        //                 Simple, transparent pricing plans
        //             </h2>
        //             <p className="text-base-content/70 max-w-md mx-auto">
        //                 Start small and scale up as your automation needs grow. Cancel or change plans at any time.
        //             </p>
        //         </div>

        //         {/* Billing Toggle Switch */}
        //         <div className="flex items-center justify-center gap-4 mb-16">
        //             <span className={`text-sm font-medium ${!isYearly ? 'text-base-content' : 'text-base-content/50'}`}>Monthly</span>
        //             <input
        //                 type="checkbox"
        //                 className="toggle toggle-primary"
        //                 checked={isYearly}
        //                 onChange={() => setIsYearly(!isYearly)}
        //             />
        //             <span className={`text-sm font-medium ${isYearly ? 'text-base-content' : 'text-base-content/50'}`}>
        //                 Yearly <span className="badge badge-success badge-sm ml-1 text-white font-bold">Save 20%</span>
        //             </span>
        //         </div>

        //         {/* Pricing Cards Grid */}
        //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

        //             {/* Tier 1: Starter */}
        //             <div className="card bg-base-100 border border-base-300 shadow-xs flex flex-col justify-between">
        //                 <div className="card-body p-8">
        //                     <h3 className="text-xl font-bold mb-2">Starter</h3>
        //                     <p className="text-base-content/60 text-sm mb-6">Perfect for individuals and small teams getting started with AI.</p>

        //                     <div className="flex items-baseline gap-1 mb-6">
        //                         <span className="text-4xl font-black">${isYearly ? '24' : '29'}</span>
        //                         <span className="text-base-content/60 text-sm">/month</span>
        //                     </div>

        //                     <ul className="space-y-3 text-sm mb-8">
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>Up to 5 team members</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>5,000 automated tasks/mo</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>Core multi-app workflow tools</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>Standard web support</span>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div className="p-8 pt-0">
        //                     <button className="btn btn-outline btn-block">Get Started</button>
        //                 </div>
        //             </div>

        //             {/* Tier 2: Pro (Highlighted with Neutral Canvas background) */}
        //             <div className="card bg-neutral text-neutral-content shadow-md relative flex flex-col justify-between">
        //                 {/* Popular Badge */}
        //                 <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-primary-content text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        //                     Most Popular
        //                 </div>

        //                 <div className="card-body p-8">
        //                     <h3 className="text-xl font-bold mb-2">Pro</h3>
        //                     <p className="text-neutral-content/70 text-sm mb-6">Designed for expanding businesses needing deep insights.</p>

        //                     <div className="flex items-baseline gap-1 mb-6">
        //                         <span className="text-4xl font-black">${isYearly ? '64' : '79'}</span>
        //                         <span className="text-neutral-content/60 text-sm">/month</span>
        //                     </div>

        //                     <ul className="space-y-3 text-sm mb-8">
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span className="font-semibold">Unlimited team members</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>50,000 automated tasks/mo</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>Advanced deep data analysis</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>Priority 24/7 support setup</span>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div className="p-8 pt-0">
        //                     <button className="btn btn-primary text-white btn-block">Start Free Trial</button>
        //                 </div>
        //             </div>

        //             {/* Tier 3: Enterprise */}
        //             <div className="card bg-base-100 border border-base-300 shadow-xs flex flex-col justify-between">
        //                 <div className="card-body p-8">
        //                     <h3 className="text-xl font-bold mb-2">Enterprise</h3>
        //                     <p className="text-base-content/60 text-sm mb-6">Custom features and strict security controls for organizations.</p>

        //                     <div className="flex items-baseline gap-1 mb-6">
        //                         <span className="text-4xl font-black">Custom</span>
        //                     </div>

        //                     <ul className="space-y-3 text-sm mb-8">
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>Custom volume task limits</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>Dedicated isolated database arrays</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>SSO, SAML, and premium security</span>
        //                         </li>
        //                         <li className="flex items-center gap-2">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
        //                             <span>Dedicated success manager</span>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div className="p-8 pt-0">
        //                     <button className="btn btn-outline btn-block">Contact Sales</button>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </section>
        <section className="py-24 px-6 w-full bg-transparent text-zinc-300">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-3">
                        ✦ Pricing Plans
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
                        Simple, transparent pricing plans
                    </h2>
                    <p className="text-zinc-400 max-w-md mx-auto text-base font-normal">
                        Start small and scale up as your automation needs grow. Cancel or change plans at any time.
                    </p>
                </div>

                {/* Billing Toggle Switch */}
                <div className="flex items-center justify-center gap-4 mb-16">
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

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                    {/* Tier 1: Starter */}
                    <div className="flex flex-col justify-between p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl hover:border-zinc-700 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
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

                    {/* Tier 2: Pro (Highlighted with Emerald Gradient Accent) */}
                    <div className="relative flex flex-col justify-between p-8 bg-zinc-900/40 backdrop-blur-md border-2 border-emerald-500/50 rounded-2xl shadow-[0_20px_40px_rgba(16,185,129,0.1)]">
                        {/* Popular Badge */}
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

                    {/* Tier 3: Enterprise */}
                    <div className="flex flex-col justify-between p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl hover:border-zinc-700 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
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

export default PricingSection