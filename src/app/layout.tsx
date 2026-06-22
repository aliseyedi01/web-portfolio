import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "@/components/main/star-background";

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
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="flex flex-col">
                <StarsCanvas />
                {children}
            </body>
        </html>
    );
}
