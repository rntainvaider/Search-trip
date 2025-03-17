import styles from "./styles.module.css";

import imgOne from "../../../../assets/images/img_one.png";
import imgTwo from "../../../../assets/images/img_two.png";
import imgThree from "../../../../assets/images/img_three.png";
import imgFour from "../../../../assets/images/img_four.png";

import iconArrow from "../../../../assets/icon/trip/icon_arrow.svg";
import iconCalendar from "../../../../assets/icon/trip/icon_calendar.svg";
import iconLike from "../../../../assets/icon/trip/icon_like.svg";

const cards = [
  {
    img: imgOne,
    title: "Niladri Reservoir",
    date: "16 Июнь-28 Июль",
    like: "3 456",
    fullName: "Имя фамилия(автора)"
  },
  {
    img: imgTwo,
    title: "Niladri Reservoir",
    date: "16 Июнь-28 Июль",
    like: "3 456",
    fullName: "Имя фамилия(автора)"
  },
  {
    img: imgThree,
    title: "Niladri Reservoir",
    date: "16 Июнь-28 Июль",
    like: "3 456",
    fullName: "Имя фамилия(автора)"
  },
  {
    img: imgFour,
    title: "Niladri Reservoir",
    date: "16 Июнь-28 Июль",
    like: "3 456",
    fullName: "Имя фамилия(автора)"
  },
]

export default function Card() {
  return (
    <div>
      {cards.map(({ img, title, date, like, fullName }, index) => (
        <div key={index} className={styles["card"]}>
          <img src={img} alt="" />
          <div className={styles["card__info"]}>
            <h3 className={styles["card__info-title"]}>
              {title}
            </h3>
            <div className={styles["card__info-block"]}>
              <img src={iconCalendar} alt="Календарь" />
              <p className={styles["card__info-text"]}>
                {date}
              </p>
            </div>
            <div className={styles["card__info-block"]}>
              <img src={iconLike} alt="Лайк" />
              <p className={styles["card__info-number"]}>
                {like}
              </p>
            </div>
            <p className={styles["card__info-text"]}>
              {fullName}
            </p>
          </div>
          <img src={iconArrow} alt="Стрелка" />
        </div>
      ))
      }
    </div>
  )
};
