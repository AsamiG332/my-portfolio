import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const MyDetails = () => {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navbar = document.querySelector('.navbar');

    const onScroll = () => {
      const scrollY = window.scrollY + navbar.offsetHeight + 5;
      let currentSection = '';

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);

      if (window.scrollY > 80) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`container ${dark ? 'dark' : ''}`}>
      <header className="navbar">
        <ul className="nav-links">
          {['about', 'projects', 'tech', 'skills', 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <main>
        <section className="hero">
          <motion.img
            src="/images/photo.jpg"
            alt="Gloria Malik"
            className="profile-img"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Gloria 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I build beautiful web experiences.
          </motion.p>
          <div className="cv-and-links">
            <a href="/Gloria-Malik-CV.pdf" download className="cv-btn">
              Download CV 📄
            </a>

            <a
              href="https://github.com/your-github-AsamiG332"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a
              href="https://www.linkedin.com/in/gloriamalik/"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="about-container">
            <div className="about-image">
              <img src="/images/photo.jpg" alt="Gloria Malik" />
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hi, I’m Gloria. A former customer service rep turned front-end
                developer. My curiosity about how websites work has turned into
                a passion for building them, and now I build responsive,
                user-friendly interfaces using HTML, CSS, JavaScript, and React.
                My background in customer service taught me how to solve
                problems, communicate clearly, and stay focused on the user—
                skills I now apply to every project I work on.
              </p>
              <p>
                <strong>What I'm good at:</strong> writing clean code, and
                improving user experience.
              </p>
              <p>
                <strong>Currently learning:</strong> Advanced JavaScript, React
                hooks, and Next.js.
              </p>
              <p>
                <strong>Hobbies:</strong> Listening to music, upskilling, and
                documenting my journey.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="card-grid">
            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <h3>Portfolio Site</h3>
              <p>My personal website built with React & Framer Motion.</p>
            </motion.div>
          </div>
        </section>

        <section id="tech" className="section">
          <h2>Tech Stack</h2>
          <div className="badges">
            {['React', 'CSS', 'Git'].map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-list">
            {[faHtml5, faCss3Alt, faJsSquare, faReact, faGitAlt, faGithub].map(
              (icon, index) => (
                <div className="skill" key={index}>
                  <FontAwesomeIcon icon={icon} size="2x" />
                  <span>
                    {['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'][index]}
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
          <p>
            Please contact me at{' '}
            <a href="mailto:malikgloria99@gmail.com">malikgloria99@gmail.com</a>{' '}
            or through this form:
          </p>
          <form
            className="contact-form"
            action="https://"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="_replyto" placeholder="Email" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Gloria Malik. All rights reserved.
        </footer>
      </main>

      <button
        onClick={() => setDark(!dark)}
        className="theme-toggle-floating"
        aria-label="Toggle Dark Mode"
        title="Toggle Dark Mode"
      >
        🌙
      </button>
    </div>
  );
};

export default MyDetails;
