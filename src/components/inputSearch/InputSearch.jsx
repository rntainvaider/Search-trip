import styles from "./styles.module.css";
import iconSearch from "../../assets/icon/trip/icon_search.svg";

export default function InputSearch() {
  return (
    <div className={styles["input__wrapper"]}>
      <input type="text" placeholder="Поиск по названию" className={styles["input"]} />
      <img src={iconSearch} alt="Поиск" className={styles["search__icon"]} />
    </div>
  )
};
