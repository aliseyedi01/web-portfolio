"use client";

// src/components/home/about.tsx
import Section from "@/components/section/section";
import SectionHeader from "@/components/section/section-header";
import { stats, type StatItem } from "@/data/about";

// Single color configuration for all cards
const COLORS = {
    gradient: "from-blue-600/20 to-blue-600/5",
    text: "text-blue-400",
    border: "border-blue-500/20",
    shadow: "shadow-blue-500/10",
};

import { useEffect, useRef, useState } from "react";

const StatCard = ({ value, label, icon }: StatItem) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState(false);

    const animatedValue = useCountUp(value, active);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setActive(true);
                obs.disconnect();
            }
        });

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`
                relative
                bg-linear-to-br ${COLORS.gradient}
                backdrop-blur-sm border ${COLORS.border}
                rounded-xl p-6 text-center
                hover:transform hover:scale-105
                hover:shadow-xl ${COLORS.shadow}
                transition-all duration-300
                cursor-default group
            `}
        >
            <div className="absolute top-2 left-3 text-lg md:text-xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {icon}
            </div>

            <div className={`text-3xl md:text-4xl font-bold ${COLORS.text}`}>
                {animatedValue}
            </div>

            <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium tracking-wider">
                {label}
            </div>
        </div>
    );
};
// Stats Grid
const StatsGrid = () => (
    <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
        ))}
    </div>
);

import TypewriterText from "@/components/ui/typewriter-text";
import { useCountUp } from "@/hooks/useCountUp";

const AboutText = () => (
    <div className="flex-1">
        <TypewriterText
            speed={55}
            className="
                whitespace-pre-line
                text-lg md:text-xl lg:text-2xl
                text-gray-200
                leading-relaxed
                font-light
            "
        >
            <span className="text-blue-400 font-semibold">
                Full-Stack Developer
            </span>{" "}
            with 4+ years of experience building scalable web applications
            across frontend and backend systems. Specializing in{" "}
            <span className="text-cyan-400 font-medium">React</span>,{" "}
            <span className="text-cyan-400 font-medium">Next.js</span>,{" "}
            <span className="text-green-400 font-medium">Django</span>,{" "}
            <span className="text-green-400 font-medium">FastAPI</span>, and{" "}
            <span className="text-green-400 font-medium">NestJS</span>.{"\n\n"}
            Experienced in building financial dashboards, market analysis tools,
            and backend-driven platforms with a strong focus on{" "}
            <span className="text-blue-400 font-medium">
                performance
            </span> and{" "}
            <span className="text-blue-400 font-medium">scalability</span>, with
            clean system architecture. Comfortable working across the full stack
            from{" "}
            <span className="text-cyan-400 font-medium">UI development</span> to
            API design and database structure.
            {"\n\n"}
            Strong{" "}
            <span className="text-purple-400 font-medium">
                problem-solving mindset
            </span>{" "}
            with a focus on writing{" "}
            <span className="text-green-400 font-medium">clean</span>,
            maintainable, and testable code. Continuously learning new
            technologies and applying them in real-world production systems.
        </TypewriterText>
    </div>
);

export default function About() {
    return (
        <Section id="about" className="min-h-screen py-20">
            <SectionHeader title="About Me" />

            <div className="flex flex-col lg:flex-row gap-16 items-start mt-8 max-w-7xl mx-auto">
                <div className="flex-[2]">
                    <AboutText />
                </div>
                <div className="lg:w-96 shrink-0">
                    <StatsGrid />
                </div>
            </div>
        </Section>
    );
}
