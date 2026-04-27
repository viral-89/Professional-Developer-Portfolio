import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../../data';
import styles from './CaseStudy.module.css';

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.caseStudyPage}>
      <nav className={styles.backNav}>
        <div className="container">
          <Link to="/" className={styles.backLink}>← Back to Portfolio</Link>
        </div>
      </nav>

      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{project.title} Case Study</h1>
          <div className={styles.techStack}>
            {project.techStack.map((tech, i) => (
              <span key={i} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </div>
      </header>

      <main className="container">
        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src={project.imageUrl} alt={project.title} className={styles.image} />
          </div>
        </section>

        <section className={styles.section}>
          <h2>The Problem</h2>
          <p>{project.caseStudy.problem}</p>
        </section>

        <section className={styles.section}>
          <h2>The Solution</h2>
          <p>{project.caseStudy.solution}</p>
        </section>

        <section className={styles.section}>
          <h2>The Process</h2>
          <p>{project.caseStudy.process}</p>
        </section>

        <footer className={styles.footer}>
          <Link to="/" className="btn btn-primary">Back to Projects</Link>
        </footer>
      </main>
    </div>
  );
};

export default CaseStudy;
