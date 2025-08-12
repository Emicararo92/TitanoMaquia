"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SingleModel({
  modelPath,
  isExpanded = false,
  isActive = false,
  shouldRotate = true,
}: {
  modelPath: string;
  isExpanded?: boolean;
  isActive?: boolean;
  shouldRotate?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (groupRef.current && shouldRotate) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} scale={isExpanded ? 1.5 : isActive ? 1.1 : 1}>
      <primitive object={scene} rotation={[0, Math.PI / 4, 0]} />
    </group>
  );
}
