"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Aurora = () => {
    useGSAP(() => {
        gsap.to(".aurora-1", {
            x: 150,
            y: 80,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(".aurora-2", {
            x: -120,
            y: -60,
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        gsap.to(".aurora-1", {
            x: 150,
            y: 80,
            rotation: 20,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="aurora-1 absolute w-125 h-125 rounded-full bg-[#00ffb3]/15 blur-[150px]" />

            <div className="aurora-2 absolute right-0 top-20 w-100 h-100 rounded-full bg-cyan-500/10 blur-[150px]" />
        </div>
    );
};

export default Aurora;