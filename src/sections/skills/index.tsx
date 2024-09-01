import styles from "@/styles/sections/skills/styles.module.scss";
import Skill from "./skillCard";
import { useTranslation } from "react-i18next";
import TitleBox from "@/components/titleBox";
import { skillsData } from "@/data/skills-data";
import Carousel from "react-multi-carousel";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  const skillsTranslations = t("skills", { returnObjects: true }) as Record<
    string,
    any
  >;

  const skills = Object.entries(skillsData).map(([key, skill]) => ({
    ...skill,
    title: skillsTranslations[key]?.title,
    content: skillsTranslations[key]?.content,
  }));


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },

  }

  return (
    <section className={styles.container} id="skills">
      <div className={styles.sectionTitle}>
        <TitleBox title={t("title")} />
      </div>

      <div className={styles.holder}>
        <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={2500}
            draggable
            infinite
            containerClass={styles.carouselHolder}
            minimumTouchDrag={80}
            rtl={false}
            showDots={false}
  
            slidesToSlide={1}
            swipeable={false} >
            {Object.entries(skills).map(([key, skill]: [string, any]) => (
              <Skill key={key} skill={skill} />
            ))}
        </Carousel>
      </div>

    </section>
  );
};

export default SkillsSection;
