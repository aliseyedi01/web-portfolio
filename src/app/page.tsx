import Hero from "@/components/home/hero";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <main className="flex items-center justify-center h-screen">
                <Hero />
            </main>
        </div>
    );
}
