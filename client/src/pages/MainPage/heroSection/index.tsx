import styles from './styles/heroSection.module.scss';
import MatrixBackground from './MatrixBackground';
import noBgLogoUrl from '@/assets/images/logos/noBgLogo.png';
import laptopWithGround from '@/assets/images/laptopWithGround.png';
import { PiGithubLogoFill  } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section  className={styles.container}>
      <MatrixBackground>
        <div className={styles.mainSectionContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.leftSide}>

              <div className={styles.logoHolder}>
                <img src={noBgLogoUrl} className={styles.logo} alt="logo" />
              </div>

              <div className={styles.textHolder}> 
                <div className={styles.slogan}>
                  Programming is the <br /><b> modern language of creativity </b>  
                </div>

                <div className={styles.jobTitle}>
                Comprehensive developer of web and Android applications
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
