import React from "react";
import styles from "../../Styles/Banner.module.css";

interface BannerProps {
  backgroundImage: string;
  slogan: string;
  // onButtonClick?: () => void; // si querés botón luego
}

export default function Banner({ backgroundImage, slogan }: BannerProps) {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="banner"
    >
      <div className={styles.overlay}>
        <h1 className={styles.slogan}>{slogan}</h1>
        {/* <button className={styles.cta} onClick={onButtonClick}> */}
        {/*   Call to action */}
        {/* </button> */}
      </div>
    </section>
  );
}
