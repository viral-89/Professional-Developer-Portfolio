import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Replace with your Web3Forms Access Key
    formData.append("access_key", "f42bfc88-501a-4793-8493-8a9aeb573739");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3>Let's talk about everything!</h3>
            <p>
              Don't like forms? Send me an email at 👋<br />
              <a href="mailto:hello@example.com">hello@example.com</a>
            </p>
            <div className={styles.socialLinks}>
              <a href="https://github.com/viral-89" target="_blank" rel="noreferrer" aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>
          <div className={styles.contactForm}>
            <form onSubmit={onSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Hello! I would like to..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
            <span className={styles.result}>{result}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
