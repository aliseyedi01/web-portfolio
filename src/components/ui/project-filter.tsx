"use client";

import { ProjectCategory } from "@/types/project";

const filters: ("All" | ProjectCategory)[] = [
    "All",
    "Fullstack",
    "Frontend",
    "Backend",
    "Bot",
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
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                            isActive
                                ? "bg-linear-to-r from-pink-500 to-purple-600 text-white"
                                : "bg-zinc-800/60 text-zinc-300 hover:bg-zinc-800"
                        }`}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}
