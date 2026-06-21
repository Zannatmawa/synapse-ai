'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AmbientBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const blob1Ref = useRef<HTMLDivElement>(null);
    const blob2Ref = useRef<HTMLDivElement>(null);
    const blob3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure animation context safely clears if component unmounts
        const ctx = gsap.context(() => {

            // Animation for Blob 1 (Top Left Emerald)
            gsap.to(blob1Ref.current, {
                x: '12vw',
                y: '8vh',
                scale: 1.15,
                duration: 14,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            });

            // Animation for Blob 2 (Bottom Right Teal)
            gsap.to(blob2Ref.current, {
                x: '-8vw',
                y: '-12vh',
                scale: 0.9,
                duration: 18,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            });

            // Animation for Blob 3 (Center Pastel Mint)
            gsap.to(blob3Ref.current, {
                x: '-15vw',
                y: '5vh',
                scale: 1.3,
                duration: 11,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            });
        }, containerRef);

        return () => ctx.revert(); // Clean up animations to prevent memory leaks
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden bg-[#F8F9FA] pointer-events-none"
        >
            <div
                ref={blob1Ref}
                className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full opacity-40 mix-blend-multiply blur-[90px] will-change-transform"
                style={{ background: 'radial-gradient(circle, #00E699 0%, rgba(0,230,153,0) 70%)' }}
            />
            <div
                ref={blob2Ref}
                className="absolute bottom-[-5%] right-[-5%] w-[55vw] h-[55vw] rounded-full opacity-40 mix-blend-multiply blur-[90px] will-change-transform"
                style={{ background: 'radial-gradient(circle, #00B4D8 0%, rgba(0,180,216,0) 70%)' }}
            />
            <div
                ref={blob3Ref}
                className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full opacity-40 mix-blend-multiply blur-[90px] will-change-transform"
                style={{ background: 'radial-gradient(circle, #72EFDD 0%, rgba(114,239,221,0) 70%)' }}
            />
        </div>
    );
}