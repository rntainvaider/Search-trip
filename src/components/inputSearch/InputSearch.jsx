import styles from "./styles.module.css";
import iconSearch from "../../assets/icon/trip/icon_search.svg";
import { useState } from "react";

export default function InputSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles["input__wrapper"]}>
      <input
        type="text"
        placeholder="Поиск по названию"
        className={styles["input"]}
        value={query}
        onChange={handleChange}
      />
      <img src={iconSearch} alt="Поиск" className={styles["search__icon"]} />
    </div>
  );
}
