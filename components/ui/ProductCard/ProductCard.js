import styles from "./ProductCard.module.css";
import {
  sora_Regular,
  sora_Light,
  sora_Semibold,
  sora_ExtraBold,
} from "@/app/layout";
export default function ProductCard() {
  return (
    <div
      style={{
        borderRadius: "30px 0px 30px 0px",
        boxShadow: "2px -2px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className={styles.container}>
        <div className={`${sora_Light.className} ${styles.availability}`}>
          <span className={styles.dot}></span>
          <p>nicht lieferbar</p>
        </div>
        <img src="/medizin.png" alt="Medizin" width={310} height={150} />
      </div>
      <div>
        <div className={styles.medizinInfo}>
          <div className={`${sora_Semibold.className} ${styles.headTag}`}>
            Canify
          </div>
          <div className={`${sora_Regular.className} ${styles.tags}`}>
            <div className={styles.thcTag}>THC 18%</div>
            <div className={styles.cbdTag}>CBD &lt; 1%</div>
            <img src="/Bestrahlt.svg" width={24} height={24} />
          </div>
          <div className={`${sora_Semibold.className} ${styles.medizinName}`}>
            Cannabis Flos 18/1 PT Mango
          </div>
          <div className={`${sora_Regular.className} ${styles.medizinContent}`}>
            <div>Kultivar</div>
            <div
              style={{
                borderBottom: "2px dotted var(--sea-serpent)",
              }}
            ></div>
            <div
              style={{
                textAlign: "right",
              }}
            >
              Mango
            </div>
            <div>Genetik</div>
            <div
              style={{
                borderBottom: "2px dotted var(--sea-serpent)",
              }}
            ></div>
            <div
              style={{
                textAlign: "right",
              }}
            >
              Hybrid
            </div>
          </div>
          <div className={styles.priceTag}>
            <div className={`${sora_ExtraBold.className} ${styles.price}`}>
              <span>€</span>11,66
              <div
                className={sora_Light.className}
                style={{
                  fontSize: "12px",
                  lineHeight: "15.12px",
                }}
              >
                pro Gramm
              </div>
            </div>
            <div className={styles.addToCartBtn}>in den Warenkorb</div>
          </div>
        </div>
      </div>
    </div>
  );
}
