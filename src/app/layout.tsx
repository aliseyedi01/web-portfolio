import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ChatbotWidget from "@/components/layout/chatbot-widget";
import { MobileNavbar } from "@/components/layout/mobile-navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://aliseyedi01.ir"),
    title: {
        default: "Ali Seyedi | Full-Stack Developer",
        template: "%s | Ali Seyedi",
    },
    description:
        "Personal portfolio of Ali Seyedi, a Full-Stack Developer specializing in Next.js, React, and TypeScript. Explore my projects, skills, and experience.",
    keywords: [
        "Ali Seyedi",
        "Full Stack Developer",
        "Next.js Developer",
        "React Developer",
        "TypeScript Developer",
        "Frontend Developer",
        "Web Developer Portfolio",
        "Software Engineer",
    ],
    authors: [{ name: "Ali Seyedi", url: "https://aliseyedi01.ir" }],
    creator: "Ali Seyedi",
    publisher: "Ali Seyedi",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://aliseyedi01.ir",
    },
    openGraph: {
        title: "Ali Seyedi | Full-Stack Developer",
        description:
            "Personal portfolio of Ali Seyedi, a Full-Stack Developer specializing in Next.js, React, and TypeScript.",
        url: "https://aliseyedi01.ir",
        siteName: "Ali Seyedi",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Ali Seyedi - Full-Stack Developer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ali Seyedi | Full-Stack Developer",
        description:
            "Personal portfolio of Ali Seyedi, a Full-Stack Developer specializing in Next.js, React, and TypeScript.",
        images: ["/og-image.png"],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html
                lang="en"
                className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
                suppressHydrationWarning
            >
                <body className="flex flex-col">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem={false}
                        storageKey="theme-preference"
                    >
                        <Navbar />
                        <MobileNavbar />
                        {children}
                        <ChatbotWidget
                            title="Ask about Ali Seyedi"
                            subtitle="Powered by OpenRouter"
                        />
                    </ThemeProvider>
                </body>
            </html>
        </ViewTransitions>
    );
}
