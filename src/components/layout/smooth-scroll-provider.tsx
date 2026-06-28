// app/providers/smooth-scroll-provider.tsx
"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.2,
                smoothWheel: true,
                wheelMultiplier: 1.8,
                touchMultiplier: 2,
            }}
        >
            {children}
        </ReactLenis>
    );
}
