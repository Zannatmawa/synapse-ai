import React from 'react'

const HowItWorksSection = () => {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto w-full bg-base-100 text-base-content">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Process</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Three steps to complete automation
                </h2>
                <p className="text-base-content/70 max-w-md mx-auto">
                    Getting started with Synapse AI is fast and seamless. Here is how you can transform your workflow today.
                </p>
            </div>

            {/* Steps Workflow Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                {/* Step 1 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 bg-base-200/50 rounded-2xl border border-base-300/60 relative">
                    <div className="absolute top-4 right-6 text-6xl font-black text-base-content/5 select-none">
                        01
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold mb-4 shadow-sm">
                        1
                    </div>
                    <h3 className="text-xl font-bold mb-2">Connect Your Tools</h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                        Integrate your current stack in a single click. Synapse pairs directly with Slack, Notion, GitHub, and over 1,000+ data sources natively.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 bg-base-200/50 rounded-2xl border border-base-300/60 relative">
                    <div className="absolute top-4 right-6 text-6xl font-black text-base-content/5 select-none">
                        02
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold mb-4 shadow-sm">
                        2
                    </div>
                    <h3 className="text-xl font-bold mb-2">Train Your Assistant</h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                        Point the AI toward your docs, previous projects, or guidelines. It reads context and safely adapts to your brand voice and team rules in minutes.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 bg-base-200/50 rounded-2xl border border-base-300/60 relative">
                    <div className="absolute top-4 right-6 text-6xl font-black text-base-content/5 select-none">
                        03
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-content flex items-center justify-center font-bold mb-4 shadow-sm">
                        3
                    </div>
                    <h3 className="text-xl font-bold mb-2">Deploy & Optimize</h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                        Run autonomous sequences instantly. Watch operational dashboards track metrics, handle requests, and flags anomalies dynamically.
                    </p>
                </div>

            </div>

            {/* Bottom Section Action Link */}
            <div className="text-center mt-12">
                <button className="btn btn-ghost text-primary hover:bg-primary/5 gap-2 group">
                    Ready to begin? Setup takes less than 5 minutes
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default HowItWorksSection