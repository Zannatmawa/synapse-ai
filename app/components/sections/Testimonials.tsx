import React from 'react'

const TestimonialsSection = () => {
    return (
        <section className="py-20 px-4 bg-base-200 text-base-content w-full">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Testimonials</div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        What teams are saying about Synapse AI
                    </h2>
                    <p className="text-base-content/70 max-w-md mx-auto">
                        See how modern operations leaders are cutting down delivery times and manual busywork.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Testimonial 1 */}
                    <div className="card bg-base-100 shadow-xs border border-base-300">
                        <div className="card-body justify-between">
                            <div>
                                {/* Rating Stars */}
                                <div className="rating rating-sm gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-warning text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-base-content/80 text-sm italic leading-relaxed">
                                    "Synapse completely reshaped how we handle data analysis. Tasks that used to take our analysts a full afternoon to compile are now generated as clean dashboards in under two minutes."
                                </p>
                            </div>

                            {/* User Profile */}
                            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-base-200">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                        <span>SR</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Sarah Jenkins</h4>
                                    <p className="text-xs text-base-content/60">VP of Operations, DataScale</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="card bg-base-100 shadow-xs border border-base-300">
                        <div className="card-body justify-between">
                            <div>
                                <div className="rating rating-sm gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-warning text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-base-content/80 text-sm italic leading-relaxed">
                                    "The multi-app automation pipelines are incredibly robust. We hooked Synapse directly into our GitHub and Slack channels, and it actively flags engineering anomalies before they break production."
                                </p>
                            </div>

                            {/* User Profile */}
                            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-base-200">
                                <div className="avatar placeholder">
                                    <div className="bg-primary text-primary-content w-10 rounded-full">
                                        <span>MK</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Marcus Chen</h4>
                                    <p className="text-xs text-base-content/60">Lead DevOps, CloudNode</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="card bg-base-100 shadow-xs border border-base-300">
                        <div className="card-body justify-between">
                            <div>
                                <div className="rating rating-sm gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-warning text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-base-content/80 text-sm italic leading-relaxed">
                                    "We were skeptical about data security at first, but Synapse integrated with our isolated datasets seamlessly. The predictive insights have already saved us roughly 12 hours a week per team member."
                                </p>
                            </div>

                            {/* User Profile */}
                            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-base-200">
                                <div className="avatar placeholder">
                                    <div className="bg-secondary text-secondary-content w-10 rounded-full">
                                        <span>EB</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Elena Rostova</h4>
                                    <p className="text-xs text-base-content/60">Product Director, ApexFlow</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection