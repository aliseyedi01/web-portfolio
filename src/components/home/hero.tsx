"use client";

import Image from "next/image";
import profilePicHover from "@/assets/images/profile-final.png";
import { BackgroundGradient } from "@/components/ui/background-gradient";
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

import { contactData } from "@/data/contact";
import { ResumeButton } from "../ui/resume-button";

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
        <div
            className="relative flex flex-col-reverse lg:flex-row items-center justify-center overflow-hidden h-screen gap-6 sm:gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-0 min-h-screen lg:min-h-0"
            id="hero"
        >
            <div>
                <TooltipProvider delayDuration={200}>
                    <BlurFade delay={0.005} inView>
                        <div className="relative flex-col space-y-3 sm:space-y-4">
                            {/* Status Button */}
                            <div className="relative flex flex-col items-start justify-center">
                                <ShimmerButton className="z-50 mt-2 sm:mt-4 md:mt-8">
                                    <div className="z-50 relative flex items-center justify-center">
                                        <div
                                            className={`absolute size-1.5 sm:size-2 rounded-full border ${
                                                dotColor === "green"
                                                    ? "border-green-600/80 bg-green-500 animate-ping"
                                                    : "border-orange-600/80 bg-orange-500 animate-ping"
                                            } mr-1.5 sm:mr-2`}
                                        />
                                        <div
                                            className={`relative size-1 sm:size-1.5 rounded-full border ${
                                                dotColor === "green"
                                                    ? "border-green-600/80 bg-green-500 animate-pulse"
                                                    : "border-orange-600/80 bg-orange-500 animate-pulse"
                                            } mr-1.5 sm:mr-2`}
                                        />
                                    </div>
                                    <span className="whitespace-pre-wrap text-center leading-none text-muted-foreground text-[10px] sm:text-xs md:text-sm py-[0.5]">
                                        {status}
                                    </span>
                                </ShimmerButton>
                            </div>

                            {/* Hero Text - Updated with theme colors */}
                            <div className="w-full space-y-3 sm:space-y-4 md:space-y-6">
                                <BlurFade delay={0.005 * 1} inView>
                                    <div className="z-50 subpixel-antialiased text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-left space-y-1 sm:space-y-2 md:space-y-3">
                                        <div className="bg-linear-to-b from-slate-500 to-slate-900 dark:from-slate-300 dark:to-white bg-clip-text text-transparent text-2xl sm:text-4xl md:text-5xl lg:text-6xl pl-1">
                                            Hello. I&apos;m
                                        </div>
                                        <div className="bg-linear-to-b from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent">
                                            <span className="font-script font-normal text-[1.05em] leading-none align-baseline">
                                                Ali Seyedi
                                            </span>
                                        </div>
                                    </div>
                                </BlurFade>

                                <BlurFade delay={0.005 * 2} inView>
                                    <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl subpixel-antialiased tracking-tight font-medium text-left text-foreground/90">
                                        A FullStack Developer who likes{" "}
                                        <span className="font-script font-normal text-[1.05em] leading-none align-baseline text-blue-600 dark:text-cyan-300">
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
                                    <div className="z-50 flex flex-col-reverse sm:flex-row items-start justify-start sm:justify-center gap-2 sm:gap-3 md:gap-5 ">
                                        <ContactIcons isMobile={isMobile} />
                                        <span
                                            className="hidden sm:block size-5 w-px bg-border"
                                            aria-hidden
                                        />
                                        <span
                                            className="hidden sm:hidden w-16 sm:w-20 h-px bg-border"
                                            aria-hidden
                                        />
                                        <div className="flex max-md:-translate-x-1 md:gap-2">
                                            <a
                                                ref={ctaRef}
                                                onMouseMove={handleCtaMove}
                                                href="#projects"
                                                className="group relative inline-flex items-center gap-1.5 sm:gap-2 overflow-hidden rounded-full border border-border bg-background/40 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs md:text-sm font-medium s hover:text-foreground text-foreground/80"
                                            >
                                                <span
                                                    aria-hidden
                                                    className="pointer-events-none absolute inset-0 rounded-full text-foreground opacity-0 transition-opacity  group-hover:opacity-20"
                                                    style={{
                                                        background:
                                                            "radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%), currentColor, transparent 60%)",
                                                    }}
                                                />
                                                <span className="relative whitespace-nowrap">
                                                    View my work
                                                </span>
                                                <IconArrowRight className="relative size-2.5 sm:size-3 md:size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                <ShimmerBorder />
                                            </a>
                                            <ResumeButton
                                                fileName="aliseyedi01-resume.pdf"
                                                activeClassName="bg-background border border-border shadow-none md:px-1"
                                                className="rounded-full border border-border bg-background/80 backdrop-blur-sm py-0 text-[10px] md:text-sm font-medium "
                                                layoutId=""
                                            />
                                        </div>
                                    </div>
                                </BlurFade>
                            </div>
                        </div>
                    </BlurFade>
                </TooltipProvider>
            </div>

            {/* Profile Image */}
            <BlurFade delay={0.005} inView>
                <BackgroundGradient className="z-50 size-40 sm:size-48 md:size-52 lg:size-64 xl:size-96 shrink-0">
                    <div className="size-full rounded-full">
                        <Image
                            src={profilePicHover}
                            alt="Profile Picture Hover"
                            className="size-full object-cover rounded-full transition-opacity duration-200"
                            width={400}
                            height={400}
                            loading="eager"
                            priority
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
        <div className="flex flex-row items-center justify-center max-md:mt-1.5 space-x-4 sm:space-x-4 md:space-x-6 text-foreground">
            {contactData.hero.map((link) => {
                const Icon = link.icon;
                return (
                    <Tooltip key={link.label}>
                        <TooltipTrigger asChild>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="inline-block text-foreground"
                            >
                                <Icon
                                    className="scale-110 hover:scale-150 hover:animate-wiggle transition-transform duration-200"
                                    size={isMobile ? 20 : 24}
                                />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="z-50">
                            {link.label}
                        </TooltipContent>
                    </Tooltip>
                );
            })}
        </div>
    );
};
