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

// Stat Card Component - Clean and reusable
const StatCard = ({ value, label, icon }: StatItem) => (
    <div
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
        {/* Icon */}
        <div className="absolute top-2 left-3 text-lg md:text-xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            {icon}
        </div>

        {/* Value */}
        <div className={`text-3xl md:text-4xl font-bold ${COLORS.text}`}>
            {value}
        </div>

        {/* Label */}
        <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium tracking-wider">
            {label}
        </div>
    </div>
);

// Stats Grid
const StatsGrid = () => (
    <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
        ))}
    </div>
);

// About Text
const AboutText = () => (
    <div className="flex-1 space-y-6">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light">
            <span className="text-blue-400 font-semibold">
                Front-End Developer
            </span>{" "}
            with 4+ years of experience specializing in{" "}
            <span className="text-cyan-400 font-medium">React</span> and{" "}
            <span className="text-cyan-400 font-medium">Next.js</span> with
            hands-on experience building financial dashboards and market
            analysis tools.
        </p>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light">
            Quick learner with a track record of adopting new technologies and
            applying them in production. Committed to writing{" "}
            <span className="text-green-400 font-medium">
                clean, maintainable code
            </span>{" "}
            with a creative approach to problem-solving.
        </p>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light">
            Possesses an understanding of project architecture, design patterns,
            and state management, combined with backend knowledge for effective{" "}
            <span className="text-purple-400 font-medium">
                full-stack collaboration
            </span>
            .
        </p>
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
