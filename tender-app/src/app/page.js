import Image from "next/image";
import styles from "./page.module.css";
import InstallBootstrap from '../components/InstallBootstrap'

export default function Home() {
  return (
    <main className={styles.main}>
    <InstallBootstrap/>
    </main>
  );
}
