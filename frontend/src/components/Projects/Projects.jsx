import { useState } from 'react';
import styles from './Projects.module.css';
import { projectsData } from '../../data';

const Projects = () => {
  const [projects] = useState(projectsData);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
                    <a href={project.caseStudyUrl} target="_blank" rel="noreferrer" className="btn btn-outline">Case Study</a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
