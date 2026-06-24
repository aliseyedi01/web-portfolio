import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "@/components/layout/star-background";
import { Navbar } from "@/components/layout/navbar";
import { data } from "@/data/data";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ali Seyedi",
    description: "Personal portfolio and projects",
    keywords: ["developer", "programmer", "portfolio"],
    authors: [{ name: "Ali Seyedi" }],
    openGraph: {
        title: "Ali Seyedi",
        description: "Personal portfolio and projects",
        type: "website",
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
                        <StarsCanvas />
                        <Navbar navItems={data.nav} />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ViewTransitions>
    );
}
