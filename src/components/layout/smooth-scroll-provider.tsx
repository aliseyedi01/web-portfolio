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
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <ReactLenis
            root
            options={{
                // تنظیمات پایه - متعادل برای هر دو حالت
                lerp: isMobile ? 0.08 : 0.05, // کمتر = نرم‌تر و کندتر
                duration: isMobile ? 0.6 : 0.8, // مدت زمان اسکرول

                // تنظیمات حساسیت
                wheelMultiplier: isMobile ? 0.6 : 1.2, // حساسیت چرخ ماوس
                touchMultiplier: isMobile ? 1.5 : 2.0, // حساسیت لمس موبایل

                // غیرفعال کردن اسکرول نرم در موبایل برای عملکرد بهتر
                smoothWheel: !isMobile,
            }}
        >
            {children}
        </ReactLenis>
    );
}
