"use client";
import { useRef, useEffect } from "react";
import styles from "../../style/howToPlay.module.css";
import { InteractiveRubikCube } from "../../utils/cuboRubik/cuboRubik";
import { useAutoScroll } from "../../utils/autoScroll/autoScroll";

export default function HowToPlay() {
  const textCarouselRef = useRef<HTMLDivElement>(null);
  const { isScrolling, toggleScroll, setIsMouseOver } =
    useAutoScroll(textCarouselRef);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
      });
    });
  }, []);

  return (
    <section className={styles.howToPlaySection} data-aos="fade-up">
      <div className={styles.heroText}>
        {/* Cubo Rubik */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className={styles.cubeContainer}
        >
          <InteractiveRubikCube modelPath="/cubeC.glb" />
        </div>

        {/* Contenido de texto */}
        <div className={styles.textWrapper}>
          <div
            ref={textCarouselRef}
            className={styles.textContentContainer}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Cómo Jugar</h2>

              <div className={styles.rulesContainer}>
                <div className={styles.ruleBox}>
                  <h3>Reglas Generales</h3>
                  <p>
                    Las reglas varían según el modo de juego, pero comparten un
                    núcleo común. El modo <strong>Aventura</strong> usa sets de
                    reglas del modo <strong>Desafío</strong> con progresión
                    orgánica.
                  </p>
                  <p>
                    La totalidad de combinaciones de reglas se agrupan en los
                    modos de juego del modo Desafío, donde pueden cambiar
                    parámetros como:
                  </p>
                  <ul className={styles.featureList}>
                    <li>Ratio de aparición de elementos</li>
                    <li>Duración de los mismos</li>
                    <li>Dificultad base</li>
                  </ul>
                </div>

                <div className={styles.ruleBox}>
                  <h3>Condición de Victoria</h3>
                  <p>
                    <span className={styles.highlight}>Objetivos:</span> Cada
                    celda de color completada suma un punto. Cada nivel requiere
                    una cantidad específica de objetivos.
                  </p>
                  <p className={styles.exception}>
                    *Excepto en modos infinitos o con reglas especiales
                  </p>
                </div>

                <div className={styles.ruleBox}>
                  <h3>Condición de Derrota</h3>
                  <ul className={styles.featureList}>
                    <li>
                      <strong>Tiempo:</strong> Límite de tiempo agotado
                    </li>
                    <li>
                      <strong>Bloqueo:</strong> Sin movimientos posibles
                    </li>
                    <li>
                      <strong>Movimientos:</strong> No cumplir objetivos en
                      movimientos limitados
                    </li>
                  </ul>
                </div>

                <div className={styles.ruleBox}>
                  <h3>Grilla de Juego</h3>
                  <p>
                    <span className={styles.highlight}>Tamaño:</span>
                    <span className={styles.difficulty}>
                      Grande = Mayor facilidad (más espacio para maniobrar)
                    </span>
                    <span className={styles.difficulty}>
                      Pequeña = Mayor desafío (menos opciones de movimiento)
                    </span>
                  </p>
                  <p>
                    Puede adoptar cualquier forma según necesidades del nivel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
