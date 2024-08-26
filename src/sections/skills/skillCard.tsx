import TitleBox from "@/components/titleBox";
import styles from "@/styles/sections/skills/skillCard.module.scss";

interface SkillCardProps {
  title: string;
  icon: string;
  content: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, content }) => {
  return (
    <div className={styles.skillHolder}>
      <div className={styles.headerHolder}>
        <div className={styles.iconHolder}>
          <img src={icon} alt="Skill Icon" />
        </div>
        <TitleBox title={title} />
      </div>

      <div className={styles.contentHolder}>{content}</div>
    </div>
  );
};

export default SkillCard;
