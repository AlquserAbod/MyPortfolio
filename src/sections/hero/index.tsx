import styles from '@/styles/sections/hero/styles.module.scss';
import MatrixBackground from './matrix_background';
import noBgLogoUrl from '@/assets/images/logos/noBgLogo.png';
import laptopWithGround from '@/assets/images/laptop_with_Ground.gif';
import { PiGithubLogoFill  } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { Trans } from 'react-i18next';
import { isRtl } from '@/utils/i18n';
import data from '@/data.json';

const HeroSection = () => {
  
  return (
    <section  className={`${styles.container} ${ isRtl() ? styles.rtl : ''}`}>
      <MatrixBackground>
        <div className={styles.mainSectionContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.leftSide}>

              <div className={styles.logoHolder}>
                <img src={noBgLogoUrl} width={50} className={styles.logo} alt="logo" />
              </div>

              <div className={styles.textHolder}> 
                <div className={styles.slogan}>
                <Trans i18nKey="slogan" components={{ br: <br />, b: <b /> }} />
                  
                </div>

                <div className={styles.jobTitle}>
                <Trans i18nKey="jobTitle" />
                </div>
                
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
                
                  <img src={laptopWithGround} alt='laptop With Ground' className={styles.laptop} />
              </div>
            </div>

          </div>
        </div>
      </MatrixBackground>
    </section >
  )
}

export default HeroSection
