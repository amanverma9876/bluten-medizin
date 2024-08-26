import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";
export default function Products({ style = {} }) {
  return (
    <div>
      <div className={styles.container} style={style}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div>Pagination</div>
    </div>
  );
}
