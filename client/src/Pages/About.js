import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";

const skills = [
  { category: "Languages", items: "Python, C++, Java, Rust, Go, JavaScript, C" },
  { category: "AI/ML", items: "GPT-4, LangChain, RAG, OpenCV, PyTorch, TensorFlow" },
  { category: "Backend & APIs", items: "FastAPI, REST APIs, PostgreSQL, pgvector, Neo4j" },
  { category: "DevOps & Cloud", items: "Docker, Kubernetes, Azure, GitHub Actions, Helm" },
  { category: "Embedded Systems", items: "ESP32, ATMega328P, Arduino, KiCad, UART/I2C" },
  { category: "Engineering", items: "Agile/Scrum, TDD, Design Patterns, CI/CD, System Architecture" },
];

const interests = [
  "Agentic AI systems and LLM application development",
  "Distributed systems, cloud infrastructure, and observability",
  "Full-stack development with emphasis on backend architecture",
  "Computer vision, ML model deployment, and edge computing",
  "Developer tools, DevOps automation, and platform engineering",
];

const links = [
  { icon: FiGithub, label: "GitHub", url: "https://github.com/pjgranieri", desc: "Technical projects and contributions" },
  { icon: FiLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/pasqualegranieri", desc: "Professional profile and experience" },
  { icon: FiMail, label: "Email", url: "mailto:pjg44@pitt.edu", desc: "Reach out for opportunities" },
  { icon: FiCode, label: "LeetCode", url: "https://leetcode.com/u/pj_gran", desc: "Problem-solving journey" },
];

export default function About() {
  return (
    <div className="page">
      <div className="container">
        {/* Page Header */}
        <section className="section">
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h1>Building at the Intersection</h1>
          </div>
        </section>

        {/* Bio */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container-narrow" style={{ padding: 0 }}>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              I'm <strong>PJ Granieri</strong>, a Computer Engineering student at the University of Pittsburgh
              with a minor in Economics. I'm passionate about building intelligent systems at the intersection
              of software engineering, artificial intelligence, and distributed infrastructure.
            </p>

            <p>
              My technical journey spans the full software development lifecycle, from low-level embedded
              systems and computer vision to cloud-native platforms and agentic AI workflows. At Sogeti,
              I developed an AI-powered QA automation system that reduced testing cycles by 20-30%,
              integrating PostgreSQL with pgvector, Neo4j knowledge graphs, and GPT-4.
            </p>

            <p>
              Through my Microsoft Industry Project, I contributed to OpenEBS Mayastor, a CNCF cloud-native
              storage solution, designing Prometheus exporters for Kubernetes observability. As a Teaching
              Assistant, I mentor 60+ students through Agile workflows and software architecture patterns.
            </p>

            <p>
              Beyond academics, I've architected quantitative trading engines, designed custom PCBs for
              embedded games, and built computer vision systems for autonomous poker gameplay. I also
              founded and scaled a profitable e-commerce business, learning market analysis and
              data-driven decision-making.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="section" style={{ background: "var(--color-bg-elevated)", margin: "0 -40px", padding: "var(--space-3xl) 40px" }}>
          <div className="section-header">
            <span className="section-label">01 Technical Foundation</span>
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
        </section>

        {/* What Drives Me */}
        <section className="section">
          <div className="container-narrow" style={{ padding: 0 }}>
            <div className="section-header">
              <span className="section-label">02 Philosophy</span>
              <h2>What Drives Me</h2>
            </div>
            <p>
              I'm drawn to problems that require both technical depth and systems thinking. Whether
              optimizing distributed storage observability, architecting multi-agent AI workflows, or
              designing hybrid edge-cloud architectures for real-time inference, I believe the best
              engineering happens at the intersection of disciplines.
            </p>
            <p>
              I'm constantly learning and experimenting. Whether it's earning Neo4j certifications,
              contributing to open-source projects, or prototyping new ideas, I treat every challenge
              as an opportunity to expand my capabilities and deliver meaningful impact.
            </p>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="section" style={{ background: "var(--color-bg-elevated)", margin: "0 -40px", padding: "var(--space-3xl) 40px" }}>
          <div className="section-header">
            <span className="section-label">03 Opportunities</span>
            <h2>What I'm Looking For</h2>
          </div>
          <div className="container-narrow" style={{ padding: 0 }}>
            <p>
              I'm actively seeking <strong className="text-accent">Software Engineering, Machine Learning Engineering,
              and AI Engineering</strong> opportunities where I can contribute to building scalable,
              production-grade systems. I'm particularly excited about:
            </p>
            <ul className="mt-lg" style={{ paddingLeft: 'var(--space-lg)' }}>
              {interests.map((interest, index) => (
                <li key={index} style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  {interest}
                </li>
              ))}
            </ul>
            <p className="mt-lg">
              Long term, I'm interested in technical leadership roles where I can mentor engineers,
              shape product direction, and push the boundaries of what's possible with intelligent systems.
            </p>
          </div>
        </section>

        {/* Beyond Engineering */}
        <section className="section">
          <div className="container-narrow" style={{ padding: 0 }}>
            <div className="section-header">
              <span className="section-label">04 Personal</span>
              <h2>Beyond Engineering</h2>
            </div>
            <p>
              My Economics minor has given me frameworks for thinking about market dynamics, incentive
              design, and decision-making under uncertainty. These perspectives inform how I approach
              technical architecture and product strategy.
            </p>
            <p>
              I enjoy competitive problem-solving on LeetCode, following developments in AI research,
              and exploring how technology reshapes industries. I also value giving back through
              mentoring students and volunteering as a youth basketball coach.
            </p>
          </div>
        </section>

        {/* Connect */}
        <section className="section">
          <div className="section-header">
            <span className="section-label">05 Connect</span>
            <h2>Let's Talk</h2>
            <p className="text-secondary mt-md" style={{ maxWidth: 500 }}>
              I'm always excited to discuss interesting technical problems, collaboration opportunities,
              or just connect with fellow engineers.
            </p>
          </div>
          <div className="skills-grid stagger-in" style={{ maxWidth: 800 }}>
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="card"
                  style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', textDecoration: 'none' }}
                >
                  <Icon size={24} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{link.label}</h4>
                    <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>{link.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
