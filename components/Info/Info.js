import Container from "../Container/Container";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import Dropdown from "../ui/Dropdown/Dropdown";
import Logo from "../ui/Logo/Logo";
import MenuButton from "../ui/MenuButton/MenuButton";
import SearchBar from "../ui/SearchBar/SearchBar";
import ToggleButton from "../ui/ToggleButton/ToggleButton";
import styles from "./Info.module.css";
import { sora_Regular } from "@/app/layout";
export default function Info() {
  const dropdownOptions = [
    "Preis (niedrig bis hoch)",
    "Preis (hoch bis niedrig)",
  ];

  return (
    <Container
      nRows={2}
      nCols={2}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        nRows={1}
        nCols={3}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5rem",
        }}
      >
        <Breadcrumbs />
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <div
            className={`${sora_Regular.className}`}
            style={{
              fontSize: "14px",
              lineHeight: "17.64px",
              textAlign: "center",
            }}
          >
            GKV mit Kostenübernahme?
          </div>
          <div className={`${sora_Regular.className} ${styles.pricingBtn}`}>
            Preisoptionen
          </div>
        </div>
      </Container>
      <Container
        nRows={1}
        nCols={2}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <div className={styles.prelimFilters}>
          <SearchBar
            style={{
              flexBasis: "20%",
            }}
          />
          <Dropdown label="Sortieren nach" options={dropdownOptions} />
          <ToggleButton />
          <MenuButton />
        </div>
      </Container>
    </Container>
  );
}
