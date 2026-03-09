import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const createTextTexture = (text: string) => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.clearRect(0, 0, 64, 64);
        ctx.font = 'bold 42px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
};

const Globe = ({ isDark }: { isDark: boolean }) => {
    const groupRef = useRef<THREE.Group>(null);
    const rotationRef = useRef({ x: 0, y: 0 });

    const { positions0, positions1, colors0, colors1 } = useMemo(() => {
        const pos0: number[] = [];
        const pos1: number[] = [];
        const col0: number[] = [];
        const col1: number[] = [];
        const numPoints = 6000;
        const radius = 2.5;

        const phi = Math.PI * (3 - Math.sqrt(5));

        // For better visibility on light mode we might want slightly darker blues,
        // but the default blues are already quite readable.
        const colorBase = new THREE.Color('#0284c7'); // sky-600
        const colorHighlight = new THREE.Color('#38bdf8'); // sky-400
        const colorDim = new THREE.Color('#0369a1'); // sky-700

        for (let i = 0; i < numPoints; i++) {
            const y = 1 - (i / (numPoints - 1)) * 2;
            const r = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;

            const px = x * radius;
            const py = y * radius;
            const pz = z * radius;

            const rand = Math.random();
            let color = colorBase;
            if (rand > 0.9) color = colorHighlight;
            else if (rand < 0.3) color = colorDim;

            if (Math.random() > 0.5) {
                pos0.push(px, py, pz);
                col0.push(color.r, color.g, color.b);
            } else {
                pos1.push(px, py, pz);
                col1.push(color.r, color.g, color.b);
            }
        }

        return {
            positions0: new Float32Array(pos0),
            positions1: new Float32Array(pos1),
            colors0: new Float32Array(col0),
            colors1: new Float32Array(col1),
        };
    }, []);

    const tex0 = useMemo(() => createTextTexture('0'), []);
    const tex1 = useMemo(() => createTextTexture('1'), []);

    useFrame((state) => {
        if (groupRef.current) {
            rotationRef.current.y += 0.001; // slow continuous rotation

            const targetX = state.pointer.y * 0.1;
            const targetY = rotationRef.current.y + state.pointer.x * 0.1;

            groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
            groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Inner dark sphere to give depth and obscure back points slightly */}
            <mesh>
                <sphereGeometry args={[2.4, 32, 32]} />
                <meshBasicMaterial
                    color={isDark ? "#020617" : "#e2e8f0"}
                    transparent
                    opacity={isDark ? 0.8 : 0.6}
                />
            </mesh>

            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions0, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        args={[colors0, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.08}
                    map={tex0}
                    transparent
                    opacity={isDark ? 0.8 : 0.9}
                    depthWrite={false}
                    blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
                    vertexColors
                />
            </points>
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions1, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        args={[colors1, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.08}
                    map={tex1}
                    transparent
                    opacity={isDark ? 0.8 : 0.9}
                    depthWrite={false}
                    blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
                    vertexColors
                />
            </points>
        </group>
    );
};

const Particles = ({ isDark }: { isDark: boolean }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const particlesCount = 1000;

    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
            pointsRef.current.rotation.x = state.clock.elapsedTime * 0.005;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color={isDark ? "#0ea5e9" : "#3b82f6"}
                transparent
                opacity={isDark ? 0.4 : 0.6}
                depthWrite={false}
                blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
            />
        </points>
    );
};

interface BinaryGlobeProps {
    isDark?: boolean;
}

export default function BinaryGlobe({ isDark = true }: BinaryGlobeProps) {
    return (
        <div className="w-full h-full absolute inset-0 overflow-hidden pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6.7], fov: 45 }}>
                {/* We use conditional fog color based on theme, or match background roughly */}
                <fog attach="fog" args={[isDark ? '#020617' : '#f8fafc', 4, 10]} />
                <Globe isDark={isDark} />
                <Particles isDark={isDark} />
            </Canvas>
        </div>
    );
}
