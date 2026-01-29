"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    variant?: "fade" | "slide" | "scale";
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25, className = "", variant = "slide" }: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay } },
        },
        slide: {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } },
        }
    };

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={variants[variant]}
                initial="hidden"
                animate={mainControls}
                className="h-full"
            >
                {children}
            </motion.div>
        </div>
    );
};
