import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/layout/navbar.module.scss";
import seconadryLogo from "@/assets/images/logos/secondary-transparent-logo.png";
import primaryLogoUrl from "@/assets/images/logos/primary-transparent-logo.png";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import useClickOutside from "@/hooks/useClickOutside";
import LanguageSelector from "@/components/languageSelector";
import { isRtl } from "@/utils/i18n";
import {  useTranslation } from "react-i18next";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false); // State to track scroll
  const [logoUrl, setLogoUrl] = useState<string>(seconadryLogo);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarToggleRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation("navbar");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setLogoUrl(innerWidth > 600 ? seconadryLogo : primaryLogoUrl);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useClickOutside([sidebarRef, sidebarToggleRef], () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  });

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${
          isRtl() ? styles.rtl : ""
        }`}
      >
        <div
          className={`${styles.itemsHolder} ${
            isSidebarOpen ? styles.open : ""
          }`}
          ref={sidebarRef}
        >
          <div className={styles.logoHolder}>
            <img src={logoUrl} alt="logo" className={styles.logo} />
            <div
              className={styles.siderCloseButton}
              onClick={handleToggleSidebar}
            >
              <ImCross />
            </div>
          </div>
          <div className={styles.pagesHolder}>
            <span>
              <a href="#projects" className={isRtl() ? styles.lastChild : ""}>
                <span>{t("projects")}</span>
              </a>
            </span>

            <span>
              <a href="#whoami">
                <span>{t("whoami")}</span>
              </a>
            </span>

            <span>
              <a href="#services">
                <span>{t("services")}</span>
              </a>
            </span>
            <span>
              <a href="#skills">
                <span>{t("skills")}</span>
              </a>
            </span>
            <span>
              <a href="#getinTouch" className={isRtl() ? "" : styles.lastChild}>
                <span>{t("getinTouch")}</span>
              </a>
            </span>
          </div>
          <LanguageSelector isScrolled={isScrolled} />{" "}
        </div>

        <div
          className={`${styles.sidebarToggle} ${
            isSidebarOpen ? styles.open : ""
          }`}
          onClick={handleToggleSidebar}
          ref={sidebarToggleRef}
        >
          <div className={styles.iconHolder}>
            <TiThMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
