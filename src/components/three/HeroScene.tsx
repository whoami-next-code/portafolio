"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function FloatingOrb({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.15;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={ref} args={[scale, 24, 24]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.25}
          speed={1.2}
          roughness={0.15}
          metalness={0.7}
          transparent
          opacity={0.75}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} color="#818cf8" />
      <pointLight position={[-5, -3, 2]} intensity={0.4} color="#c084fc" />
      <FloatingOrb position={[-1.2, 0.3, 0]} color="#6366f1" scale={0.9} speed={1.2} />
      <FloatingOrb position={[1.4, -0.2, -0.5]} color="#8b5cf6" scale={0.6} speed={1.8} />
      <FloatingOrb position={[0.2, 0.8, -1]} color="#38bdf8" scale={0.35} speed={2.2} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
