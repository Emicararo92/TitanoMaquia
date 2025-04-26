"use client";
import styles from "../../style/home.module.css";
import { InteractiveRubikCube } from "../cuboRubik/cuboRubik";
import { useCallback } from "react";

export default function Home() {
  const tiles = Array.from({ length: 100 });

  const handleHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const tile = e.target as HTMLDivElement;
    tile.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }, []);

  const handleLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const tile = e.target as HTMLDivElement;
    tile.style.backgroundColor = "transparent";
  }, []);

  const handlers = {
    onMouseEnter: handleHover,
    onMouseLeave: handleLeave,
  };

  return (
    <div className={styles.hero}>
      {/* Fondo animado (grid de celdas) */}
      <div className={styles.home}>
        {tiles.map((_, index) => (
          <div key={index} className={styles.tile} {...handlers} />
        ))}
      </div>

      {/* Contenido principal del hero */}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.gameTitle}>
            <span className={styles.titlePart}>Infinite</span>
            <span className={styles.titlePart}>Pathways</span>
          </h1>
          <p className={styles.tagline}>Resuelve. Rota. Trasciende.</p>
          <button className={styles.ctaButton}>Ver Trailer</button>
        </div>

        {/* Cubo Rubik 3D interactivo - Más grande */}
        <div className={styles.rubikHero}>
          <InteractiveRubikCube />
        </div>
      </div>
    </div>
  );
}
