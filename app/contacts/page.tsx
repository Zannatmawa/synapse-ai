"use client"
import React, { useState, useEffect } from 'react'

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="min-h-screen w-full bg-transparent text-zinc-300 py-24 px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                <div
                    style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'none' : 'translateX(-20px)',
                        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                    }}
                >
                    <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-3">
                        ✦ Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
                        Let's connect
                    </h1>
                    <p className="text-zinc-400 text-base leading-relaxed mb-8">
                        Have a question about architectures, pipeline automation, or just want to chat? Drop a message.
                    </p>

                    <div className="space-y-4 font-mono text-sm text-zinc-400">
                        <div className="flex items-center gap-3">
                            <span className="text-emerald-400">✉</span> support@workspace.io
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-emerald-400">✦</span> Response time: Within 24 hours
                        </div>
                    </div>
                </div>

                <div
                    className="p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl shadow-xl"
                    style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'none' : 'translateX(20px)',
                        transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
                    }}
                >
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 transition-all duration-200 focus:scale-[1.01]"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 transition-all duration-200 focus:scale-[1.01]"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Message</label>
                            <textarea
                                rows={4}
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 transition-all duration-200 focus:scale-[1.01] resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold tracking-wide border-none rounded-xl py-3 px-4 transition-all duration-200 active:scale-[0.98] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default ContactPage;