import React from 'react'
import styles from './styles/skills.module.scss';
import SkillCard from './skillCard';
import { useTranslation } from 'react-i18next';
import TitleBox from '@/components/titleBox';

// Import images
import htmlIcon from '@/assets/icons/skills/html.png';
import cssIcon from '@/assets/icons/skills/css.png';
import expressjsIcon from '@/assets/icons/skills/expressjs.png';
import nextjsIcon from '@/assets/icons/skills/nextjs.png';
import tailwindcssIcon from '@/assets/icons/skills/tailwindcss.png';
import dartIcon from '@/assets/icons/skills/dart.png';
import flutterIcon from '@/assets/icons/skills/flutter.png';
import javascriptIcon from '@/assets/icons/skills/javascript.png';
import typescriptIcon from '@/assets/icons/skills/typescript.png';
import reactIcon from '@/assets/icons/skills/react.png';
import nodeIcon from '@/assets/icons/skills/node.png';
import mongodbIcon from '@/assets/icons/skills/mongodb.png';
import sassIcon from '@/assets/icons/skills/sass.png';

const SkillsSection = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.sectionTitle}>
                <TitleBox title={t('skills.title')} />
            </div>

            <div className={styles.flexContainer}>
                <SkillCard title={t('skills.html.title')} icon={htmlIcon} content={t('skills.html.content')} />
                <SkillCard title={t('skills.css.title')} icon={cssIcon} content={t('skills.css.content')} />
                <SkillCard title={t('skills.expressjs.title')} icon={expressjsIcon} content={t('skills.expressjs.content')} />
                <SkillCard title={t('skills.nextjs.title')} icon={nextjsIcon} content={t('skills.nextjs.content')} />
                <SkillCard title={t('skills.tailwindcss.title')} icon={tailwindcssIcon} content={t('skills.tailwindcss.content')} />
                <SkillCard title={t('skills.dart.title')} icon={dartIcon} content={t('skills.dart.content')} />
                <SkillCard title={t('skills.flutter.title')} icon={flutterIcon} content={t('skills.flutter.content')} />
                <SkillCard title={t('skills.javascript.title')} icon={javascriptIcon} content={t('skills.javascript.content')} />
                <SkillCard title={t('skills.typescript.title')} icon={typescriptIcon} content={t('skills.typescript.content')} />
                <SkillCard title={t('skills.react.title')} icon={reactIcon} content={t('skills.react.content')} />
                <SkillCard title={t('skills.node.title')} icon={nodeIcon} content={t('skills.node.content')} />
                <SkillCard title={t('skills.mongodb.title')} icon={mongodbIcon} content={t('skills.mongodb.content')} />
                <SkillCard title={t('skills.sass.title')} icon={sassIcon} content={t('skills.sass.content')} />
            </div>
        </div>
    )
}

export default SkillsSection
