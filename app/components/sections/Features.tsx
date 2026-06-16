import React from 'react'

const FeaturesSection = () => {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto w-full bg-base-100 text-base-content">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Everything you need to scale operations
                </h2>
                <p className="text-base-content/70 max-w-xl mx-auto">
                    Stop bouncing between fractured tools. Synapse AI unites your operations under a single, highly predictive ecosystem.
                </p>
            </div>

            {/* Features Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Feature 1: Automate Workflows */}
                <div className="card bg-base-100 border border-base-300 shadow-xs hover:shadow-md transition-all duration-200">
                    <div className="card-body">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <h3 className="card-title text-xl font-bold">Automate Workflows</h3>
                        <p className="text-base-content/70 text-sm leading-relaxed">
                            Build complex multi-app chains instantly. Let AI trigger actions, follow custom business rules, and eliminate manual busywork background tasks.
                        </p>
                    </div>
                </div>

                {/* Feature 2: Analyze Deep Data */}
                <div className="card bg-base-100 border border-base-300 shadow-xs hover:shadow-md transition-all duration-200">
                    <div className="card-body">
                        <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                            </svg>
                        </div>
                        <h3 className="card-title text-xl font-bold">Analyze Deep Data</h3>
                        <p className="text-base-content/70 text-sm leading-relaxed">
                            Drop in heavy databases or complex spreadsheets. Get comprehensive real-time visualizations and core anomaly updates instantly.
                        </p>
                    </div>
                </div>

                {/* Feature 3: Generate Insights */}
                <div className="card bg-base-100 border border-base-300 shadow-xs hover:shadow-md transition-all duration-200">
                    <div className="card-body">
                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l8.982-11.795H13.19l.812-5.109L5 15.904h4.813Z" />
                            </svg>
                        </div>
                        <h3 className="card-title text-xl font-bold">Generate Insights</h3>
                        <p className="text-base-content/70 text-sm leading-relaxed">
                            Walk into meetings with predictive answers. Receive high-level summaries and actionable growth options curated directly for your team ecosystem.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FeaturesSection