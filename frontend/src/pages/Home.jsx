import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Viral Mandaviya. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
