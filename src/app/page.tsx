import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import ScrollToTop from "@/components/layout/scroll-to-top";
import SectionNav from "@/components/layout/section-nav";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <SectionNav />
            <ScrollToTop />
            <main className="flex items-center justify-center flex-col h-full max-w-6xl">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
        </div>
    );
}
