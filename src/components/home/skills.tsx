import type { ReactNode } from "react";

import Section from "@/components/section/section";
import SectionHeader from "@/components/section/section-header";
import SkillCard from "@/components/ui/skill-card";
import { IoLogoJavascript } from "react-icons/io5";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { BsClaude, BsCursorFill } from "react-icons/bs";
import {
    SiOpenai,
    SiGooglegemini,
    SiDocker,
    SiExpress,
    SiGithubactions,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiPostgresql,
    SiReactquery,
    SiRedux,
    SiRedis,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript,
    SiFigma,
    SiPostman,
    SiDjango,
    SiFastapi,
    SiPython,
    SiNetdata,
    SiPortainer,
} from "react-icons/si";
import {
    TbApi,
    TbLock,
    TbSchema,
    TbTopologyStar3,
    TbPlugConnected,
} from "react-icons/tb";
import { LuBoxes } from "react-icons/lu";
import { HiOutlineQueueList } from "react-icons/hi2";
import DeepSeekIcon from "@/assets/icon/svg/deepseek-icon";
import { MdInstallDesktop } from "react-icons/md";

interface SkillData {
    name: string;
    icon: ReactNode;
    color: string;
    iconColor: string;
}

interface SkillCategory {
    title: string;
    hint?: string;
    skills: SkillData[];
}

const backendSkills: SkillData[] = [
    {
        name: "Python",
        icon: <SiPython />,
        color: "from-yellow-400/20 to-blue-500/20",
        iconColor: "text-yellow-400",
    },
    {
        name: "FastAPI",
        icon: <SiFastapi />,
        color: "from-emerald-500/20 to-teal-600/20",
        iconColor: "text-emerald-400",
    },
    {
        name: "Django",
        icon: <SiDjango />,
        color: "from-green-600/20 to-green-800/20",
        iconColor: "text-green-500",
    },
    {
        name: "Node.js",
        icon: <FaNodeJs />,
        color: "from-green-500/20 to-green-700/20",
        iconColor: "text-green-500",
    },
    {
        name: "Express.js",
        icon: <SiExpress />,
        color: "from-zinc-500/20 to-zinc-800/20",
        iconColor: "text-zinc-300",
    },
    {
        name: "NestJS",
        icon: <SiNestjs />,
        color: "from-red-500/20 to-red-700/20",
        iconColor: "text-red-500",
    },
    {
        name: "REST APIs",
        icon: <TbApi />,
        color: "from-cyan-500/20 to-blue-600/20",
        iconColor: "text-cyan-400",
    },
    {
        name: "Microservices",
        icon: <LuBoxes />,
        color: "from-emerald-500/20 to-teal-700/20",
        iconColor: "text-emerald-400",
    },
    {
        name: "Postman",
        icon: <SiPostman />,
        color: "from-orange-500/20 to-red-600/20",
        iconColor: "text-orange-400",
    },
];

const databaseSkills: SkillData[] = [
    {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "from-green-600/20 to-green-800/20",
        iconColor: "text-green-500",
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "from-blue-500/20 to-indigo-600/20",
        iconColor: "text-blue-500",
    },
    {
        name: "MySQL",
        icon: <SiMysql />,
        color: "from-orange-500/20 to-amber-600/20",
        iconColor: "text-orange-400",
    },
    {
        name: "SQL",
        icon: <TbSchema />,
        color: "from-amber-500/20 to-yellow-600/20",
        iconColor: "text-amber-400",
    },
    {
        name: "Redis",
        icon: <SiRedis />,
        color: "from-red-500/20 to-red-800/20",
        iconColor: "text-red-400",
    },
    {
        name: "Queues & workers",
        icon: <HiOutlineQueueList />,
        color: "from-cyan-600/20 to-blue-800/20",
        iconColor: "text-cyan-300",
    },
];

const architectureSkills: SkillData[] = [
    {
        name: "System design",
        icon: <TbTopologyStar3 />,
        color: "from-zinc-400/20 to-zinc-600/20",
        iconColor: "text-zinc-200",
    },
    {
        name: "API architecture",
        icon: <TbApi />,
        color: "from-emerald-400/20 to-teal-600/20",
        iconColor: "text-emerald-400",
    },
    {
        name: "Auth",
        icon: <TbLock />,
        color: "from-purple-500/20 to-pink-600/20",
        iconColor: "text-purple-400",
    },
    {
        name: "Event-driven patterns",
        icon: <SiSocketdotio />,
        color: "from-zinc-200/20 to-zinc-400/20",
        iconColor: "text-zinc-200",
    },
];

const devOpsSkills: SkillData[] = [
    {
        name: "Docker",
        icon: <SiDocker />,
        color: "from-blue-500/20 to-sky-700/20",
        iconColor: "text-blue-400",
    },
    {
        name: "Docker Compose",
        icon: <SiDocker />,
        color: "from-sky-500/20 to-blue-800/20",
        iconColor: "text-sky-400",
    },
    {
        name: "GitHub Actions",
        icon: <SiGithubactions />,
        color: "from-indigo-500/20 to-violet-700/20",
        iconColor: "text-indigo-300",
    },
    {
        name: "Netdata",
        icon: <SiNetdata />,
        color: "from-emerald-500/20 to-green-600/20",
        iconColor: "text-emerald-400",
    },
    {
        name: "Portainer",
        icon: <SiPortainer />,
        color: "from-blue-500/20 to-sky-700/20",
        iconColor: "text-blue-400",
    },
    {
        name: "Linux",
        icon: <SiLinux />,
        color: "from-zinc-300/20 to-zinc-600/20",
        iconColor: "text-zinc-300",
    },
];

const aiSkills: SkillData[] = [
    {
        name: "ChatGPT",
        icon: <SiOpenai />,
        color: "from-green-500/20 to-emerald-600/20",
        iconColor: "text-green-400",
    },
    {
        name: "Claude",
        icon: <BsClaude />,
        color: "from-orange-400/20 to-amber-600/20",
        iconColor: "text-orange-300",
    },
    {
        name: "Cursor",
        icon: <BsCursorFill />,
        color: "from-slate-500/20 to-zinc-700/20",
        iconColor: "text-zinc-300",
    },
    {
        name: "Gemini",
        icon: <SiGooglegemini />,
        color: "from-blue-500/20 to-cyan-600/20",
        iconColor: "text-blue-400",
    },
    {
        name: "DeepSeek",
        icon: <DeepSeekIcon />,
        color: "from-indigo-500/20 to-purple-600/20",
        iconColor: "text-indigo-300",
    },
];

const frontendSkills: SkillData[] = [
    {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        color: "from-blue-500/20 to-blue-700/20",
        iconColor: "text-blue-400",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "from-blue-500/20 to-blue-700/20",
        iconColor: "text-blue-400",
    },
    {
        name: "React",
        icon: <FaReact />,
        color: "from-cyan-400/20 to-blue-500/20",
        iconColor: "text-cyan-400",
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "from-zinc-300/20 to-zinc-600/20",
        iconColor: "text-zinc-300",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "from-teal-400/20 to-cyan-500/20",
        iconColor: "text-teal-400",
    },
    {
        name: "TanStack Query",
        icon: <SiReactquery />,
        color: "from-red-500/20 to-orange-600/20",
        iconColor: "text-red-400",
    },
    {
        name: "Redux Toolkit",
        icon: <SiRedux />,
        color: "from-purple-500/20 to-violet-600/20",
        iconColor: "text-purple-400",
    },
    {
        name: "Zustand",
        icon: <LuBoxes />,
        color: "from-amber-500/20 to-orange-600/20",
        iconColor: "text-amber-400",
    },
    {
        name: "Figma",
        icon: <SiFigma />,
        color: "from-pink-500/20 to-purple-600/20",
        iconColor: "text-pink-400",
    },
    {
        name: "PWA",
        icon: <MdInstallDesktop />,
        color: "from-emerald-500/20 to-teal-600/20",
        iconColor: "text-emerald-400",
    },
    {
        name: "WebSocket",
        icon: <TbPlugConnected />,
        color: "from-cyan-500/20 to-blue-600/20",
        iconColor: "text-cyan-400",
    },
];

const skillCategories: SkillCategory[] = [
    { title: "Frontend & UI", skills: frontendSkills },
    { title: "Backend & APIs", skills: backendSkills },
    { title: "Databases & modeling", skills: databaseSkills },
    { title: "Architecture", skills: architectureSkills },
    {
        title: "DevOps & Monitoring",
        skills: devOpsSkills,
    },
    {
        title: "AI Tools & Agents",
        skills: aiSkills,
    },
];

function SkillCategoryPanel({ title, hint, skills }: SkillCategory) {
    return (
        <article className="group relative rounded-xl border border-blue-800/40 bg-linear-to-br from-blue-950/30 via-slate-900/50 to-blue-950/20 p-4 shadow-lg shadow-blue-500/5 backdrop-blur-sm sm:p-5 transition-all duration-300 hover:border-blue-600/60 hover:shadow-blue-500/20 hover:shadow-xl">
            {/* Glow effect */}
            <div className="absolute -inset-px rounded-xl bg-linear-to-br from-blue-500/10 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold tracking-tight text-blue-100 sm:text-base">
                        {title}
                    </h3>
                </div>
                {hint ? (
                    <p className="mb-3 text-xs leading-relaxed text-blue-300/60">
                        {hint}
                    </p>
                ) : null}
                <ul
                    className="flex flex-wrap gap-2"
                    role="list"
                    aria-label={`${title} skills`}
                >
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={`${skill.name}-${index}`}
                            skill={skill}
                        />
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default function Skills() {
    return (
        <Section id="skills" className="h-screen">
            <SectionHeader title="Skills & Technologies" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {skillCategories.map((category) => (
                    <SkillCategoryPanel key={category.title} {...category} />
                ))}
            </div>
        </Section>
    );
}
