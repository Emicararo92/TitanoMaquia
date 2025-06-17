"use client";

import { useRef, useState, useEffect } from "react";
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
  const [isInteracting, setIsInteracting] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0);

  // Rotación automática cuando no hay interacción
  useFrame((state) => {
    if (!modelRef.current) return;

    // Si no hay interacción, agregamos rotación automática
    if (!isInteracting) {
      const time = state.clock.getElapsedTime();
      setTargetRotation({
        x: Math.sin(time * 0.3) * 0.2,
        y: Math.sin(time * 0.2) * 0.5,
      });
    }

    // Aplicamos scroll rotation en el eje Y
    const targetY = targetRotation.y + scrollRotation;

    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      targetRotation.x,
      0.05
    );
    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      targetY,
      0.05
    );
  });

  const handlePointerMove = (e: PointerEvent) => {
    setIsInteracting(true);
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    setTargetRotation({
      x: (clientY / innerHeight - 0.5) * Math.PI * 1.2,
      y: (clientX / innerWidth - 0.5) * Math.PI * 1.5,
    });
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
    setTargetRotation({ x: 0, y: 0 });
  };

  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Normalizamos el scroll entre 0 y 1 basado en la posición
      const scrollPosition =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      // Mapeamos a rotación (-0.5 a 0.5 radianes)
      setScrollRotation(scrollPosition * 2 - 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={3.5}
      onPointerMove={handlePointerMove}
      onPointerOver={() => setIsInteracting(true)}
      onPointerOut={handleInteractionEnd}
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
