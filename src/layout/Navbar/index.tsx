import React, { useEffect, useRef, useState } from 'react';
import styles from './navbar.module.scss';
import noBgLogoUrl from '@/assets/images/logos/noBgLogo.png';
import primaryNoBgLogoUrl from '@/assets/images/logos/PrimaryColorNoBgLogo.png'
import { MdArrowDropUp } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import useClickOutside from '@/hooks/useClickOutside';
const Navbar = () => {

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.navbar}`);
      if (window.scrollY > 50) {
        navbar?.classList.add(styles.scrolled);
      } else {
        navbar?.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useClickOutside(sidebarRef, () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  });

  const handleToggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen); // Toggle the state
  }

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the state
  }

  return (
    <>
      <nav className={styles.navbar} >
        <div className={`${styles.itemsHolder} ${isSidebarOpen ? styles.open : ''}`}    ref={sidebarRef}        >

          <div className={styles.logoHolder}>
            <img src={isSidebarOpen ? primaryNoBgLogoUrl  : noBgLogoUrl} alt="logo" className={styles.logo} />

            <div className={styles.siderCloseButton} onClick={handleToggleSidebar}>
              <ImCross />
            </div>
          </div>

          <div className={styles.pagesHolder}>
            <span>
              <a href="#">who am I</a>
            </span>
            <span>
              <a href="#">Projects</a>
            </span>
            <span>
              <a href="#">Services</a>
            </span>  
            <span>
              <a href="#">Academic qualifications</a>
            </span>
            <span>
              <a href="#">Connect with us</a>
            </span>
          </div>
          

          <div className={styles.languageSelectorHolder}>
            <div className={`${styles.languageSelectorDropDown} ${isLanguageMenuOpen ? styles.open : ''}`}>
              <div className={styles.selectedLanguage} onClick={handleToggleLanguageMenu}>
                <div className={styles.language}>
                  EN 
                </div>
                <MdArrowDropUp  className={`${styles.dropdownArrow}`}/>
              </div>
              <div  className={`${styles.selectMenu}`}>
                <div className={styles.item}>
                  AR
                </div>
                <div className={styles.item}>
                  TR
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className={`${styles.sidebarToggle} ${isSidebarOpen ? styles.open :''}`} onClick={handleToggleSidebar}>
          <div className={styles.iconHolder}>
            <TiThMenu />

          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
