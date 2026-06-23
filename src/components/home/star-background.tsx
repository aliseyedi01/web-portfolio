"use client";

import {
    Points,
    PointMaterial,
    type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useEffect } from "react";
import type { Points as PointsType } from "three";
import { useTheme } from "next-themes";

export const StarBackground = (props: PointsInstancesProps) => {
    const ref = useRef<PointsType | null>(null);

    const [sphere] = useState(() => {
        const count = 5000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const point = random.inSphere(new Float32Array(3), {
                radius: 1.2,
            });

            positions[i * 3] = point[0];
            positions[i * 3 + 1] = point[1];
            positions[i * 3 + 2] = point[2];
        }

        return positions;
    });

    useFrame((_, delta) => {
        if (!ref.current) return;

        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                stride={3}
                positions={sphere}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#4A90D9"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const StarsCanvas = () => {
    const { resolvedTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <div className="fixed inset-0 -z-10 w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                style={{
                    background: isDark ? "#030014" : "#F0F4FF",
                }}
            >
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
            </Canvas>
        </div>
    );
};
