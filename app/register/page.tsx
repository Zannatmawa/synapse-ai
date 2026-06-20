"use client"
import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".register-card", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        });
    }, { scope: containerRef });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section ref={containerRef} className="min-h-screen w-full bg-transparent text-zinc-300 flex items-center justify-center py-12 px-6">
            <div className="register-card w-full max-w-md p-8 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl shadow-xl">

                <div className="text-center mb-8">
                    <div className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-2">
                        ✦ Get Started
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-zinc-100">
                        Create your account
                    </h1>
                    <p className="text-zinc-400 text-sm mt-2">
                        Start your 14-day free trial instantly.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Full Name</label>
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
                        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 transition-all duration-200 focus:scale-[1.01]"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold tracking-wide border-none rounded-xl py-3 px-4 transition-all duration-200 active:scale-[0.98] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center text-xs text-zinc-500">
                    Already have an account?{' '}
                    <a href="/login" className="text-emerald-400 hover:underline">
                        Sign in
                    </a>
                </div>

            </div>
        </section>
    )
}

export default RegisterPage;