// components/Hero/Hero.tsx
import Image from "next/image";
import styles from "../../../Styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      {/* Navbar (asumiendo altura de 80px) */}
      <nav className="h-[80px] bg-[#a05040] w-full fixed top-0 z-50">
        {/* Tu navbar aquí */}
      </nav>

      <section className={styles.hero}>
        <div className={styles.bannerContainer}>
          <Image
            src="/Banner.png"
            alt="Banner principal"
            fill
            priority
            quality={85}
            className={styles.bannerImage}
          />
        </div>
      </section>
    </>
  );
}
