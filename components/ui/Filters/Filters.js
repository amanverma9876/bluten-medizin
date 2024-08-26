import Slider from "../Slider/Slider";
import styles from "./Filters.module.css";
export default function Filters({ style = {} }) {
  return (
    <div style={style}>
      <div className={styles.heading}>Filter</div>
      <div className={styles.filter_heading_1}>Preis</div>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class="slider"
          id="myRange"
        />
      </div>
      <div className={styles.filter_heading_2}>Hersteller</div>
      <div className={styles.checkboxGroup}>
        <div className={styles.checkboxItem}>
          <input type="checkbox" className={styles.checkbox}/>
          <div className={styles.checkboxValue}>ADREXpharma</div>
        </div>
        <div className={styles.checkboxItem}>
          <input type="checkbox" className={styles.checkbox}/>
          <div className={styles.checkboxValue}>Aurora</div>
        </div>
        <div className={styles.checkboxItem}>
          <input type="checkbox" className={styles.checkbox}/>
          <div className={styles.checkboxValue}>Avaay</div>
        </div>
        <div className={styles.checkboxItem}>
          <input type="checkbox" className={styles.checkbox}/>
          <div className={styles.checkboxValue}>Bedrocan</div>
        </div>
        <div className={styles.checkboxItem}>
          <input type="checkbox" className={styles.checkbox}/>
          <div className={styles.checkboxValue}>Cannamedical</div>
        </div>
      </div>
      <div className={styles.applyFilter}>in den Warenkorb</div>
    </div>
  );
}
