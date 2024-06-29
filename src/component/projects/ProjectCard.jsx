import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.links}>
        <div>
        <a href={demo} className={styles.link}>
          Demo
          </a>
        </div>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};