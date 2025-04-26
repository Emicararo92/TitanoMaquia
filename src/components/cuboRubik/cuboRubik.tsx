"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const RubikCube = () => {
  const cubeRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.x = THREE.MathUtils.lerp(
      cubeRef.current.rotation.x,
      targetRotation.x,
      0.1
    );
    cubeRef.current.rotation.y = THREE.MathUtils.lerp(
      cubeRef.current.rotation.y,
      targetRotation.y,
      0.1
    );
  });

  const handlePointerMove = (
    e: THREE.Event & { clientX: number; clientY: number }
  ) => {
    if (!cubeRef.current) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    setTargetRotation({
      x: (clientY / innerHeight - 0.5) * Math.PI * 0.5,
      y: (clientX / innerWidth - 0.5) * Math.PI * 0.5,
    });
  };

  // Colores para cada cara del cubo (puedes personalizarlos)
  const faceColors = [
    "#FF0000", // Rojo - Derecha
    "#00FF00", // Verde - Izquierda
    "#0000FF", // Azul - Superior
    "#FFFF00", // Amarillo - Inferior
    "#FFA500", // Naranja - Frontal
    "#FFFFFF", // Blanco - Trasera
  ];

  return (
    <group
      ref={cubeRef}
      onPointerMove={handlePointerMove}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => {
        setHover(false);
        setTargetRotation({ x: 0, y: 0 });
      }}
    >
      {/* Crear cada cara del cubo con color independiente */}
      <mesh position={[0, 0, 1.01]}>
        {" "}
        {/* Frontal */}
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={hovered ? "#FF4500" : faceColors[4]} />
      </mesh>
      <mesh position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]}>
        {" "}
        {/* Trasera */}
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={hovered ? "#F5F5F5" : faceColors[5]} />
      </mesh>
      <mesh position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        {" "}
        {/* Derecha */}
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={hovered ? "#DC143C" : faceColors[0]} />
      </mesh>
      <mesh position={[-1.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        {" "}
        {/* Izquierda */}
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={hovered ? "#32CD32" : faceColors[1]} />
      </mesh>
      <mesh position={[0, 1.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {" "}
        {/* Superior */}
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={hovered ? "#1E90FF" : faceColors[2]} />
      </mesh>
      <mesh position={[0, -1.01, 0]} rotation={[Math.PI / 2, 0, 0]}>
        {" "}
        {/* Inferior */}
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={hovered ? "#FFD700" : faceColors[3]} />
      </mesh>

      {/* Divisiones del cubo Rubik */}
      {[-0.66, 0, 0.66].map((x) =>
        [-0.66, 0, 0.66].map((y) =>
          [-0.66, 0, 0.66].map((z) => {
            if (x === 0 && y === 0 && z === 0) return null;
            return (
              <line key={`${x}-${y}-${z}`}>
                <edgesGeometry
                  attach="geometry"
                  args={[new THREE.BoxGeometry(0.6, 0.6, 0.6)]}
                />
                <lineBasicMaterial
                  attach="material"
                  color="#000000"
                  linewidth={1}
                />
              </line>
            );
          })
        )
      )}
    </group>
  );
};

export const InteractiveRubikCube = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
        minWidth: "200px",
        minHeight: "200px",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RubikCube />
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
