import React from "react";
import Image from "next/image";
import styles from "../../Styles/DivLine.module.css";

interface BannerDivisorProps {
  logoSrc: string;
  altText?: string;
  slogan?: string;
}

export default function DivLine({
  logoSrc,
  altText = "Logo",
  slogan,
}: BannerDivisorProps) {
  return (
    <div className={styles.divisor}>
      <div className={styles.logoContainer}>
        <Image src={logoSrc} alt={altText} width={40} height={40} />
      </div>
      {slogan && <h2 className={styles.slogan}>{slogan}</h2>}
    </div>
  );
}
