"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Spotlight = () => {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const moveSpotlight = (e: MouseEvent) => {
            gsap.to(spotlightRef.current, {
                x: e.clientX - 300,
                y: e.clientY - 300,
                duration: 1,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", moveSpotlight);

        return () => {
            window.removeEventListener("mousemove", moveSpotlight);
        };
    });

    return (
        <div
            ref={spotlightRef}
            className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[180px]"
        />
    );
};

export default Spotlight;