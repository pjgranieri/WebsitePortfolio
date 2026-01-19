import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Home() {

  const featuredProjects = [
    {
      title: "Real-Time Poker Assistant",
      description: "Real-time poker coaching system using ESP32-S3 with 4 YOLOv8 models (99%+ accuracy) and custom MLP. Sub-3s latency with Azure-hosted inference.",
      tags: ["Python", "ESP32-S3", "YOLOv8", "Azure"],
      status: "Completed",
    },
    {
      title: "Careerly",
      description: "A production-ready, full-stack SaaS platform that leverages advanced AI to help job seekers optimize resumes, practice interviews, and track applications.",
      tags: ["React", "FastAPI", "PostgreSQL", "GPT-5"],
      status: "In Progress",
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
              <span className="timeline-date">Sep 2025 - Present</span>
              <h3 className="timeline-title">Software Engineer Intern - Microsoft Industry Project</h3>
              <p className="timeline-company">Microsoft / OpenEBS Mayastor</p>
              <div className="timeline-content">
                <p>
                  Contributing to CNCF cloud-native storage for Kubernetes. Authored OpenEBS Enhancement Proposal
                  (OEP-4111) for Prometheus metrics architecture and developing features in Go and Rust.
                </p>
              </div>
              <div className="timeline-tech">
                <span className="tag">Kubernetes</span>
                <span className="tag">Go</span>
                <span className="tag">Rust</span>
                <span className="tag">Prometheus</span>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Jun 2025 - Aug 2025</span>
              <h3 className="timeline-title">Software Engineer Intern</h3>
              <p className="timeline-company">Sogeti (Capgemini)</p>
              <div className="timeline-content">
                <p>
                  Pioneered an agentic AI platform improving QA efficiency by 30%. Integrated
                  PostgreSQL + pgvector, Neo4j knowledge graphs, and GPT-4 for automated workflow optimization.
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

    </div>
  );
}
