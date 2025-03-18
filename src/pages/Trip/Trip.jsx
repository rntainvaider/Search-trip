import BurgerMenu from "../../components/burgerMenu/BurgerMenu";
import CardsTrip from "../../components/cardsTrip/CardsTrip";
import Footer from "../../components/footer/Footer";
import InputSearch from "../../components/inputSearch/InputSearch";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Trip() {
  const [filter, setFilter] = useState("");

  return (
    <div className={styles["trip"]}>
      <header className={styles["header"]}>
        <h2 className={styles["header__title"]}>Поездки</h2>
        <BurgerMenu />
      </header>
      <div className={styles["main"]}>
        <InputSearch onSearch={setFilter} />
        <CardsTrip filter={filter} />
      </div>
      <Footer />
    </div>
  );
}
