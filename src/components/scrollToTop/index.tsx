import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/scrollToTop.module.scss'
import { FaLongArrowAltUp } from "react-icons/fa";
import { isRtl } from '@/utils/i18n';
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <button
        className={`${styles.ScrollToTop} ${isVisible ? styles.visible : ''} ${isRtl() ? styles.rtl : ''}`}
        onClick={scrollToTop}
      >
<IoIosArrowUp />
</button>
    );
  };
  
  export default ScrollToTopButton;