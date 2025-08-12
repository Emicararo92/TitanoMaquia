/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import SingleModel from "../SingleModel3D/SingleModel";
import styles from "../../../../Styles/MG3D.module.css";

const modelPaths = [
  "/cubeA.glb",
  "/cubeB.glb",
  "/cubeC.glb",
  "/cubeD.glb",
  "/cubeE.glb",
  "/cubeF.glb",
];

export default function ModelGallery3D() {
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      {expandedModel && (
        <div
          className={styles.modelOverlay}
          onClick={() => setExpandedModel(null)}
        />
      )}
      <h1 className="text-center m-3.5">Skinks</h1>

      <div className={styles.cardsGrid}>
        {modelPaths.map((model, index) => (
          <div
            key={index}
            className={styles.modelCard}
            onClick={() => setExpandedModel(model)}
          >
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <SingleModel
                  modelPath={model}
                  isActive={expandedModel === model}
                />
              </Suspense>
            </Canvas>
          </div>
        ))}
      </div>

      {expandedModel && (
        <div className={styles.expandedView}>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Suspense fallback={null}>
              <SingleModel
                modelPath={expandedModel}
                isExpanded
                onClose={() => setExpandedModel(null)}
              />
              <OrbitControls />
            </Suspense>
          </Canvas>
          <button
            className={styles.closeButton}
            onClick={() => setExpandedModel(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
