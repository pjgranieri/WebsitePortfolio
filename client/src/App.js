import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import TrainControl from "./Pages/TrainControl";
import BacktestingEngine from "./Pages/BacktestingEngine";
import SpaceInvadersBopit from "./Pages/SpaceInvadersBopit";
import "./App.css";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="nav-logo">
        PJ<span>.</span>
      </Link>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/experience" className={`nav-link ${isActive("/experience") ? "active" : ""}`}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built by PJ Granieri
          </p>
          <div className="social-links">
            <a
              href="https://github.com/pjgranieri"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pasqualegranieri"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:pjg44@pitt.edu"
              className="social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/train-control" element={<TrainControl />} />
          <Route path="/projects/backtesting-engine" element={<BacktestingEngine />} />
          <Route path="/projects/space-invaders-bopit" element={<SpaceInvadersBopit />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
