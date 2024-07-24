import React from 'react'
import styles from './styles/skills.module.scss';
import SkillCard from './skillCard';
import { useTranslation } from 'react-i18next';
import TitleBox from '@/components/titleBox';

const SkillsSection = () => {
        const {t} = useTranslation();

        return (
        <div className={styles.container}>
                <div className={styles.sectionTitle}>
                        <TitleBox  title={t('skills.title')}/> 
                </div>

                <div className={styles.flexContainer}>
                        <SkillCard title={t('skills.html.title')} icon={`/src/assets/icons/skills/html.png`} content={t('skills.html.content')} /> 
                        <SkillCard title={t('skills.css.title')} icon={`/src/assets/icons/skills/css.png`} content={t('skills.css.content')} /> 
                        <SkillCard title={t('skills.expressjs.title')} icon={`/src/assets/icons/skills/expressjs.png`} content={t('skills.expressjs.content')} /> 
                        <SkillCard title={t('skills.nextjs.title')} icon={`/src/assets/icons/skills/nextjs.png`} content={t('skills.nextjs.content')} /> 
                        <SkillCard title={t('skills.tailwindcss.title')} icon={`/src/assets/icons/skills/tailwindcss.png`} content={t('skills.tailwindcss.content')} /> 
                        <SkillCard title={t('skills.dart.title')} icon={`/src/assets/icons/skills/dart.png`} content={t('skills.dart.content')} /> 
                        <SkillCard title={t('skills.flutter.title')} icon={`/src/assets/icons/skills/flutter.png`} content={t('skills.flutter.content')} /> 

                        <SkillCard title={t('skills.javascript.title')} icon={`/src/assets/icons/skills/javascript.png`} content={t('skills.javascript.content')} /> 
                        <SkillCard title={t('skills.typescript.title')} icon={`/src/assets/icons/skills/typescript.png`} content={t('skills.typescript.content')} /> 
                        <SkillCard title={t('skills.react.title')} icon={`/src/assets/icons/skills/react.png`} content={t('skills.react.content')} /> 
                        <SkillCard title={t('skills.node.title')} icon={`/src/assets/icons/skills/node.png`} content={t('skills.node.content')} /> 
                        <SkillCard title={t('skills.mongodb.title')} icon={`/src/assets/icons/skills/mongodb.png`} content={t('skills.mongodb.content')} /> 
                        <SkillCard title={t('skills.sass.title')} icon={`/src/assets/icons/skills/sass.png`} content={t('skills.sass.content')} /> 
                </div>

        </div>
        )
}

export default SkillsSection
