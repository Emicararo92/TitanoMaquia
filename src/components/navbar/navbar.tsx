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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <div className={styles.logoLeft}>
          <Link href={"/"}>
            <Image
              src={logoA}
              alt="Logo izquierdo"
              className={styles.logo}
              width={200}
              height={200}
            />
          </Link>
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

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

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

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link
            href="/"
            className={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/how-to-play"
            className={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            How to Play
          </Link>
          <Link
            href="/contact"
            className={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
