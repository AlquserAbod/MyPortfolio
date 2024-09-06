import styles from "@/styles/sections/skills/styles.module.scss";
import { useTranslation } from "react-i18next";
import TitleBox from "@/components/titleBox";
import { skillsData } from "@/data/skills-data";
import SkillCard from "./skillCard";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  return (
    <section className={styles.container} id="skills" data-aos="zoom-in">
      <div className={styles.sectionTitle}>
        <TitleBox title={t("title")} />
      </div>

      <div className={styles.holder}>
          {Object.entries(skillsData).map(([key, skill]: [string, any]) => (
            <SkillCard skill={skill}  key={key} />
          ))}
      </div>
    </section>
  );
};

export default SkillsSection;
