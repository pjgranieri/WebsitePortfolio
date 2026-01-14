import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = {
  completed: [
    {
      title: "Train Control Simulation System",
      description: "A modular simulation platform integrating Train, Wayside, and Central Traffic Control (CTC) components. Features real-time PyQt5 frontend with interactive maps, fault-tolerant backend logic, and multi-line support.",
      tags: ["Python", "PyQt5", "Systems Design", "IEEE Standards"],
      link: "/projects/train-control",
      featured: true,
    },
    {
      title: "Backtesting Engine",
      description: "A strategy-based trading simulator evaluating historical performance using financial indicators like RSI and Bollinger Bands. Includes batch testing, equity curve plots, and Sharpe/Drawdown analysis.",
      tags: ["Python", "Pandas", "Finance", "Data Analysis"],
      link: "/projects/backtesting-engine",
    },
    {
      title: "Space Invaders Bop-It!",
      description: "An embedded reaction game built on ATMega328P with custom PCB, real-time input controls, LED/audio feedback, and LCD-based scoring. Designed and fabricated hardware from scratch.",
      tags: ["C++", "Arduino", "KiCad", "Embedded Systems"],
      link: "/projects/space-invaders-bopit",
    },
  ],
  mvp: [
    {
      title: "Portfolio Website",
      description: "A personal portfolio site built with React and Express backend featuring an interactive contact form, project showcases, and responsive design optimized for all devices.",
      tags: ["React", "Node.js", "Express", "Netlify"],
    },
    {
      title: "AI Email & Calendar Assistant",
      description: "A personal AI assistant that reads, summarizes, and prioritizes emails with calendar integration. Features natural language understanding and cross-platform syncing.",
      tags: ["FastAPI", "LangChain", "PostgreSQL", "GPT-4"],
    },
  ],
  inProgress: [
    {
      title: "Autonomous Poker AI",
      description: "An embedded system that autonomously plays live poker using computer vision and AI decision engine. Integrates ESP32-S3, Azure ML, and lightweight models for real-time betting decisions.",
      tags: ["Python", "PyTorch", "OpenCV", "ESP32", "Azure"],
      featured: true,
    },
    {
      title: "HotCiv Strategy Game",
      description: "A Java-based 2-4 player turn-based strategy game emphasizing software construction principles: TDD, refactoring, design patterns, and maintainable architecture.",
      tags: ["Java", "TDD", "Design Patterns", "OOP"],
    },
    {
      title: "Blind Traffic Navigator",
      description: "A computer vision system assisting visually impaired pedestrians by detecting crosswalks, traffic signals, and obstacles with real-time alerts.",
      tags: ["Python", "OpenCV", "Computer Vision", "Accessibility"],
    },
  ],
};

function ProjectCard({ project, status }) {
  return (
    <article className={`card project-card ${project.featured ? 'project-featured' : ''}`}>
      <span className="card-label">{status}</span>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-description">{project.description}</p>
      <div className="card-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      {(project.link || project.github || project.external) && (
        <div className="card-meta">
          {project.link && (
            <Link to={project.link} className="btn btn-ghost">
              View Details
            </Link>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <FiGithub /> Code
            </a>
          )}
          {project.external && (
            <a href={project.external} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <FiExternalLink /> Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <div className="page">
      <div className="container">
        {/* Page Header */}
        <section className="section">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h1>Things I've Built</h1>
            <p className="text-secondary mt-md" style={{ maxWidth: 600 }}>
              A collection of projects spanning AI/ML, distributed systems,
              embedded hardware, and full-stack development.
            </p>
          </div>
        </section>

        {/* In Progress */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-header">
            <span className="section-label">01 Active Development</span>
            <h2>In Progress</h2>
          </div>
          <div className="projects-grid stagger-in">
            {projects.inProgress.map((project, index) => (
              <ProjectCard key={index} project={project} status="In Progress" />
            ))}
          </div>
        </section>

        {/* Completed */}
        <section className="section" style={{ background: "var(--color-bg-elevated)", margin: "0 -40px", padding: "var(--space-3xl) 40px" }}>
          <div className="section-header">
            <span className="section-label">02 Shipped</span>
            <h2>Completed Projects</h2>
          </div>
          <div className="projects-grid stagger-in">
            {projects.completed.map((project, index) => (
              <ProjectCard key={index} project={project} status="Completed" />
            ))}
          </div>
        </section>

        {/* MVP / Prototype */}
        <section className="section">
          <div className="section-header">
            <span className="section-label">03 Prototypes</span>
            <h2>MVP / Prototype</h2>
          </div>
          <div className="projects-grid stagger-in">
            {projects.mvp.map((project, index) => (
              <ProjectCard key={index} project={project} status="MVP" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
