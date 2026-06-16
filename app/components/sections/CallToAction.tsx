import React from 'react'

const CtaSection = () => {
    return (
        <section className="w-full bg-neutral text-neutral-content py-16 px-4">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                {/* Headline */}
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                    Ready to build your workspace <br />
                    that <span className="text-primary">thinks ahead?</span>
                </h2>

                {/* Subtext */}
                <p className="text-neutral-content/70 max-w-xl text-md md:text-lg mb-8 leading-relaxed">
                    Join over 10,000+ professionals automating manual work sequences and unlocking predictive data insights daily. No credit card required.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                    <button className="btn btn-primary text-white px-8 md:text-md">
                        Start Your Free Trial
                    </button>
                    <button className="btn btn-outline btn-neutral text-neutral-content px-8 border-neutral-content/20 hover:border-neutral-content">
                        Schedule Demo
                    </button>
                </div>

                {/* Micro-Copy */}
                <p className="text-xs text-neutral-content/40 mt-4">
                    14-day trial period • Instant configuration • Cancel anytime
                </p>

            </div>
        </section>
    )
}

export default CtaSection