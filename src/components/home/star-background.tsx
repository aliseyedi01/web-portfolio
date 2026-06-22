"use client";

import {
    Points,
    PointMaterial,
    type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

/**
 * StarBackground Component - Creates a rotating starfield background using Three.js
 * @param props - PointsInstancesProps from @react-three/drei
 */
export const StarBackground = (props: PointsInstancesProps) => {
    // Reference to the Points object for animation
    const ref = useRef<PointsType | null>(null);

    // Generate random star positions inside a sphere
    const [sphere] = useState(() => {
        const count = 5000; // Number of stars
        const positions = new Float32Array(count * 3); // Each star needs x,y,z

        // Fill the array with random points inside a sphere
        for (let i = 0; i < count; i++) {
            // Generate a random point inside a sphere with radius 1.2
            const point = random.inSphere(new Float32Array(3), { radius: 1.2 });
            positions[i * 3] = point[0]; // x coordinate
            positions[i * 3 + 1] = point[1]; // y coordinate
            positions[i * 3 + 2] = point[2]; // z coordinate
        }

        return positions;
    });

    // Animation loop: rotate the stars slowly
    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10; // Rotate around X axis
            ref.current.rotation.y -= delta / 15; // Rotate around Y axis
        }
    });

    return (
        // Group with initial rotation for better visual angle
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                stride={3} // Each point has 3 values (x,y,z)
                positions={sphere}
                frustumCulled // Optimization: hide points outside view
                {...props}
            >
                <PointMaterial
                    transparent // Allow transparency
                    color="#4A90D" // White color
                    size={0.002} // Size of each star
                    sizeAttenuation // Size changes with distance
                    depthWrite={false} // Disable depth writing for better performance
                />
            </Points>
        </group>
    );
};

/**
 * StarsCanvas Component - Wraps the StarBackground in a full-screen canvas
 */
export const StarsCanvas = () => (
    // Full-screen fixed container with z-index behind everything
    <div className="w-full h-auto fixed inset-0 -z-10">
        <Canvas
            camera={{ position: [0, 0, 1] }}
            style={{ background: "#030014" }}
        >
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);
