import styles from "./MenuButton.module.css";
export default function MenuButton() {
  return (
    <div className={styles.container}>
      <img src="/barmenu.svg" width={24} height={24} style={{
        padding: "2px"
      }}/>
    </div>
  );
}
