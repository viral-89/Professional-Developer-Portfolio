import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroContent}`}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.greeting}>Hi, I'm</p>
          <h1 className={styles.name}>Viral Mandaviya</h1>
          <h2 className={styles.role}>Full Stack Developer</h2>
          <p className={styles.tagline}>
            I build scalable, professional, and visually stunning web applications.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.imageContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            {/* Placeholder for Photo */}
            <div className={styles.placeholderImage}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
