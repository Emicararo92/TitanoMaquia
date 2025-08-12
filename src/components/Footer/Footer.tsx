// components/Footer/Footer.tsx (Actualizado)
import { Youtube, Linkedin, Instagram, Sword } from "lucide-react";
import styles from "../../Styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <a href="#" aria-label="YouTube">
            <Youtube className={styles.icon} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className={styles.icon} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className={styles.icon} />
          </a>
        </div>

        <div className={styles.legal}>
          <p>© 2024 TuEmpresa. Todos los derechos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>

        <div className={styles.gameCredits}>
          <Sword className={styles.icon} />
          <p>Infinity Pathways</p>
        </div>
      </div>
    </footer>
  );
}
