"use client";
import styles from "../../style/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/company/titanomaquiagames/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://titanomaquiagames.itch.io/infinite-pathways"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Itch.io"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.8c-6 0-10.8-4.8-10.8-10.8S6 1.2 12 1.2s10.8 4.8 10.8 10.8-4.8 10.8-10.8 10.8zM8.4 7.2H6v9.6h2.4V7.2zm3.6 0H9.6v9.6h2.4V7.2zm3.6 0h-2.4v9.6h2.4V7.2z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@TitanomaquiaGames"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
        <div className={styles.copyright}>
          © 2025 Titanomaquia Games. Todos los derechos reservados.
          <br />
          <span className={styles.trademark}>
            Titanomaquia® es una marca registrada.
          </span>
        </div>
      </div>
    </footer>
  );
}
