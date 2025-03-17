import styles from "./styles.module.css";
import FooterButton from "./elements/button";

import iconBookmark from "../../assets/icon/trip/footer/icon_bookmark.svg";
import iconTrip from "../../assets/icon/trip/footer/icon_trip.svg";
import iconSearch from "../../assets/icon/trip/footer/icon_search.svg";
import iconChat from "../../assets/icon/trip/footer/icon_chat.svg";
import iconProfile from "../../assets/icon/trip/footer/icon_profile.svg";

export default function Footer() {
  return (
    <div className={styles["footer-actions"]}>
      <FooterButton icon={iconBookmark} value="Закладки" variant="variant2" />
      <FooterButton icon={iconTrip} value="Поездки" variant="variant2" />
      <FooterButton icon={iconSearch} variant="variant1" />
      <FooterButton icon={iconChat} value="Чат" variant="variant2" />
      <FooterButton icon={iconProfile} value="Профиль" variant="variant2" />
    </div>
  )
};
