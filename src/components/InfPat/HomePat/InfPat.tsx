// components/SkillsShowcase/SkillsShowcase.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../../Styles/InfPat.module.css";

export default function SkillsShowcase() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs = [
    {
      id: 1,
      title: "Desarrollo",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/e_ygor7y.jpg",
      desc: "Motor gráfico con WebGL y físicas avanzadas",
    },
    {
      id: 2,
      title: "Música",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/c_wu8zp5.jpg",
      desc: "Banda sonora compuesta por orquesta sinfónica",
    },
    {
      id: 3,
      title: "Diseño",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/a_sz5zjf.jpg",
      desc: "Arte conceptual premiado internacionalmente",
    },
    {
      id: 4,
      title: "Narrativa",
      image:
        "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/b_ci6cky.jpg",
      desc: "Historia no lineal con múltiples finales",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabButtons}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        <div className={styles.imageWrapper}>
          <Image
            src={tabs.find((t) => t.id === activeTab)?.image || ""}
            alt={tabs.find((t) => t.id === activeTab)?.title || ""}
            fill
            className={styles.image}
            priority
          />
        </div>
        <p className={styles.description}>
          {tabs.find((t) => t.id === activeTab)?.desc}
        </p>
      </div>
    </div>
  );
}
