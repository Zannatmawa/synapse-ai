"use client"
import React, { useState } from 'react'

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-20 px-4 bg-base-100 text-base-content w-full">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-8">
                    <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Pricing Plans</div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Simple, transparent pricing plans
                    </h2>
                    <p className="text-base-content/70 max-w-md mx-auto">
                        Start small and scale up as your automation needs grow. Cancel or change plans at any time.
                    </p>
                </div>

                {/* Billing Toggle Switch */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <span className={`text-sm font-medium ${!isYearly ? 'text-base-content' : 'text-base-content/50'}`}>Monthly</span>
                    <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                    />
                    <span className={`text-sm font-medium ${isYearly ? 'text-base-content' : 'text-base-content/50'}`}>
                        Yearly <span className="badge badge-success badge-sm ml-1 text-white font-bold">Save 20%</span>
                    </span>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                    {/* Tier 1: Starter */}
                    <div className="card bg-base-100 border border-base-300 shadow-xs flex flex-col justify-between">
                        <div className="card-body p-8">
                            <h3 className="text-xl font-bold mb-2">Starter</h3>
                            <p className="text-base-content/60 text-sm mb-6">Perfect for individuals and small teams getting started with AI.</p>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-black">${isYearly ? '24' : '29'}</span>
                                <span className="text-base-content/60 text-sm">/month</span>
                            </div>

                            <ul className="space-y-3 text-sm mb-8">
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>Up to 5 team members</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>5,000 automated tasks/mo</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>Core multi-app workflow tools</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>Standard web support</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 pt-0">
                            <button className="btn btn-outline btn-block">Get Started</button>
                        </div>
                    </div>

                    {/* Tier 2: Pro (Highlighted with Neutral Canvas background) */}
                    <div className="card bg-neutral text-neutral-content shadow-md relative flex flex-col justify-between">
                        {/* Popular Badge */}
                        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-primary-content text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>

                        <div className="card-body p-8">
                            <h3 className="text-xl font-bold mb-2">Pro</h3>
                            <p className="text-neutral-content/70 text-sm mb-6">Designed for expanding businesses needing deep insights.</p>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-black">${isYearly ? '64' : '79'}</span>
                                <span className="text-neutral-content/60 text-sm">/month</span>
                            </div>

                            <ul className="space-y-3 text-sm mb-8">
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span className="font-semibold">Unlimited team members</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>50,000 automated tasks/mo</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>Advanced deep data analysis</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>Priority 24/7 support setup</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 pt-0">
                            <button className="btn btn-primary text-white btn-block">Start Free Trial</button>
                        </div>
                    </div>

                    {/* Tier 3: Enterprise */}
                    <div className="card bg-base-100 border border-base-300 shadow-xs flex flex-col justify-between">
                        <div className="card-body p-8">
                            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                            <p className="text-base-content/60 text-sm mb-6">Custom features and strict security controls for organizations.</p>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-black">Custom</span>
                            </div>

                            <ul className="space-y-3 text-sm mb-8">
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>Custom volume task limits</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>Dedicated isolated database arrays</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>SSO, SAML, and premium security</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-success"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                    <span>Dedicated success manager</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 pt-0">
                            <button className="btn btn-outline btn-block">Contact Sales</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PricingSection