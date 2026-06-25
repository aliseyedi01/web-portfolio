"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ProjectCategory } from "@/types/project";

const filters: ("All" | ProjectCategory)[] = [
    "All",
    "Frontend",
    "Backend",
    "Bot",
];

// The auto-demo order, each step fires 5s after the previous one
const AUTO_SEQUENCE: ("All" | ProjectCategory)[] = [
    "Frontend",
    "Backend",
    "Bot",
    "All",
];
const STEP_DELAY = 5000; // 5 seconds

export default function ProjectFilter({
    active,
    onChange,
}: {
    active: string;
    onChange: (value: string) => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const userInteractedRef = useRef(false);
    const hasRunRef = useRef(false);

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry?.isIntersecting) return;
                if (hasRunRef.current || active !== "All") return;

                hasRunRef.current = true;
                observer.disconnect(); // only need to trigger this once

                const timeouts: ReturnType<typeof setTimeout>[] = [];

                AUTO_SEQUENCE.forEach((filter, index) => {
                    const timeout = setTimeout(
                        () => {
                            if (!userInteractedRef.current) {
                                onChange(filter);
                            }
                        },
                        STEP_DELAY * (index + 1),
                    );
                    timeouts.push(timeout);
                });

                // stash timeouts on the ref so cleanup below can clear them
                cleanupTimeouts.current = timeouts;
            },
            { threshold: 0.5 }, // fires once 50% of the row is visible
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
            cleanupTimeouts.current.forEach(clearTimeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cleanupTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

    const handleManualChange = (value: string) => {
        userInteractedRef.current = true; // cancels any pending auto-steps
        onChange(value);
    };

    return (
        <div ref={containerRef} className="flex justify-center">
            <div className="inline-flex mx-auto flex-wrap justify-center gap-1 rounded-full border border-slate-300/60 bg-slate-200/70 p-1.5 dark:border-white/10 dark:bg-sky-900/30">
                {filters.map((filter) => {
                    const isActive = active === filter;
                    return (
                        <button
                            key={filter}
                            onClick={() => handleManualChange(filter)}
                            className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                                isActive
                                    ? "text-white"
                                    : "text-slate-600 hover:text-slate-900 dark:text-blue-300/70 dark:hover:text-blue-200"
                            }`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="active-filter-pill"
                                    className="absolute inset-0 rounded-full bg-linear-to-r from-violet-500 to-purple-600 shadow-lg shadow-purple-500/30"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                    }}
                                />
                            )}
                            <span className="relative z-10">{filter}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
