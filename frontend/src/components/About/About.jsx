import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.textContainer}>
            <p>
              I am a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              My journey in software development began with a curiosity for how things work on the internet, 
              which quickly blossomed into a career building scalable and efficient applications.
            </p>
            <p>
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy tackling complex 
              problems, whether it's optimizing backend database queries or crafting pixel-perfect, accessible, 
              and engaging user interfaces.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>3+</span>
                <span className={styles.highlightText}>Years Experience</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>20+</span>
                <span className={styles.highlightText}>Projects Completed</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>100%</span>
                <span className={styles.highlightText}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
