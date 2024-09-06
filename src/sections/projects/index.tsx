import { useState } from "react";
import styles from "@/styles/sections/projects/styles.module.scss";
import TitleBox from "@/components/titleBox";
import { useTranslation } from "react-i18next";
import { isRtl } from "@/utils/i18n";
import ProjectCard from "./card";
import { ProjectCategories } from "@/types/project";
import { projectsData } from "@/data/project-data";

const Projects = () => {
  const { t } = useTranslation("projects");
  const [category, setCategory] = useState<ProjectCategories>(
    ProjectCategories.All
  );

  const projectsTranslations = t("projects", { returnObjects: true }) as Record<
    string,
    any
  >;

  const projects = Object.entries(projectsData).map(([key, project]) => ({
    ...project,
    title: projectsTranslations[key]?.title,
    description: projectsTranslations[key]?.description,
  }));

  const filteredProjects =
    category === ProjectCategories.All
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section className={styles.container} id="projects" >
      <div data-aos={`${isRtl() ? `fade-left` : `fade-right`}`}>
        <TitleBox title={t("title")} />

      </div>

      <div className={styles.categoriesHolder} data-aos={'zoom-in'}>
        <div className={`${styles.categories} ${isRtl() ? styles.isRtl : ""}`}>
          <label
            onClick={() => setCategory(ProjectCategories.All)}
            className={`${
              category == ProjectCategories.All ? styles.selected : ""
            }`}
          >
            <span>{t("categories.all")}</span>
          </label>
          <label
            onClick={() => setCategory(ProjectCategories.Frontend)}
            className={`${
              category == ProjectCategories.Frontend ? styles.selected : ""
            }`}
          >
            <span>{t("categories.frontend")}</span>
          </label>
          <label
            onClick={() => setCategory(ProjectCategories.Fullstack)}
            className={`${
              category == ProjectCategories.Fullstack ? styles.selected : ""
            }`}
          >
            <span>{t("categories.fullstack")}</span>
          </label>
          <label
            onClick={() => setCategory(ProjectCategories.AndroidApplications)}
            className={`${
              category == ProjectCategories.AndroidApplications
                ? styles.selected
                : ""
            }`}
          >
            <span>{t("categories.androidApplications")}</span>
          </label>
        </div>
      </div>

      <div className={styles.projects}>
        {filteredProjects.length > 0 ? (
          Object.entries(filteredProjects).map(([key, project]: [string,any]) => (
            <ProjectCard  project={project}  key={key}/>
          ))
        ) : (
          <div className={styles.emptyCategory}>{t("emptyCategory")}</div>
        )}
      </div>
    </section>
  );
};

export default Projects;
