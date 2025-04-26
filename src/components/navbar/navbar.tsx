"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../style/navbar.module.css";
import Image from "next/image";
import logoA from "../../../public/logo.png";
import logoB from "../../../public/logoMecano.png";

export default function Navbar() {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);

  // Reinicia la animación cada vez que cambia la ruta
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      {/* Primera fila - Logos y nombre del juego */}
      <div className={styles.topBar}>
        <div className={styles.logoLeft}>
          <Image
            src={logoA}
            alt="Logo izquierdo"
            className={styles.logo}
            width={200}
            height={200}
          />
        </div>
        <div className={styles.gameTitle}>
          <h1>Infinite Pathways</h1>
        </div>
        <div className={styles.logoRight}>
          <Image
            src={logoB}
            alt="Logo derecho"
            width={200}
            height={200}
            className={styles.logo}
          />
        </div>
      </div>

      {/* Segunda fila - Links de navegación */}
      <div className={styles.bottomBar}>
        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.link} ${styles.linkHome} ${
              animate ? styles.boingInUp : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${styles.link} ${styles.linkAbout} ${
              animate ? styles.boingInUp : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            About Us
          </Link>
          <Link
            href="/how-to-play"
            className={`${styles.link} ${styles.linkHowToPlay} ${
              animate ? styles.boingInUp : ""
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            How to Play
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} ${styles.linkContact} ${
              animate ? styles.boingInUp : ""
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
