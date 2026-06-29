"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => {
            setIsMobile(window.innerWidth < 768);
        };

        check();
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, []);

    // if (isMobile) {
    //     return <>{children}</>;
    // }

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1,
                smoothWheel: true,
                wheelMultiplier: 1.8,
                touchMultiplier: isMobile ? 2.6 : 2,
                syncTouch: true,
                gestureOrientation: "vertical",
            }}
        >
            {children}
        </ReactLenis>
    );
}
