import TitleBox from "@/components/titleBox";
import styles from "@/styles/sections/skills/skillCard.module.scss";
import { Skill } from "@/types/skills";

const SkillCard: React.FC<any> = ({ skill }: { skill: Skill }) => {
  const iconSrc = `/images/icons/skills/${skill.icon}`; // استخدام المسار الثابت

  return (
    <div className={styles.skillHolder}>
      <div className={styles.headerHolder}>
        <div className={styles.iconHolder}>
          <img src={iconSrc} alt={`${skill.title} Icon`} loading="lazy" />
        </div>
        <TitleBox
          title={skill.title}
          holderClass={styles.titleBox}
          className={styles.title}
        />
      </div>

      <div className={styles.contentHolder}>{skill.content}</div>
    </div>
  );
};

export default SkillCard;
