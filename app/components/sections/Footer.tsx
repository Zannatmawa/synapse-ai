import React from 'react'

const FooterSection = () => {
    return (
        // <footer className="w-full bg-base-300 text-base-content pt-16 pb-8 px-4 md:px-8 border-t border-base-300">
        //     <div className="max-w-6xl mx-auto">

        //         {/* Main Link Grid */}
        //         <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

        //             {/* Brand Column */}
        //             <div className="col-span-2 flex flex-col gap-3">
        //                 <span className="text-xl font-black tracking-tight text-base-content">
        //                     Synapse AI
        //                 </span>
        //                 <p className="text-sm text-base-content/60 max-w-xs leading-relaxed">
        //                     The intelligent operational workspace designed to automate workflow actions, map datasets, and supercharge team velocity.
        //                 </p>
        //             </div>

        //             {/* Column 1: Product */}
        //             <div className="flex flex-col gap-2">
        //                 <span className="footer-title text-xs font-bold uppercase tracking-wider text-base-content/40 mb-2">Product</span>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Features</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Solutions</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Pricing</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Integrations</a>
        //             </div>

        //             {/* Column 2: Company */}
        //             <div className="flex flex-col gap-2">
        //                 <span className="footer-title text-xs font-bold uppercase tracking-wider text-base-content/40 mb-2">Company</span>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">About Us</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Careers</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Blog</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Press Kit</a>
        //             </div>

        //             {/* Column 3: Legal */}
        //             <div className="flex flex-col gap-2">
        //                 <span className="footer-title text-xs font-bold uppercase tracking-wider text-base-content/40 mb-2">Legal</span>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Privacy Policy</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Terms of Service</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">Security</a>
        //                 <a className="link link-hover text-sm text-base-content/70 hover:text-primary">GDPR Status</a>
        //             </div>

        //         </div>

        //         {/* Divider Line */}
        //         <div className="border-t border-base-content/10 my-6"></div>

        //         {/* Sub Footer Row */}
        //         <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        //             <p className="text-xs text-base-content/50 text-center sm:text-left">
        //                 © {new Date().getFullYear()} Synapse AI Inc. All rights reserved.
        //             </p>

        //             {/* Social Media SVG Links */}
        //             <div className="flex gap-4">
        //                 {/* Twitter / X */}
        //                 <a className="text-base-content/50 hover:text-primary transition-colors cursor-pointer">
        //                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        //                         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        //                     </svg>
        //                 </a>
        //                 {/* GitHub */}
        //                 <a className="text-base-content/50 hover:text-primary transition-colors cursor-pointer">
        //                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        //                         <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        //                     </svg>
        //                 </a>
        //             </div>
        //         </div>

        //     </div>
        // </footer>
        <footer className="w-full bg-transparent text-zinc-400 pt-24 pb-12 px-6 border-t border-zinc-900/80 relative overflow-hidden">

            {/* Decorative industrial grid anchor background */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            <div className="max-w-7xl mx-auto">

                {/* Main Link Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2 flex flex-col gap-4">
                        <span className="text-xl font-extrabold tracking-tight text-zinc-100 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-base">✦</span> Synapse AI
                        </span>
                        <p className="text-sm text-zinc-400 max-w-sm leading-relaxed font-normal">
                            The intelligent operational workspace designed to automate workflow actions, map datasets, and supercharge team velocity.
                        </p>
                    </div>

                    {/* Column 1: Product */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-500 mb-2">Product</span>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Features</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Solutions</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Pricing</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Integrations</a>
                    </div>

                    {/* Column 2: Company */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-500 mb-2">Company</span>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">About Us</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Careers</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Blog</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Press Kit</a>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-500 mb-2">Legal</span>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Privacy Policy</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Terms of Service</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">Security</a>
                        <a className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer">GDPR Status</a>
                    </div>

                </div>

                {/* Divider Line */}
                <div className="border-t border-zinc-900/80 my-8"></div>

                {/* Sub Footer Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-zinc-500 text-center sm:text-left font-mono tracking-wide">
                        © {new Date().getFullYear()} Synapse AI Inc. All rights reserved.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-5">
                        {/* Twitter / X */}
                        <a className="text-zinc-500 hover:text-zinc-200 transition-colors duration-200 cursor-pointer" aria-label="Twitter">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a className="text-zinc-500 hover:text-zinc-200 transition-colors duration-200 cursor-pointer" aria-label="GitHub">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default FooterSection