import Card from "./components/Card";
import styles from "./styles.module.css";

export default function CardsTrip({ filter }) {
  return (
    <div className={styles["cards"]}>
      <Card filter={filter} />
    </div>
  );
}
