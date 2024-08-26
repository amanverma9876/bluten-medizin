import { DropdownOptions } from "./DropdownOptions";
import styles from "./Dropdown.module.css";
export default function Dropdown({ label, options }) {
  return (
    <div className={styles.container}>
      {/* <DropdownOptions label={label} options={options} /> */}
      Sortieren nach
      <div className={styles.arrow}></div>
    </div>
  );
}
