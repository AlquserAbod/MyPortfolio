import { Trans } from 'react-i18next'
import styles from './whoami.module.scss'
import nobgLogoUrl from '@/assets/images/logos/noBgLogo.png';
const WhoamiSection = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.holder}>
        <div className={styles.titleHolder}>
          <div className={styles.title}><Trans i18nKey={'whoami.title'}></Trans></div>
        </div>
        <div className={styles.contentHolder}>
          <div className={styles.line1holder}> 
            <Trans i18nKey={"whoami.line1"} components={{span: <span />}}></Trans>

          </div>
          <div className={styles.line2holder}> 
          <Trans i18nKey={"whoami.line2"} components={{span: <span />}}></Trans>

          </div>

          <div className={styles.line3holder}> 
          <Trans i18nKey={"whoami.line3"} components={{span: <span />}}></Trans>

          </div>

        </div>

        <div className={styles.logoHolder}>
          <img src={nobgLogoUrl} className={styles.logo} />
        </div>
      </div>
    </div>
  )
}

export default WhoamiSection
