import Container from "../Container/Container";
import SearchBar from "../ui/SearchBar/SearchBar";
import styles from "./Navigation.module.css";
import { sora_Bold, sora_Regular } from "@/app/layout";
export default function Navigation() {
  return (
    <Container
      nRows={1}
      nCols={2}
      className="nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <SearchBar
        style={{
          flexBasis: "20%",
        }}
      />
      <div className={`${styles.menuContainer}`}>
        <div className={styles.menuItem}>
          <div className={styles.leaf}></div>
          <div className={`${sora_Bold.className} ${styles.menuText}`}>
            Rezept einlösen
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.leafInactive}></div>
          <div className={`${sora_Regular.className} ${styles.menuText}`}>
            Live Bestand
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.leafInactive}></div>
          <div className={`${sora_Regular.className} ${styles.menuText}`}>
            Videosprechstunde
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.leafInactive}></div>
          <div className={`${sora_Regular.className} ${styles.menuText}`}>
            FAQs
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.leafInactive}></div>
          <div className={`${sora_Regular.className} ${styles.menuText}`}>
            Kontakt
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            margin: "6px 16px 6px 16px",
          }}
        >
          <img src="/cart.svg" width={22.4} height={21} />
          <span className={styles.badge}>1</span>
        </div>
        <div className={`${sora_Regular.className} ${styles.registerButton}`}>
          Anmelden
        </div>
      </div>
    </Container>
  );
}
