import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Failed to send message.");
    }
  };

  const featuredProjects = [
    {
      title: "Computer Vision Poker AI",
      description: "Real-time autonomous poker player using ESP32-S3 + Azure ML with 99% card recognition accuracy and sub-5s cloud latency.",
      tags: ["Python", "PyTorch", "OpenCV", "ESP32"],
      status: "In Progress",
    },
    {
      title: "AI Assistant Platform",
      description: "Agentic AI for scheduling, email, and task management with FastAPI backend, PostgreSQL + pgvector, and GPT-4 integration.",
      tags: ["FastAPI", "LangChain", "PostgreSQL", "GPT-4"],
      status: "MVP",
    },
    {
      title: "Train Control Simulation",
      description: "Real-time railway simulation with PyQt5 interactive maps, multi-line support, and IEEE-compliant fault tolerance.",
      tags: ["Python", "PyQt5", "Systems Design"],
      link: "/projects/train-control",
      status: "Completed",
    },
  ];

  const skills = [
    { category: "Languages", items: "Python, C++, Java, Rust, Go, JavaScript, C" },
    { category: "AI/ML", items: "GPT-4, LangChain, OpenCV, PyTorch, TensorFlow, RAG" },
    { category: "Databases", items: "PostgreSQL, pgvector, Neo4j, SQLAlchemy" },
    { category: "DevOps & Cloud", items: "Docker, Kubernetes, Azure, GitHub Actions, Helm" },
    { category: "Backend/APIs", items: "FastAPI, REST APIs, Microservices, Prometheus" },
    { category: "Embedded", items: "ESP32, ATMega328P, Arduino, KiCad, UART/I2C" },
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-eyebrow">Software Engineer</p>
            <h1 className="hero-title">
              Building <em>intelligent</em><br />
              systems that matter
            </h1>
            <p className="hero-subtitle">
              I'm PJ Granieri, a Computer Engineering student at Pitt specializing in
              AI systems, distributed infrastructure, and full-stack development.
              Currently building agentic AI platforms and cloud-native solutions.
            </p>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <a
                href="https://github.com/pjgranieri"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pasqualegranieri"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-decoration" aria-hidden="true"></div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">01 Featured Work</span>
            <h2>Selected Projects</h2>
          </div>
          <div className="projects-grid stagger-in">
            {featuredProjects.map((project, index) => (
              <article key={index} className="card project-card">
                <span className="card-label">{project.status}</span>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <div className="card-meta">
                    <Link to={project.link} className="btn btn-ghost">
                      View Details
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="mt-xl" style={{ textAlign: "right" }}>
            <Link to="/projects" className="btn btn-ghost">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="section" style={{ background: "var(--color-bg-elevated)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">02 Experience</span>
            <h2>Where I've Worked</h2>
          </div>
          <div className="timeline stagger-in">
            <div className="timeline-item">
              <span className="timeline-date">Aug 2025 - Dec 2025</span>
              <h3 className="timeline-title">Industry Project Contributor</h3>
              <p className="timeline-company">Microsoft / OpenEBS Mayastor</p>
              <div className="timeline-content">
                <p>
                  Contributing to CNCF cloud-native storage for Kubernetes. Designed Prometheus
                  exporters for distributed node health metrics and researched Rust-based async I/O architectures.
                </p>
              </div>
              <div className="timeline-tech">
                <span className="tag">Kubernetes</span>
                <span className="tag">Rust</span>
                <span className="tag">Prometheus</span>
                <span className="tag">Go</span>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Jun 2025 - Jul 2025</span>
              <h3 className="timeline-title">Software Engineer Intern</h3>
              <p className="timeline-company">Sogeti (Capgemini)</p>
              <div className="timeline-content">
                <p>
                  Built an agentic AI platform that reduced QA testing time by 20-30%. Integrated
                  PostgreSQL + pgvector, Neo4j knowledge graphs, and GPT-4 for intelligent test automation.
                </p>
              </div>
              <div className="timeline-tech">
                <span className="tag">Python</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Neo4j</span>
                <span className="tag">GPT-4</span>
              </div>
            </div>
          </div>
          <div className="mt-xl" style={{ textAlign: "right" }}>
            <Link to="/experience" className="btn btn-ghost">
              View Full Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">03 Expertise</span>
            <h2>Skills & Technologies</h2>
          </div>
          <div className="skills-grid stagger-in">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <h4 className="skill-category-title">{skill.category}</h4>
                <p className="skill-list">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">04 Contact</span>
            <h2>Let's Connect</h2>
            <p className="text-secondary mt-md" style={{ maxWidth: 500 }}>
              Have a question, opportunity, or just want to say hi?
              I'd love to hear from you.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <FiArrowRight />
            </button>
            {status && <div className="form-status">{status}</div>}
          </form>
        </div>
      </section>
    </div>
  );
}
