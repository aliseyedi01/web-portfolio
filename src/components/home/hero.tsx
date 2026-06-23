"use client";

import Image from "next/image";
import profilePicHover from "@/assets/images/profile-final.png";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HeroConstellation } from "@/components/ui/hero-constellation";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShimmerBorder } from "@/components/ui/shimmer-border";
import { IconArrowRight } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { data } from "@/data/data";

export default function Hero() {
    const { status, dotColor } = getStatus();
    const ctaRef = useRef<HTMLAnchorElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 640);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const handleCtaMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const el = ctaRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
            <div>
                <HeroConstellation desktopDots={300} mobileDots={75} />
                <TooltipProvider delayDuration={200}>
                    <BlurFade delay={0.005} inView>
                        <div className="relative flex-col space-y-3">
                            {/* Status Button */}
                            <div className="relative flex flex-col items-start justify-center">
                                <ShimmerButton className="z-50 mt-4 sm:mt-8">
                                    <div className="z-50 relative flex items-center justify-center">
                                        <div
                                            className={`absolute size-2 sm:size-2.5 rounded-full border ${
                                                dotColor === "green"
                                                    ? "border-green-600/80 bg-green-500 animate-ping"
                                                    : "border-orange-600/80 bg-orange-500 animate-ping"
                                            } mr-2`}
                                        />
                                        <div
                                            className={`relative size-1.5 sm:size-2 rounded-full border ${
                                                dotColor === "green"
                                                    ? "border-green-600/80 bg-green-500 animate-pulse"
                                                    : "border-orange-600/80 bg-orange-500 animate-pulse"
                                            } mr-2`}
                                        />
                                    </div>
                                    <span className="whitespace-pre-wrap text-center leading-none text-muted-foreground text-xs sm:text-sm py-[0.5]">
                                        {status}
                                    </span>
                                </ShimmerButton>
                            </div>

                            {/* Hero Text */}
                            <div className="w-full space-y-4 sm:space-y-6">
                                <BlurFade delay={0.005 * 1} inView>
                                    <div className="z-50 subpixel-antialiased text-4xl sm:text-6xl lg:text-7xl font-bold text-left space-y-2 sm:space-y-3">
                                        <div className="bg-linear-to-b from-zinc-200 dark:from-zinc-50 to-zinc-950 dark:to-zinc-600 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl pl-1">
                                            Hello. I&apos;m
                                        </div>
                                        <div className="bg-linear-to-b from-zinc-200 dark:from-zinc-50 to-zinc-950 dark:to-zinc-300 bg-clip-text text-5xl sm:text-7xl lg:text-8xl text-transparent">
                                            <span className="font-script font-normal text-[1.05em] leading-none align-baseline">
                                                Ali Seyedi
                                            </span>
                                        </div>
                                    </div>
                                </BlurFade>

                                <BlurFade delay={0.005 * 2} inView>
                                    <p className="text-sm sm:text-base lg:text-2xl subpixel-antialiased tracking-tight font-medium text-left text-white">
                                        A FullStack Developer who likes{" "}
                                        <span className="font-script font-normal text-[1.05em] leading-none align-baseline text-amber-200">
                                            building things
                                        </span>
                                    </p>
                                </BlurFade>

                                {/* Contact Icons & CTA */}
                                <BlurFade
                                    delay={0.005 * 2}
                                    direction="down"
                                    inView
                                >
                                    <div className="z-50 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
                                        <ContactIcons isMobile={isMobile} />
                                        <span
                                            className="hidden sm:block h-5 w-px bg-zinc-300/60 dark:bg-zinc-700/60"
                                            aria-hidden
                                        />
                                        <span
                                            className="block sm:hidden w-20 h-px bg-zinc-300/60 dark:bg-zinc-700/60"
                                            aria-hidden
                                        />
                                        <a
                                            ref={ctaRef}
                                            onMouseMove={handleCtaMove}
                                            href="#projects"
                                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-300/60 dark:border-zinc-700/60 bg-background/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors hover:text-foreground text-white"
                                        >
                                            <span
                                                aria-hidden
                                                className="pointer-events-none absolute inset-0 rounded-full text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                                                style={{
                                                    background:
                                                        "radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%), currentColor, transparent 60%)",
                                                }}
                                            />
                                            <span className="relative">
                                                View my work
                                            </span>
                                            <IconArrowRight className="relative h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            <ShimmerBorder />
                                        </a>
                                    </div>
                                </BlurFade>
                            </div>
                        </div>
                    </BlurFade>
                </TooltipProvider>
            </div>

            {/* Profile Image */}
            <BlurFade delay={0.005} inView>
                <BackgroundGradient className="z-50 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                    <div className="w-full h-full rounded-full">
                        <Image
                            src={profilePicHover}
                            alt="Profile Picture Hover"
                            className="w-full h-full object-cover rounded-full transition-opacity duration-200"
                            width={384}
                            height={384}
                        />
                    </div>
                </BackgroundGradient>
            </BlurFade>
        </div>
    );
}

// ===== Helper Functions & Sub-Components =====

const getStatus = () => {
    const now = new Date();
    const localTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tehran",
        hour: "numeric",
        hour12: false,
    }).format(now);

    const currentHour = parseInt(localTime, 10);

    if (currentHour >= 8 && currentHour < 12) {
        return { status: "Available for new roles", dotColor: "green" };
    } else {
        return { status: "Away", dotColor: "amber" };
    }
};

const ContactIcons = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <div className="flex flex-row items-center justify-center space-x-4 sm:space-x-6 text-white">
            {data.contact.map((link) => (
                <Tooltip key={link.label}>
                    <TooltipTrigger asChild>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.aria}
                            className="inline-block text-white"
                        >
                            {React.cloneElement(link.icon, {
                                className:
                                    "scale-120 hover:scale-150 hover:animate-wiggle transition-transform duration-200",
                                size: isMobile ? 24 : 30,
                            })}
                        </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="z-50">
                        {link.label}
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
};
