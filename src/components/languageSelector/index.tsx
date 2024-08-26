import React, { useState } from "react";
import styles from "@/styles/components/languageSelector.module.scss";
import { MdArrowDropUp } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { isRtl, languages } from "@/utils/i18n";

interface Props {
  isScrolled: boolean; // Receive isScrolled prop
}

const LanguageSelector: React.FC<Props> = ({ isScrolled }) => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const handleToggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng, (err) => {
      if (err) return console.log("something went wrong loading", err);
    });
    setIsLanguageMenuOpen(false); // Close menu after selection
  };

  return (
    <div
      className={`${styles.languageSelectorHolder} ${
        isScrolled ? styles.scrolled : ""
      } ${isRtl() ? styles.rtl : ""}`}
    >
      <div
        className={`${styles.languageSelectorDropDown} ${
          isLanguageMenuOpen ? styles.open : ""
        }`}
      >
        <div
          className={styles.selectedLanguage}
          onClick={handleToggleLanguageMenu}
        >
          <div className={styles.language}>{i18n.language.toUpperCase()}</div>
          <MdArrowDropUp className={styles.dropdownArrow} />
        </div>
        <div className={styles.selectMenu}>
          {languages.map((lang) => {
            if (lang !== i18n.language) {
              return (
                <div
                  key={lang}
                  className={styles.item}
                  onClick={() => changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
