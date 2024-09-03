import styles from '@/styles/sections/hero/styles.module.scss';
import logoUrl from '@/assets/images/logos/secondary-transparent-logo.png';
import laptopWithGround from '@/assets/images/laptop_with_Ground.gif';
import { PiGithubLogoFill  } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { Trans, useTranslation } from 'react-i18next';
import { isRtl } from '@/utils/i18n';
import data from '@/data/data.json';
import TitleBox from '@/components/titleBox';
import MatrixBackground from './matrix_background';

const HeroSection = () => {
  const { t } = useTranslation("hero")

  return (
      <section  className={`${styles.container} ${ isRtl() ? styles.rtl : ''}`}>
          <div className={styles.mainSectionContainer}>
            <div className={styles.flexContainer}>
              <div className={styles.leftSide}>

                <div className={styles.logoHolder}>
                  <img src={logoUrl} width={50} className={styles.logo} alt="logo" />
                </div>

                <div className={styles.textHolder}> 
                  <div className={styles.slogan}>
                  <Trans ns={'hero'} i18nKey="slogan" components={{ br: <br />, b: <b /> }} />

                
                    
                  </div>

                  <TitleBox  title={t('jobTitle')} holderClass={styles.jobTitle}/> 
                  
                </div>

                <div className={styles.accountsHolder}>
                  <a className={styles.github} href={data.links.github}  target="_blank">
                      <PiGithubLogoFill />
                  </a>

                  <a className={styles.linkedIn} href={data.links.linkedIn}  target="_blank">
                    <FaLinkedinIn />
                  </a>
                </div>

              </div>
              
              <div className={styles.rightSide}>
                <div className={styles.pcIconHolder}>
                  
                    <img src={laptopWithGround} alt='laptop Gif' className={styles.laptop} />
                </div>
              </div>

            </div>
          </div>
      </section >
  )
}

export default HeroSection
