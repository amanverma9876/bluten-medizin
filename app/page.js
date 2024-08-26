import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation/Navigation";
import Info from "@/components/Info/Info";
import Content from "@/components/Content/Content";
import Products from "@/components/ui/Products/Products";
export default function Home() {
  return (
    <Products
      style={{
        flexBasis: "72%",
      }}
    />
  );
}
