import styles from "./Logo.module.css";
import { sora_Semibold } from "@/app/layout";
export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.leaf}></div>
      <div className={`${styles.logoText} ${sora_Semibold.className}`}>
        Blüten
      </div>
    </div>
  );
}
