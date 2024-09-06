import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "@/styles/sections/skills/skillCard.module.scss";
import { Skill } from "@/types/skills";
import { useEffect } from "react";

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { observe, unobserve } = useIntersectionObserver(entry => {
    
    if(entry.isIntersecting) {
      entry.target.classList.add(styles.animate);
    }
  }, {
    threshold: 0.5
  });

  useEffect(() => {
    const skillPerElements = document.querySelectorAll(`.${styles.skillPer}`);
    skillPerElements.forEach(element => observe(element));

    return () => {
      skillPerElements.forEach(element => unobserve(element));
    };
  }, [observe, unobserve]);

  return (
    <div className={styles.skill}>
      <div className={styles.title}>
        <span>{skill.title} </span>
        <strong>({skill.level}%)</strong>
      </div>

      <div
        className={styles.skillBar}
        style={{ "--value": `${skill.level}%` } as React.CSSProperties}
      >
        <div className={styles.skillPer}></div>
      </div>
    </div>
  );
};

export default SkillCard;
