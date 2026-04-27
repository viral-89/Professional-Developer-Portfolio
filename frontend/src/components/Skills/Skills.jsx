import { useState } from 'react';
import styles from './Skills.module.css';
import { skillsData } from '../../data';

const Skills = () => {
  const [skills] = useState(skillsData);

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.length > 0 ? (
            skills.map((skillGroup, index) => (
              <div key={index} className={styles.skillCard}>
                <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
                <div className={styles.techList}>
                  {skillGroup.tech.map((techItem, i) => (
                    <span key={i} className={styles.techItem}>
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>Loading skills...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
