import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <i> K.L. </i>
          </a>
          <p className="footer-tagline">
            Frontend Developer building modern web and mobile applications.
          </p>
        </div>

        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          
          <a  href="https://github.com/Lafazanovski"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          
          <a  href="https://www.linkedin.com/in/kristijan-lafazanovski-b89814286/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Kristijan Lafazanovski. All rights reserved.</p>
        <a href="#home" className="footer-top" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}