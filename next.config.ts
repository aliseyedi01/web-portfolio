import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // این خط باعث می‌شود خروجی استاتیک تولید شود
    images: {
        unoptimized: true, // برای نمایش تصاویر در خروجی استاتیک
    },
    trailingSlash: true, // برای سازگاری با نتلیف
};

export default nextConfig;