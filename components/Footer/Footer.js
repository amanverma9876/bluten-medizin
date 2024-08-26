import styles from "./Footer.module.css";
import { sora_Light } from "@/app/layout";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.sectionOne}>
          <ul className={sora_Light.className}>
            <li>AGB</li>
            <li>Impressum</li>
            <li>Datenschutz</li>
          </ul>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.sectionTwoItem}>
            <div className={styles.leaf}></div>
            <div className={styles.sectionTwoItemText}>Rezept einlösen</div>
          </div>

          <div className={styles.sectionTwoItem}>
            <div className={styles.leaf}></div>
            <div className={styles.sectionTwoItemText}>Live Bestand</div>
          </div>

          <div className={styles.sectionTwoItem}>
            <div className={styles.leaf}></div>
            <div className={styles.sectionTwoItemText}>Videosprechstunde</div>
          </div>

          <div className={styles.sectionTwoItem}>
            <div className={styles.leaf}></div>
            <div className={styles.sectionTwoItemText}>FAQs</div>
          </div>

          <div className={styles.sectionTwoItem}>
            <div className={styles.leaf}></div>
            <div className={styles.sectionTwoItemText}>Kontakt</div>
          </div>
        </div>
        <div className={styles.sectionThree}>
          <span>Standort</span>
          <p>Bergstraße 49 - 5769469 Weinheim(3 Glocken Quartier)</p>
        </div>
        <div className={styles.sectionFour}>
          <span>Telefon</span>
          <p>0223 545 5250</p>
        </div>
        <div className={styles.sectionFive}>
          <span>Öffnungszeiten</span>
          <span>Mo-Fr</span>
          <div>09:00 – 18:00 Uhr</div>
          <span>Sa</span>
          <div>09:00 – 14:00 Uhr</div>
        </div>
      </div>
    </div>
  );
}
