/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type PointerEvent = THREE.Event & {
  clientX: number;
  clientY: number;
};

const RubikCubeModelA = () => {
  const modelRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/cubeB.glb");
  const [hovered, setHover] = useState(false);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      targetRotation.x,
      0.1
    );
    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      targetRotation.y,
      0.1
    );
  });

  const handlePointerMove = (e: PointerEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    setTargetRotation({
      x: Math.max(
        Math.min((clientY / innerHeight - 0.5) * Math.PI * 0.5, Math.PI / 2),
        -Math.PI / 2
      ),
      y: (clientX / innerWidth - 0.5) * Math.PI * 0.5,
    });
  };

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={2}
      onPointerMove={handlePointerMove}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => {
        setHover(false);
        setTargetRotation({ x: 0, y: 0 });
      }}
    />
  );
};

export const InteractiveRubikCubeB = () => {
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        cursor: "pointer",
        margin: "0 auto",
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RubikCubeModelA />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/cubeB.glb");
