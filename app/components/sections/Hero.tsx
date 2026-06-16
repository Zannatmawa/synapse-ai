import React from 'react'

const HeroSection = () => {
    return (
        <div className="flex flex-col min-h-screen bg-base-100">
            {/* 2. HERO SECTION */}
            <div className="hero bg-base-200 flex-grow flex items-center justify-center py-16 px-4">
                <div className="hero-content text-center">
                    <div className="max-w-3xl flex flex-col items-center">

                        {/* Trust Indicator */}
                        <div className="inline-flex items-center gap-2 bg-base-100 border border-base-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-xs">
                            <span>⭐</span>
                            <span className="text-base-content/80">Trusted by 10,000+ professionals</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-base-content leading-tight">
                            The AI Workspace That <span className="text-primary">Thinks Ahead</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="py-6 text-lg md:text-xl text-base-content/70 max-w-2xl leading-relaxed">
                            Automate workflows, analyze data, and generate insights with an AI assistant designed for modern teams.
                        </p>

                        {/* Call To Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16">
                            <button className="btn btn-primary text-white px-8">Start Free Trial</button>
                            <button className="btn btn-outline px-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats Section */}
                        <div className="stats stats-vertical sm:stats-horizontal shadow-sm bg-base-100 w-full max-w-2xl border border-base-300">
                            <div className="stat">
                                <div className="stat-value text-primary text-3xl md:text-4xl">50K+</div>
                                <div className="stat-title font-medium mt-1 text-base-content/60">Active Users</div>
                            </div>

                            <div className="stat">
                                <div className="stat-value text-secondary text-3xl md:text-4xl">99.9%</div>
                                <div className="stat-title font-medium mt-1 text-base-content/60">Uptime</div>
                            </div>

                            <div className="stat">
                                <div className="stat-value text-accent text-3xl md:text-4xl">2M+</div>
                                <div className="stat-title font-medium mt-1 text-base-content/60">Tasks Automated</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection