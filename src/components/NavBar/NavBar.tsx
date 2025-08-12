// components/Navbar/Navbar.tsx
import Link from "next/link";
import { Gamepad2, Home, Users, Mail } from "lucide-react";
import styles from "../../Styles/NavBar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        
        <Image src="/logo.png" alt="Logo Empresa" width={120} height={40} />
      </div>

      <div className={styles.links}>
        <Link href="#home" className={styles.link}>
          <Home size={18} /> Home
        </Link>
        <Link href="#game" className={styles.link}>
          <Gamepad2 size={18} /> Infinity Pathways
        </Link>
        <Link href="#about" className={styles.link}>
          <Users size={18} /> Nosotros
        </Link>
        <Link href="#contact" className={styles.link}>
          <Mail size={18} /> Contacto
        </Link>
      </div>
    </nav>
  );
}
