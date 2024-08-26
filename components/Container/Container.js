import styles from './Container.module.css';
export default function Container({
  children,
  nRows,
  nCols,
  gap = "1rem",
  justify = "center",
  align = "center",
  className = "",
  style = {},
}) {
  const gridStyle = {
    gridTemplateRows: nRows ? `repeat(${nRows}, 1fr)` : "auto",
    gridTemplateColumns: nCols ? `repeat(${nCols}, 1fr)` : "auto",
    gap,
    ...style,
  };

  return (
    <div className={`${styles.container} ${className}`} style={gridStyle}>
      {children}
    </div>
  );
}
