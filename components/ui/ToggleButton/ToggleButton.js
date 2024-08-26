import styles from "./ToggleButton.module.css";
import { sora_Semibold } from "@/app/layout";
export default function ToggleButton() {
  return (
    <div className={styles.container}>
      <div className={`${styles.text} ${sora_Semibold.className}`}>Verfügbarkeit</div>
      <span className={styles.switch}>
        <input id="switch-rounded" type="checkbox" />
        {/* <label for="switch-rounded"></label> */}
      </span>
    </div>
  );
}
