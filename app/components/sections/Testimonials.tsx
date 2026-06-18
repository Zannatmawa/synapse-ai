import React from 'react'

const TestimonialsSection = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full bg-transparent text-zinc-300">

            <div className="text-center mb-20">
                <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-3">
                    ✦ Testimonials
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
                    What teams are saying about Synapse AI
                </h2>
                <p className="text-zinc-400 max-w-md mx-auto text-base font-normal">
                    See how modern operations leaders are cutting down delivery times and manual busywork.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="group flex flex-col justify-between p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                    <div>
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-emerald-400 text-base">★</span>
                            ))}
                        </div>
                        <p className="text-zinc-300 text-sm italic leading-relaxed font-normal">
                            "Synapse completely reshaped how we handle data analysis. Tasks that used to take our analysts a full afternoon to compile are now generated as clean dashboards in under two minutes."
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-800/60">
                        <div className="avatar placeholder">
                            <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold">
                                SR
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-zinc-100">Sarah Jenkins</h4>
                            <p className="text-xs text-zinc-400">VP of Operations, DataScale</p>
                        </div>
                    </div>
                </div>

                <div className="group flex flex-col justify-between p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                    <div>
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-emerald-400 text-base">★</span>
                            ))}
                        </div>
                        <p className="text-zinc-300 text-sm italic leading-relaxed font-normal">
                            "The multi-app automation pipelines are incredibly robust. We hooked Synapse directly into our GitHub and Slack channels, and it actively flags engineering anomalies before they break production."
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-800/60">
                        <div className="avatar placeholder">
                            <div className="bg-teal-500/10 text-teal-400 border border-teal-500/20 w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold">
                                MK
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-zinc-100">Marcus Chen</h4>
                            <p className="text-xs text-zinc-400">Lead DevOps, CloudNode</p>
                        </div>
                    </div>
                </div>

                <div className="group flex flex-col justify-between p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                    <div>
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-emerald-400 text-base">★</span>
                            ))}
                        </div>
                        <p className="text-zinc-300 text-sm italic leading-relaxed font-normal">
                            "We were skeptical about data security at first, but Synapse integrated with our isolated datasets seamlessly. The predictive insights have already saved us roughly 12 hours a week per team member."
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-800/60">
                        <div className="avatar placeholder">
                            <div className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold">
                                ER
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-zinc-100">Elena Rostova</h4>
                            <p className="text-xs text-zinc-400">Product Director, ApexFlow</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TestimonialsSection