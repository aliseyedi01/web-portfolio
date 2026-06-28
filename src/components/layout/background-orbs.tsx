"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function BackgroundOrbs() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = !mounted || resolvedTheme === "dark";

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Aurora Gradient */}
            <motion.div
                className="absolute left-[-20%] top-[-10%] h-[50rem] w-[70rem]"
                style={{
                    background: isDark
                        ? "linear-gradient(120deg, rgba(99,102,241,.15), rgba(139,92,246,.18), rgba(6,182,212,.15))"
                        : "linear-gradient(120deg, rgba(236,72,153,.12), rgba(139,92,246,.10), rgba(59,130,246,.10))",
                    filter: "blur(120px)",
                }}
                animate={{
                    rotate: [0, 8, -5, 0],
                    x: [0, 80, -40, 0],
                    y: [0, 60, -30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blob 1 */}
            <motion.div
                className="absolute -left-40 top-20 size-[38rem]"
                style={{
                    background: isDark
                        ? "rgba(59,130,246,.22)"
                        : "rgba(236,72,153,.12)",
                    filter: "blur(130px)",
                    borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%",
                }}
                animate={{
                    x: [0, 120, -40, 0],
                    y: [0, 80, 120, 0],
                    borderRadius: [
                        "42% 58% 65% 35% / 45% 40% 60% 55%",
                        "60% 40% 30% 70% / 55% 65% 35% 45%",
                        "42% 58% 65% 35% / 45% 40% 60% 55%",
                    ],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blob 2 */}
            <motion.div
                className="absolute right-[-10rem] top-[20%] size-[42rem]"
                style={{
                    background: isDark
                        ? "rgba(139,92,246,.18)"
                        : "rgba(59,130,246,.10)",
                    filter: "blur(150px)",
                    borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%",
                }}
                animate={{
                    x: [0, -90, 30, 0],
                    y: [0, 50, -40, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blob 3 */}
            <motion.div
                className="absolute bottom-[-15rem] left-1/3 size-[36rem]"
                style={{
                    background: isDark
                        ? "rgba(6,182,212,.16)"
                        : "rgba(139,92,246,.08)",
                    filter: "blur(140px)",
                    borderRadius: "50% 50% 38% 62% / 60% 40% 60% 40%",
                }}
                animate={{
                    x: [0, 60, -70, 0],
                    y: [0, -50, 30, 0],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            ${isDark ? "rgba(255,255,255,0.05)" : "rgba(99,102,241,0.08)"} 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            ${isDark ? "rgba(255,255,255,0.05)" : "rgba(99,102,241,0.08)"} 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "64px 64px",
                    maskImage:
                        "radial-gradient(circle at center, black, transparent 85%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at center, black, transparent 85%)",
                }}
            />
        </div>
    );
}
