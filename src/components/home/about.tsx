// app/components/about.tsx
import Section from "@/components/section/section";
import SectionHeader from "@/components/section/section-header";

// Stat Card Component with icons
const StatCard = ({
    value,
    label,
    color,
    gradient,
    icon,
}: {
    value: string;
    label: string;
    color: string;
    gradient: string;
    icon: string;
}) => (
    <div
        className={`
        relative
        bg-linear-to-br ${gradient} 
        backdrop-blur-sm border border-${color}-500/20 
        rounded-xl p-6 text-center 
        hover:transform hover:scale-105 
        hover:shadow-xl hover:shadow-${color}-500/10
        transition-all duration-300 
        cursor-default group
    `}
    >
        {/* Small Icon in top-right absolute */}
        <div className="absolute top-2 left-3 text-lg md:text-xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            {icon}
        </div>

        {/* Number */}
        <div className={`text-3xl md:text-4xl font-bold text-${color}-400`}>
            {value}
        </div>

        {/* Label */}
        <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium tracking-wider">
            {label}
        </div>
    </div>
);

// Stats Grid Component
const StatsGrid = () => {
    const stats = [
        {
            value: "4+",
            label: "YEARS EXPERIENCE",
            color: "blue",
            gradient: "from-blue-600/20 to-blue-600/5",
            icon: "💼",
        },
        {
            value: "12+",
            label: "FULLSTACK PROJECTS",
            color: "purple",
            gradient: "from-purple-600/20 to-purple-600/5",
            icon: "🚀",
        },
        {
            value: "15+",
            label: "TECHNOLOGIES",
            color: "green",
            gradient: "from-green-600/20 to-green-600/5",
            icon: "⚡",
        },
        {
            value: "80%",
            label: "PASSION FOR CODE",
            color: "red",
            gradient: "from-red-600/20 to-red-600/5",
            icon: "💻",
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};

// About Text Component with larger text
const AboutText = () => (
    <div className="flex-1">
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

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mt-6 font-light">
            Quick learner with a track record of adopting new technologies and
            applying them in production. Committed to writing{" "}
            <span className="text-green-400 font-medium">
                clean, maintainable code
            </span>{" "}
            with a creative approach to problem-solving.
        </p>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mt-6 font-light">
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
                {/* Left side - Text content with larger text (takes 2/3 space) */}
                <div className="flex-2">
                    <AboutText />
                </div>

                {/* Right side - Stats Grid (takes 1/3 space) */}
                <div className="lg:w-96 shrink-0">
                    <StatsGrid />
                </div>
            </div>
        </Section>
    );
}
