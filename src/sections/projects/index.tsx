import React, { useState } from "react";
import styles from "@/styles/sections/projects/styles.module.scss";
import TitleBox from "@/components/titleBox";
import { useTranslation } from "react-i18next";
import { isRtl } from "@/utils/i18n";
import Card from "./card";
import { Project, ProjectCategories } from "@/types/project";

const Projects = () => {
  const { t } = useTranslation("projects");
  const [category, setCategory] = useState<ProjectCategories>(
    ProjectCategories.All
  );

  const projects: Project[] = t("projects", { returnObjects: true });

  const filteredProjects =
    category === ProjectCategories.All
      ? Object.values(projects) // Get all project values if category is All
      : Object.values(projects).filter(
          (project) => project.category === category
        );

  return (
    <section className={styles.container} id="projects">
      <TitleBox title={t("title")} />

      <div className={styles.categoriesHolder}>
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
            onClick={() => setCategory(ProjectCategories.Backend)}
            className={`${
              category == ProjectCategories.Backend ? styles.selected : ""
            }`}
          >
            <span>{t("categories.backend")}</span>
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
        {Object.entries(filteredProjects).map(
          ([key, project]: [string, any]) => (
            <Card key={key} project={project} />
          )
        )}

      </div>
    </section>
  );
};

export default Projects;
