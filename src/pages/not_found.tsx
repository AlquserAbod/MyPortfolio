import React from 'react'
import styles from '@/styles/pages/not_found.module.scss';
import notFoundGifUrl from '@/assets/images/404.png';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { isRtl } from '@/utils/i18n';

const NotFound = () => {
  const { t } = useTranslation('404');

  return (
    <div className={styles.container}>
      <img src={notFoundGifUrl} alt="404 page gif" />
      <div className={styles.content}>
        <span> <strong> 404 </strong> {t('content')} </span>
        <a href='/' className={`${ isRtl() ? styles.rtl : ''}`}>
          <span>{t('goback')}</span>
          {
            isRtl() ?  <FaArrowCircleLeft />: <FaArrowCircleRight />
          }
        </a>
      </div>
    </div>
  )
}

export default NotFound
