import React from "react";
import styles from "../../Styles/DivLineSmall.module.css";

interface CategoryDividerProps {
  label?: string;
}

export default function DivLineSmall({ label }: CategoryDividerProps) {
  return (
    <div className={styles.divider}>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
