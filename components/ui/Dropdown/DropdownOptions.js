import styles from "./Dropdown.module.css";
import { sora_Semibold } from "@/app/layout";
export function DropdownOptions({ label, options }) {
  const handleClick = () => {
    const dropdown = document.querySelector(".dropdown");
    console.log(dropdown);
  };
  return (
    <div>
      <label className={`${sora_Semibold.className} ${styles.text}`}>
        {label}
      </label>
      <select className={styles.dropdown}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
