// components/layout/background-orbs.tsx
"use client";

import { motion } from "motion/react";

// Mesh-gradient style background: a few large, organically-shaped "blobs"
// (irregular border-radius, not perfect circles) that drift AND slowly
// morph their own shape over time. Heavily blurred so overlapping blobs
// blend into each other, producing a soft, continuous mesh-gradient look
// instead of a flat pattern or distinct geometric shapes.
export function BackgroundOrbs() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute -top-1/4 -left-1/4 size-[40rem] bg-blue-600/30 blur-[100px]"
                style={{ borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" }}
                animate={{
                    x: [0, 80, -20, 0],
                    y: [0, 50, 90, 0],
                    borderRadius: [
                        "42% 58% 65% 35% / 45% 40% 60% 55%",
                        "58% 42% 35% 65% / 60% 55% 45% 40%",
                        "42% 58% 65% 35% / 45% 40% 60% 55%",
                    ],
                }}
                transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-1/4 -right-1/4 size-176 bg-indigo-600/25 blur-[110px]"
                style={{ borderRadius: "65% 35% 40% 60% / 50% 60% 40% 50%" }}
                animate={{
                    x: [0, -70, 30, 0],
                    y: [0, 60, -40, 0],
                    borderRadius: [
                        "65% 35% 40% 60% / 50% 60% 40% 50%",
                        "35% 65% 60% 40% / 40% 50% 60% 50%",
                        "65% 35% 40% 60% / 50% 60% 40% 50%",
                    ],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-[-15%] left-1/3 size-144 bg-cyan-500/20 blur-[100px]"
                style={{ borderRadius: "50% 50% 38% 62% / 60% 40% 60% 40%" }}
                animate={{
                    x: [0, 50, -60, 0],
                    y: [0, -40, 30, 0],
                    borderRadius: [
                        "50% 50% 38% 62% / 60% 40% 60% 40%",
                        "38% 62% 50% 50% / 40% 60% 40% 60%",
                        "50% 50% 38% 62% / 60% 40% 60% 40%",
                    ],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-[8%] left-[42%] size-120 bg-violet-500/15 blur-[120px]"
                style={{ borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%" }}
                animate={{
                    x: [0, -40, 50, 0],
                    y: [0, 50, -30, 0],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
