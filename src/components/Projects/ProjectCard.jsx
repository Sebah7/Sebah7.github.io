/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.previewWrapper}>
        {!iframeError && demo ? (
          <iframe
            src={demo}
            title={`${title} live preview`}
            className={styles.preview}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            onError={() => setIframeError(true)}
          />
        ) : (
          <img
            src={`src/assets/${imageSrc}`}
            alt={`${title} preview`}
            className={styles.preview}
          />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {demo && (
            <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            {demo ? "Source" : "View GitHub"}
          </a>
        </div>
      </div>
    </div>
  );
};