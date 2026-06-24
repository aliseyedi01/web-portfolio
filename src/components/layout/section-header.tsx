interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
    return (
        <div className="mb-6 px-1 text-center sm:mb-8 lg:mb-10">
            <h2 className="relative mb-3 inline-block max-w-full text-2xl font-black tracking-tight sm:mb-4 sm:text-3xl lg:text-5xl">
                <span className="heading-gradient drop-shadow-sm">{title}</span>
                {/* Unified Emerald underline */}
                <div className="absolute -bottom-2 left-1/2 h-0.5 w-1/3 min-w-16 -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />
            </h2>
        </div>
    );
}
