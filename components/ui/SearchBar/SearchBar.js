import styles from "./SearchBar.module.css";
import { sora_Regular } from "@/app/layout";
export default function SearchBar({ style = {} }) {
  return (
    <div className={styles.container} style={style}>
      <input
        type="search"
        placeholder="Suchen"
        style={{
          border: "none",
          background: "var(--antiflash-white)",
          color: "var(--fluorescent-blue)",
        }}
        className={sora_Regular.className}
      />
      <img src="/search.svg" height={20} width={20} alt="Search" />
    </div>
  );
}
