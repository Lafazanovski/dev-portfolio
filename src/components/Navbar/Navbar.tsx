"use client";

import { useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            <i> K.L. </i>
          </a>
        </div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          <li className="navbar-menu-cta">
            <a href="#contact" className="navbar-cta" onClick={closeMenu}>
              {"Let's Talk"}
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <FiMoon className="theme-icon theme-icon-dark" />
            <FiSun className="theme-icon theme-icon-light" />
          </button>

          <a href="#contact" className="navbar-cta" onClick={closeMenu}>
            {"Let's Talk"}
          </a>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
