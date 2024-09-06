import { Trans, useTranslation } from "react-i18next";
import styles from "@/styles/sections/who_iam/styles.module.scss";
import hlaflogo from "@/assets/images/logos/hlaflogo.png";
import halflogoRotate from "@/assets/images/logos/hlaflogoRotate.png";
import { isRtl } from "@/utils/i18n";
import TitleBox from "@/components/titleBox";

const WhoamiSection = () => {
  const { t } = useTranslation("whoami");


  return (
    <section className={styles.container} data-aos="zoom-in"
     id="whoami" >
      <div className={`${styles.holder} ${isRtl() ? styles.rtl : ""}`}>
        <TitleBox title={t("title")} holderClass={styles.titleBox} />
        <div className={`${styles.line1holder} ${styles.line}`}>
          <Trans
            ns="whoami"
            i18nKey={"line1"}
            components={{ span: <span /> }}
          ></Trans>
        </div>
        <div className={`${styles.line2holder} ${styles.line}`}>
          <Trans
            ns="whoami"
            i18nKey={"line2"}
            components={{ span: <span /> }}
          ></Trans>
        </div>

        <div className={`${styles.line3holder} ${styles.line}`}>
          <Trans
            ns="whoami"
            i18nKey={"line3"}
            components={{ span: <span /> }}
          ></Trans>
        </div>

        <div className={styles.logoHolder}>
          <img
            src={isRtl() ? halflogoRotate : hlaflogo}
            className={styles.logo}
            loading="lazy"
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoamiSection;
