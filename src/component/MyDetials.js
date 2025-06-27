import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const MyDetails = () => {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navbar = document.querySelector('.navbar');

    const scrollHandler = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      if (scrollY > 80) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
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
          <img
            src="/images/photo.jpg"
            alt="Gloria Malik"
            className="profile-img"
          />
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
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
            I design & build beautiful web experiences.
          </motion.p>
          <a href="/Gloria-Malik-CV.pdf" download className="cv-btn">
            Download CV 📄
          </a>
        </section>

        <section id="about" className="about">
          <div className="about-container">
            <div className="about-image">
              <img src="/images/photo.jpg" alt="Gloria Malik" />
            </div>
            <div className="about-text">
              <h2>About Me</h2>
<p> Hi, I’m Gloria. A former customer service rep turned front-end developer. My curiosity about how websites work, which has turned into a passion for building them, and now I build responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.
My background in customer service taught me how to solve problems, communicate clearly, and stay focused on the user-skills I now apply to every project I work on. I'm always learning and looking for ways to create better, more engaging web experience
 </p>
              <p>
                <strong>What I'm good at:</strong> UI layout, writing clean
                code, and improving user experience.
              </p>
              <p>
                <strong>Currently learning:</strong> Advanced JavaScript, React
                hooks, and accessibility best practices.
              </p>
              <p>
                <strong>Hobbies:</strong> Listening to music, learning design on
                Dribbble, and writing about my journey.
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
            {['React', 'CSS', 'Framer Motion', 'Git'].map((tech) => (
              <span className="badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="skills" className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} size="2x" />
              <span>HTML</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faCss3Alt} size="2x" />
              <span>CSS</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJsSquare} size="2x" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="2x" />
              <span>React</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faGitAlt} size="2x" />
              <span>Git</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <span>GitHub</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
          <p>Please contact me at malikgloria99@gmail.com or through this form</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="send-btn" aria-label="Send Message">
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
        aria-label="Toggle Theme"
      >
        🌙
      </button>
    </div>
  );
};

export default MyDetails;
