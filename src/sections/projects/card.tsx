import styles from "@/styles/sections/projects/card.module.scss";
import { Project, ProjectCategories } from "@/types/project";
import { convertStringToEnum } from "@/utils/enumUtils";
import TitleBox from "@/components/titleBox";
import { FaDownload, FaGithub, FaGlobe } from "react-icons/fa";

import Carousel from "react-multi-carousel";

const Card = ({ project }: { project: Project }) => {
  const categoryEnum = convertStringToEnum(ProjectCategories, project.category);


  return (
    <div className={styles.project} >
      <Carousel
        autoPlay
        autoPlaySpeed={3000}

        rewind
        containerClass={styles.carouselHolder}
        pauseOnHover

        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={1}
        arrows={false}
        showDots

      >
        {Object.entries(project.images).map(
          ([key, image]: [string, any]) => (

            <div className={styles.imageHolder}>
              <img src={image}  key={key} loading="lazy" />

            </div>
            
          )
        )}
      </Carousel>

      <div className={styles.content}>
        <TitleBox
          title={project.title}
          holderClass={styles.titleBox}
          className={styles.title}
        />

        <div className={styles.desc}>{project.description}</div>
        <div className={styles.footer}>
          <div className={styles.tags}>
            {project.tags.map((value, index) => (
              <div className={styles.tag} key={index}>
                {value}
              </div>
            ))}
          </div>

          <div className={styles.buttonGroup}>
            <a
              className={styles.github}
              href={project.githubLink}
              target="_blank"
            >
              <span className={styles.svgContainer}>
                <FaGithub />
              </span>
              <span className={styles.BG}></span>
            </a>
            <a
              className={styles.theWebsite}
              href={project.visitorDownloadLink}
              target="_blank"
            >
              <span className={styles.svgContainer}>
                {categoryEnum == ProjectCategories.AndroidApplications ? (
                  <FaDownload />
                ) : (
                  <FaGlobe />
                )}
              </span>
              <span className={styles.BG}></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
