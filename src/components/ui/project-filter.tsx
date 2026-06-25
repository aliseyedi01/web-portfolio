"use client";

import { ProjectCategory } from "@/types/project";

const filters: ("All" | ProjectCategory)[] = [
    "All",
    "Frontend",
    "Backend",
    "Bot",
    // "Fullstack",
];

export default function ProjectFilter({
    active,
    onChange,
}: {
    active: string;
    onChange: (value: string) => void;
}) {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
                const isActive = active === filter;
                return (
                    <button
                        key={filter}
                        onClick={() => onChange(filter)}
                        className={`rounded-2xl px-5 py-2 text-sm font-medium transition-colors ${
                            isActive
                                ? "bg-linear-to-r from-blue-500 to-blue-600 text-white ring-[1.5px] ring-blue-400 ring-offset-2 ring-offset-zinc-900 shadow-lg shadow-blue-500/30"
                                : "bg-blue-950/60 text-blue-300 hover:bg-blue-900/80"
                        }`}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}
