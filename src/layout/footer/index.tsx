import styles from "@/styles/layout/footer.module.scss";
import { useTranslation } from "react-i18next";
import logoUrl from "@/assets/images/logos/PrimaryColorNoBgLogo.png";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import data from "@/data.json";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className={styles.container}>
      <div className={styles.itemsHolder}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <img src={logoUrl} loading="lazy" alt="logo" />
            <span>{t("name")}</span>
          </div>

          <ul className={styles.sochilLinks}>
            <li className={styles.youtube} data-color="#FF0000">
              <a href={data.links.youtube}>
                <FaYoutube />
              </a>
            </li>
            <li className={styles.github} data-color="#181717">
              <a href={data.links.github}>
                <FaGithub />
              </a>
            </li>
            <li className={styles.linkedIn} data-color="#0077B5">
              <a href={data.links.linkedIn}>
                <FaLinkedin />
              </a>
            </li>
            <li className={styles.instagram} data-color="#E1306C">
              <a href={data.links.instgram}>
                <FaInstagram />
              </a>
            </li>
            <li className={styles.tiktok} data-color="#000000">
              <a href={data.links.tiktok}>
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>

        <ul className={styles.pagesHolder}>
          <li>
            <a href="#whoami">{t("pages.whoamI")}</a>
          </li>
          <li>
            <a href="#skills">{t("pages.skills")}</a>
          </li>
          <li>
            <a href="#projects">{t("pages.projects")}</a>
          </li>
          <li>
            <a href="#services">{t("pages.services")}</a>
          </li>
          <li>
            <a href="#customerReviews">{t("pages.customerReviews")}</a>
          </li>
          <li>
            <a href="#getinTouch">{t("pages.getInTouch")}</a>
          </li>
        </ul>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.copyright}>
        {t("copyright")}
        <span>©</span>
      </div>
    </footer>
  );
};

export default Footer;
