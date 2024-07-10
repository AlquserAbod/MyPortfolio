import styles from './styles/heroSection.module.scss';
import MatrixBackground from './MatrixBackground';
import noBgLogoUrl from '@/assets/images/logos/noBgLogo.png';
import laptopWithGround from '@/assets/images/laptopWithGround.gif';
import { PiGithubLogoFill  } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { Trans } from 'react-i18next';
import { isRtl } from '@/utils/i18n';

const HeroSection = () => {
  
  return (
    <section  className={`${styles.container} ${ isRtl() ? styles.rtl : ''}`}>
      <MatrixBackground>
        <div className={styles.mainSectionContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.leftSide}>

              <div className={styles.logoHolder}>
                <img src={noBgLogoUrl} className={styles.logo} alt="logo" />
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
                <div className={styles.github}>
                    <PiGithubLogoFill />
                </div>

                <div className={styles.linkedIn}>
                  <FaLinkedinIn />
                </div>
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
