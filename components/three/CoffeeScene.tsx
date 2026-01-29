"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Instance, Instances, ContactShadows } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

/**
 * Procedural Coffee Cup Component
 */
function CoffeeCup(props: any) {
    return (
        <group {...props}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <group rotation={[0, -0.5, 0]}>
                    {/* Main Cup Body */}
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
                        <meshStandardMaterial color="#d4d4d4" roughness={0.1} />
                    </mesh>

                    {/* Cup Handle */}
                    <mesh position={[0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <torusGeometry args={[0.35, 0.08, 16, 32, Math.PI]} />
                        <meshStandardMaterial color="#d4d4d4" roughness={0.1} />
                    </mesh>

                    {/* Coffee Liquid */}
                    <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <circleGeometry args={[0.7, 32]} />
                        <meshStandardMaterial color="#3e2723" roughness={0.6} metalness={0.1} />
                    </mesh>

                    {/* Saucer */}
                    <mesh position={[0, -0.65, 0]}>
                        <cylinderGeometry args={[1.2, 1, 0.1, 32]} />
                        <meshStandardMaterial color="#d4d4d4" roughness={0.1} />
                    </mesh>
                </group>
            </Float>
        </group>
    );
}

/**
 * Animated Steam Component
 */
function Steam() {
    const steamRef = useRef<THREE.Group>(null);
    const particles = useMemo(() => {
        return Array.from({ length: 8 }).map(() => ({
            x: (Math.random() - 0.5) * 0.3,
            y: Math.random() * 0.5,
            z: (Math.random() - 0.5) * 0.3,
            scale: 0.5 + Math.random() * 0.5,
            speed: 0.005 + Math.random() * 0.01,
            offset: Math.random() * Math.PI * 2
        }));
    }, []);

    useFrame((state) => {
        if (!steamRef.current) return;
        steamRef.current.children.forEach((child, i) => {
            const p = particles[i];
            // Move up
            child.position.y += p.speed;
            // Drift
            child.position.x += Math.sin(state.clock.elapsedTime * 0.5 + p.offset) * 0.002;

            // Reset if too high
            if (child.position.y > 2.5) {
                child.position.y = 0.5;
                // Reset opacity logic needs material access, simplifying by just looping position
            }

            // Simple scaling pulse
            const s = p.scale + Math.sin(state.clock.elapsedTime * 2 + p.offset) * 0.1;
            child.scale.set(s, s, s);

            // Opacity fade based on height
            const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
            if (material) {
                // Fade in at bottom, fade out at top
                const opacity = Math.max(0, 1 - (child.position.y - 0.5) / 1.5);
                material.opacity = opacity * 0.4;
            }
        });
    });

    return (
        <group ref={steamRef} position={[0, 0.6, 0]}>
            {particles.map((p, i) => (
                <mesh key={i} position={[p.x, p.y + 0.5, p.z]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.3} depthWrite={false} />
                </mesh>
            ))}
        </group>
    );
}

/**
 * Floating Beans Component
 */
function Bean({ position, rotation, scale = 1 }: any) {
    return (
        <Instance position={position} rotation={rotation} scale={scale} />
    );
}

function Beans({ count = 25 }) {
    const meshRef = useRef<any>(null);

    // Create chaotic positions AROUND the cup
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            // Distribute nicely around
            const angle = Math.random() * Math.PI * 2;
            const radius = 2 + Math.random() * 4; // 2 to 6 units away
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius * 0.5;
            const y = (Math.random() - 0.5) * 6;

            const speed = 0.02 + Math.random() / 50;

            temp.push({ speed, x, y, z, rotationParams: [Math.random(), Math.random(), Math.random()] });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!meshRef.current) return;
        // Rotate the whole bean system slowly
        meshRef.current.rotation.y += 0.002;
    });

    return (
        <Instances range={count} ref={meshRef}>
            <sphereGeometry args={[0.2, 12, 12]} />
            <meshStandardMaterial color="#3e2723" roughness={0.7} />

            {particles.map((data, i) => (
                <Float
                    key={i}
                    speed={data.speed * 40}
                    rotationIntensity={2}
                    floatIntensity={2}
                    position={[data.x, data.y, data.z]}
                >
                    <Bean scale={[1, 0.7, 0.6]} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]} />
                </Float>
            ))}
        </Instances>
    );
}

export default function CoffeeScene() {
    const [dpr, setDpr] = useState(1);

    useEffect(() => {
        setDpr(Math.min(window.devicePixelRatio, 1.5));
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 35 }} // Zoomed out a bit more
                dpr={dpr}
            >
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={1.5} color="#f59e0b" />
                <spotLight position={[-10, 5, -5]} intensity={0.5} color="#fff" />

                <group position={[1.5, -0.5, 0]} rotation={[0.1, -0.2, 0]}>
                    <CoffeeCup />
                    <Steam />
                </group>

                <Beans count={30} />

                {/* Soft shadow for the cup if it was on ground, but it floats. Optional. */}

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
