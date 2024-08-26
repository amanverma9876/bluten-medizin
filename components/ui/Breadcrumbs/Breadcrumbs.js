import styles from "./Breadcrumbs.module.css";
import { sora_Bold, sora_Regular } from "@/app/layout";
export default function Breadcrumbs() {
  return (
    <div className={`${sora_Regular.className} ${styles.container}`}>
      <div className={styles.text}>Home</div>
      <div className={styles.arrow}>
        <img src="/arrow.svg" width={20} height={9.69} />
      </div>
      <div className={styles.text}>Livebestand</div>
      <div className={styles.arrow}>
        <img src="/arrow.svg" width={20} height={9.69} />
      </div>
      <div className={`${sora_Bold.className} ${styles.textActive}`}>
        Cannabis Blüten
      </div>
    </div>
  );
}
