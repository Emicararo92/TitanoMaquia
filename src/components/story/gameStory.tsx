/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import styles from "../../style/gameStory.module.css";
import { InteractiveRubikCube } from "../cuboRubik/cuboRubikA";

function StoryGame() {
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
      });
    });
  }, []);

  const toggleScroll = () => {
    setIsScrolling(!isScrolling);
  };

  return (
    <section className={styles.gameDescription} data-aos="fade-up">
      <div className={styles.heroText}>
        {/* Cubo Rubik */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          style={{ flex: 1, position: "relative", zIndex: 2 }}
        >
          <InteractiveRubikCube />
        </div>

        {/* Contenido de texto */}
        <div className={styles.textWrapper}>
          <div
            className={`${styles.textCarousel} ${
              isScrolling ? styles.scrolling : styles.stop
            }`}
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className={styles.textContent}>
              <h2 className={styles.gameTitle}>Infinite Pathways</h2>

              <p>
                <strong>Infinite Pathways</strong> es un puzzle centrado en un
                solo objeto: un cubo. El cubo se mueve rotando sobre sí mismo, y
                el objetivo es hacer coincidir la cara inferior con el símbolo o
                color del suelo para sumar puntos y avanzar.
              </p>

              <p>
                El juego se inspira en <em>Endorfun</em> (1995), otro puzzle con
                mecánicas de rotación de cubo.
              </p>

              <p>
                <strong>Modos de juego:</strong>
              </p>

              <ul className={styles.featureList}>
                <li>
                  <strong>Adventure Mode:</strong> Progresión por zonas. Cada
                  zona se desbloquea resolviendo niveles anteriores. Desbloquea
                  cosméticos para el segundo modo.
                </li>
                <li>
                  <strong>Challenge Mode:</strong> Sin progresión. Múltiples
                  dificultades y variantes como "Zen Mode" (sin perder) o
                  "Dynamic Grid Mode" (el tablero se achica).
                </li>
              </ul>

              <p>
                El estilo visual es onírico, surrealista y minimalista. La
                música cambia según la zona, pudiendo el usuario elegir entre
                clásica, jazz o psicodélica.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de control */}
      <button
        onClick={toggleScroll}
        className={styles.scrollToggleButton}
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {isScrolling ? "⏸ Pausar scroll" : "▶ Reanudar scroll"}
      </button>
    </section>
  );
}

export default StoryGame;
