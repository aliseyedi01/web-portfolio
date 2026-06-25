// app/components/skills.tsx
import Section from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import SkillCard from "@/components/ui/skill-card";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { BlurFade } from "@/components/ui/blur-fade";

function SkillCategoryPanel({ title, hint, skills }: SkillCategory) {
    return (
        <article className="group relative glass-card">
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
        <Section id="skills" className="h-full md:min-h-screen w-full">
            <SectionHeader
                title="02 — SKILLS"
                subtitle="Tools I build with."
                highlightWord="build with."
            />
            <BlurFade delay={0.005 * 1} inView>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                    {skillCategories.map((category) => (
                        <SkillCategoryPanel
                            key={category.title}
                            {...category}
                        />
                    ))}
                </div>
            </BlurFade>
        </Section>
    );
}
