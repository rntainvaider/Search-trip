import styles from "./styles.module.css";

export default function FooterButton({ icon, variant, value }) {
  return (
    <div className={styles[`footer-button &(variant)`]}>
      {variant === "variant1" ?
        <img src={icon} alt="" className={styles["asd"]} />
        :
        <div className={styles["footer__block"]}>
          <img src={icon} alt="" />
          <p className={styles["footer__text"]}>
            {value}
          </p>
        </div>
      }
    </div>
  )
};
