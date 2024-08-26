import React, { useState } from 'react'
import styles from '@/styles/sections/projects/styles.module.scss'
import TitleBox from '@/components/titleBox'
import { useTranslation } from 'react-i18next'
import { isRtl } from '@/utils/i18n'

enum Categories {
  All,
  Backend,
  Frontend,
  Fullstack,
  AndroidApplications
}

const Projects = () => {
  const { t } = useTranslation('projects');
  const [category, setCategory] = useState<Categories>(Categories.All);


  return (
    <section className={styles.container} id='projects'>

      <TitleBox title={t('title')} />

      <div className={styles.categoriesHolder}>
        <div className={`${styles.categories} ${isRtl() ? styles.isRtl : ''}`}>
          <label onClick={() => setCategory(Categories.All)} className={`${category == Categories.All ? styles.selected : ""}`}>
            <span>{t('categories.all')}</span>
          </label>
          <label onClick={() => setCategory(Categories.Frontend)} className={`${category == Categories.Frontend ? styles.selected : ''}`}>
            <span>{t('categories.frontend')}</span>
          </label>
          <label onClick={() => setCategory(Categories.Backend)} className={`${category == Categories.Backend ? styles.selected : ''}`}>
            <span>{t('categories.backend')}</span>
          </label>
          <label onClick={() => setCategory(Categories.Fullstack)} className={`${category == Categories.Fullstack ? styles.selected : ''}`}>
            <span>{t('categories.fullstack')}</span>
          </label>
          <label onClick={() => setCategory(Categories.AndroidApplications)} className={`${category == Categories.AndroidApplications ? styles.selected : ''}`}>
            <span>{t('categories.androidApplications')}</span>
          </label>
        </div>
      </div>
      
    </section>
  )
}

export default Projects
