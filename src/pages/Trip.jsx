import BurgerMenu from "../components/burgerMenu/BurgerMenu";
import styles from "./styles.module.css";

export default function Trip() {
  return (
    <div className={styles["trip"]}>
      <header className={styles["header"]}>
        <h2 className={styles["header__title"]}>
          Поездки
        </h2>
        <BurgerMenu />
      </header>
    </div>
  )
};
