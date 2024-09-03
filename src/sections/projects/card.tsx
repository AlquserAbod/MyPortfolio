import styles from "@/styles/sections/projects/card.module.scss";
import { Project, ProjectCategories } from "@/types/project";
import { convertStringToEnum } from "@/utils/enumUtils";
import TitleBox from "@/components/titleBox";
import { FaDownload, FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project }: { project: Project }) => {
  const categoryEnum = convertStringToEnum(ProjectCategories, project.category);

  return (
    <div className={styles.project}>
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
          {project.githubLink.length > 0 ? (
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
          ) : (
            <></>
          )}

          {project.visitorDownloadLink.length > 0 ? (
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
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
