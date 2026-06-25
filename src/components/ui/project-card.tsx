import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { FiGithub } from "react-icons/fi";

const categoryStyles: Record<Project["category"], string> = {
    Fullstack: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
    Frontend: "bg-gradient-to-r from-blue-500 to-cyan-600",
    Backend: "bg-gradient-to-r from-green-500 to-emerald-600",
    Bot: "bg-gradient-to-r from-pink-500 to-rose-600",
};

const MAX_VISIBLE_TECH = 4;

export default function ProjectCard({ project }: { project: Project }) {
    const { title, description, image, category, techStack, codeUrl, liveUrl } =
        project;

    const visibleTech = techStack.slice(0, MAX_VISIBLE_TECH);
    const hiddenCount = techStack.length - visibleTech.length;

    return (
        <div className="group flex h-[440px] flex-col overflow-hidden rounded-2xl glass-card p-0">
            {/* Preview */}
            <div className="relative h-48 w-full shrink-0 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <span
                    className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg ${categoryStyles[category]}`}
                >
                    {category}
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-1.5">
                    <h3 className="line-clamp-1 text-lg font-semibold text-white">
                        {title}
                    </h3>
                    <p className="line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed text-zinc-400">
                        {description}
                    </p>
                </div>

                <div className="flex h-[30px] flex-wrap gap-2 overflow-hidden">
                    {visibleTech.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                        >
                            {tech}
                        </span>
                    ))}
                    {hiddenCount > 0 && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                            +{hiddenCount}
                        </span>
                    )}
                </div>

                <div className="mt-auto flex gap-3 pt-1">
                    <Link
                        href={codeUrl}
                        target="_blank"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
                    >
                        <FiGithub className="h-4 w-4" />
                        Code
                    </Link>
                    <Link
                        href={liveUrl}
                        target="_blank"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                        <SquareArrowOutUpRight className="h-4 w-4" />
                        Live Demo
                    </Link>
                </div>
            </div>
        </div>
    );
}
