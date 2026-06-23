// app/components/skills.tsx
import Section from "@/components/section/section";
import SectionHeader from "@/components/section/section-header";
import SkillCard from "@/components/ui/skill-card";
import { skillCategories, type SkillCategory } from "@/data/skills";

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
