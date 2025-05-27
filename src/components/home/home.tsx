"use client";
import styles from "../../style/home.module.css";
import { InteractiveRubikCube } from "../../utils/cuboRubik/cuboRubik";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.gameTitle}>
            <span className={styles.titlePart}>Infinite</span>
            <span className={styles.titlePart}>Pathways</span>
          </h1>
          <p className={styles.tagline}>Resuelve. Rota. Trasciende.</p>
          <button className={styles.ctaButton}>Ver Trailer</button>
        </div>
        <div className={styles.rubikHero}>
          <InteractiveRubikCube modelPath="/cubeA.glb" />
        </div>
      </div>
    </div>
  );
}
