"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

type PointerEvent = THREE.Event & {
  clientX: number;
  clientY: number;
};

type RubikCubeModelProps = {
  modelPath: string;
};

const RubikCubeModel = ({ modelPath }: RubikCubeModelProps) => {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (!modelRef.current) return;
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      targetRotation.x,
      0.05
    );
    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      targetRotation.y,
      0.05
    );
  });

  const handlePointerMove = (e: PointerEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    setTargetRotation({
      x: (clientY / innerHeight - 0.5) * Math.PI * 1.2,
      y: (clientX / innerWidth - 0.5) * Math.PI * 1.5,
    });
  };

  const resetRotation = () => setTargetRotation({ x: 0, y: 0 });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={3.5}
      onPointerMove={handlePointerMove}
      onPointerOver={() => {}}
      onPointerOut={resetRotation}
    />
  );
};

type InteractiveRubikCubeProps = {
  modelPath: string;
};

export const InteractiveRubikCube = ({
  modelPath,
}: InteractiveRubikCubeProps) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        aspectRatio: "1 / 1",
        margin: "0 auto",
        cursor: "pointer",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <RubikCubeModel modelPath={modelPath} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

// Preload de todos los cubos disponibles
useGLTF.preload("/cubeA.glb");
useGLTF.preload("/cubeB.glb");
useGLTF.preload("/cubeC.glb");
useGLTF.preload("/cubeD.glb");
useGLTF.preload("/cubeE.glb");
useGLTF.preload("/cubeF.glb");
