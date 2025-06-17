"use client";
import Link from "next/link";
import styles from "../../style/home.module.css";
import { InteractiveRubikCube } from "../../utils/cuboRubik/cuboRubik";
import HowToPlay from "../howToPlay/howToPlay";
import StoryGame from "../story/gameStory";

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
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=TRcmOobqceA&t=27s"
          >
            <button className={styles.ctaButton}>Ver Trailer</button>
          </Link>
        </div>
        <div className={styles.rubikHero}>
          <InteractiveRubikCube modelPath="/cubeA.glb" />
        </div>
      </div>
      <StoryGame />
      <HowToPlay />
    </div>
  );
}
