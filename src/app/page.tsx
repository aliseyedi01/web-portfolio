import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex items-center justify-center flex-col h-full">
                <Hero />
                <Skills />
            </main>
        </div>
    );
}
