"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function WireRing() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x += delta * 0.04;
  });

  return (
    <mesh ref={ref} position={[1.35, 0.1, -0.4]}>
      <torusGeometry args={[1.05, 0.018, 12, 64]} />
      <meshBasicMaterial color="#e08a48" transparent opacity={0.55} />
    </mesh>
  );
}

function InnerKnot() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.08;
  });

  return (
    <mesh ref={ref} position={[1.35, 0.1, -0.4]}>
      <torusKnotGeometry args={[0.38, 0.07, 80, 8]} />
      <meshBasicMaterial color="#7b8cff" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <WireRing />
      <InnerKnot />
    </>
  );
}

export function HeroScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
