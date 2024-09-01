import TitleBox from "@/components/titleBox";
import styles from "@/styles/sections/skills/skillCard.module.scss";
import { Skill } from "@/types/skills";

const SkillCard: React.FC<any> = ({ skill }: { skill: Skill }) => {
  const iconSrc = `/images/icons/skills/${skill.icon}`; // استخدام المسار الثابت

  
  return (
    <div className={styles.skill}>
      <div className={styles.iconHolder}>
        <img src={iconSrc} alt={skill.title} loading="lazy" />

      </div>
      <TitleBox title={skill.title} className={styles.title} />
    </div>
  );
};

export default SkillCard;
