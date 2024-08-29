import styles from "@/styles/sections/skills/styles.module.scss";
import SkillCard from "./skillCard";
import { useTranslation } from "react-i18next";
import TitleBox from "@/components/titleBox";

const SkillsSection = () => {
  const { t } = useTranslation('skills');
  const skills = t('skills', { returnObjects: true }); // استرجاع جميع بيانات المهارات

  return (
    <section className={styles.container} id="skills">
      <div className={styles.sectionTitle}>
        <TitleBox title={t("title")} />
      </div>

      <div className={styles.flexContainer}>
      {Object.entries(skills).map(
          ([key, skill]: [string, any]) => (
            <SkillCard key={key} skill={skill} />
          )
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
