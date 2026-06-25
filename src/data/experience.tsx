import { FaReact } from "react-icons/fa";
import {
    SiPostgresql,
    SiMongodb,
    SiFastapi,
    SiDjango,
    SiNextdotjs,
    SiTailwindcss,
    SiTelegram,
} from "react-icons/si";
import type { ExperienceItem } from "@/types/experience";

export const experiences: ExperienceItem[] = [
    {
        id: "binazirchart",
        role: "Full Stack Developer",
        company: "Binazir Chart",
        location: "Tehran, Iran",
        period: "03/2024  — Present",
        current: true,
        initial: "B",
        link: "https://binazirchart.ir/vip/stock_market",
        bullets: [
            "Built a dynamic portfolio table with AG Grid and React for real-time data entry and front-end calculations",
            "Developed a transaction system with instant profit/loss using React Hook Form and Zod",
            "Built interactive Treemap, Line Chart, and Supply & Demand Pressure indicators for market analysis",
            "Optimized React performance via code splitting, lazy loading, and caching – achieving 30% faster load times",
            "Improved Next.js performance with SSR, SSG, ISR, and image/font optimization – 40% page speed boost",
            "Built REST APIs with FastAPI, MongoDB, and Redis caching – reducing response time by 30%",
            "Implemented user management (JWT, authorization, referral, subscription) with Django and DRF",
            "Built a Telegram bot for screenshots, data retrieval, and posts with inline keyboards",
            "Containerized bot and backend with Docker Compose on a Linux server with CI/CD for 24/7 availability",
        ],
        tech: [
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
    },
    {
        id: "freelance",
        role: "Freelance Frontend Developer",
        company: "Self-Employed / Freelance",
        location: "Remote",
        period: "Mar 2022 — Feb 2024",
        initial: "F",
        bullets: [
            "Built React and Next.js apps for small to medium-scale clients with cross-functional teams",
            "Designed responsive, cross-browser interfaces with React and TailwindCSS",
            "Boosted Core Web Vitals and Lighthouse scores through performance optimization",
            "Built REST APIs with Django and FastAPI to power client-facing web apps end-to-end",
            "Developed Telegram bots for automated client workflows, data retrieval, and notifications",
        ],
        tech: [
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "Telegram Bot", icon: <SiTelegram /> },
        ],
    },
];
