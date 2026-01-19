import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = {
  completed: [
    {
      title: "Real-Time Poker Assistant",
      description: "An ML-powered poker coaching system providing real-time strategic recommendations during live gameplay. Features ESP32-S3 with 4 YOLOv8 models (99%+ accuracy), custom MLP, and Azure-hosted inference with sub-3s latency.",
      tags: ["Python", "ESP32-S3", "YOLOv8", "Azure", "C++", "Computer Vision"],
      link: "/projects/real-time-poker-assistant",
      github: "https://github.com/pjgranieri/Portable-Real-Time-Poker-Assistant",
      external: "https://youtu.be/1nT3llKM1yY",
      externalLabel: "Demo",
      featured: true,
    },
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
  inProgress: [
    {
      title: "Careerly",
      description: "A production-ready, full-stack SaaS platform that leverages advanced AI to help job seekers optimize resumes, practice interviews, track applications, and accelerate their career growth.",
      tags: ["React", "FastAPI", "PostgreSQL", "GPT-5", "Docker"],
      link: "/projects/careerly",
      external: "https://www.usecareerly.com",
      externalLabel: "Live Site",
      featured: true,
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
              <FiExternalLink /> {project.externalLabel || "Demo"}
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
      </div>
    </div>
  );
}
