"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GridBackground = () => {
    useGSAP(() => {
        gsap.to(".grid-pattern", {
            backgroundPosition: "0px 100px",
            duration: 20,
            repeat: -1,
            ease: "none",
        });
    });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="grid-pattern absolute inset-0" />
        </div>
    );
};

export default GridBackground;