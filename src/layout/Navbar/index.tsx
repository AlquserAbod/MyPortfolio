import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/layout/navbar.module.scss";
import noBgLogoUrl from "@/assets/images/logos/noBgLogo.png";
import primaryNoBgLogoUrl from "@/assets/images/logos/PrimaryColorNoBgLogo.png";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import useClickOutside from "@/hooks/useClickOutside";
import LanguageSelector from "@/components/languageSelector";
import { isRtl } from "@/utils/i18n";
import { Trans } from "react-i18next";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false); // State to track scroll
  const [screenWidth] = useState<number>(window.innerWidth);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarToggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoUrl = screenWidth > 600 ? noBgLogoUrl : primaryNoBgLogoUrl;

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
              <a href="#projects" className={isRtl() ? styles.lastChild : ''}>
                <span>
                  <Trans i18nKey={"navbar.projects"}></Trans>

                </span>
              </a>
            </span>

            <span>
              <a href="#whoami">
                <span> 
                <Trans i18nKey="navbar.whoami"></Trans>

                </span>
              </a>
            </span>

            <span>
              <a href="#services">
                <span>
                  <Trans i18nKey={"navbar.services"}></Trans>
                </span>
              </a>
            </span>
            <span>
              <a href="#skills">
                <span>
                  <Trans i18nKey={"navbar.skills"}></Trans>
                </span>
              </a>
            </span>
            <span>
              <a href="#getinTouch"  className={isRtl() ?  '' : styles.lastChild}>
                <span>
                  <Trans i18nKey={"navbar.getinTouch"}></Trans>
                </span>
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
