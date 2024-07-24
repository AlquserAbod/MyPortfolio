import { Trans, useTranslation } from 'react-i18next'
import styles from './whoami.module.scss'
import hlaflogo from '@/assets/images/logos/hlaflogo.png';
import halflogoRotate from '@/assets/images/logos/halflogoRotate.png';
import { isRtl } from '@/utils/i18n';
import TitleBox from '@/components/titleBox';

const WhoamiSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.container}>
      <div className={`${styles.holder} ${isRtl() ? styles.rtl : ""}`}>

          <TitleBox title={t('whoami.title')} />
          <div className={styles.line1holder}> 
            <Trans i18nKey={"whoami.line1"} components={{span: <span />}}></Trans>

          </div>
          <div className={styles.line2holder}> 
          <Trans i18nKey={"whoami.line2"} components={{span: <span />}}></Trans>

          </div>

          <div className={styles.line3holder}> 
          <Trans i18nKey={"whoami.line3"} components={{span: <span />}}></Trans>

          </div>

        <div className={styles.logoHolder}>

          <img src={ isRtl() ? halflogoRotate : hlaflogo } className={styles.logo} />
        </div>
      </div>
    </div>
  )
}

export default WhoamiSection
