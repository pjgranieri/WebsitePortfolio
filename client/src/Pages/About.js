import React from "react";

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 24 }}>About Me</h1>
      
      <p>
        I'm PJ Granieri, a Computer Engineering student at the University of Pittsburgh with a minor in Economics, passionate about building intelligent systems at the intersection of software engineering, artificial intelligence, and distributed infrastructure.
      </p>
      
      <p>
        My technical journey spans the full software development lifecycle from low-level embedded systems and computer vision to cloud-native platforms and agentic AI workflows. At Sogeti, I developed an AI-powered QA automation system that reduced testing cycles by 20-30%, integrating PostgreSQL with pgvector, Neo4j knowledge graphs, and GPT-4 to create autonomous agents for requirement validation and test planning. Through my Microsoft Industry Project, I contributed to OpenEBS Mayastor, a CNCF cloud-native storage solution, where I designed Prometheus exporters for Kubernetes observability and researched Rust-based async I/O architectures.
      </p>
      
      <p>
        As a Teaching Assistant for Systems and Project Engineering, I mentor 60+ students through Agile development workflows, software architecture patterns, and industry-standard practices including code reviews, test-driven development, and IEEE documentation standards. This role has sharpened my ability to break down complex technical concepts and guide teams through real-world engineering challenges.
      </p>
      
      <p>
        Beyond academics and professional work, I thrive on building. I've architected quantitative trading backtesting engines, designed custom PCBs for embedded reaction games, built real-time railway control simulations with PyQt5, and developed computer vision systems for autonomous poker gameplay. I also founded and scaled a profitable e-commerce business, learning the fundamentals of market analysis, inventory optimization, and data-driven decision-making skills that continue to inform how I approach technical problems.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "32px 0 8px" }}>Technical Foundation</h2>
      <ul>
        <li><strong>Languages:</strong> Python, C++, Java, Rust, Go, JavaScript, C </li>
        <li><strong>AI/ML:</strong> GPT-4, LangChain, RAG pipelines, OpenCV, PyTorch, TensorFlow, Agentic Systems</li>
        <li><strong>Backend & APIs:</strong> FastAPI, REST APIs, microservices, PostgreSQL, pgvector, Neo4j, SQLAlchemy</li>
        <li><strong>DevOps & Cloud:</strong> Docker, Kubernetes, Azure, GitHub Actions, Helm, Prometheus, Grafana</li>
        <li><strong>Embedded Systems:</strong> ESP32, ATMega328P, Arduino, KiCad, UART/I2C protocols</li>
        <li><strong>Software Engineering:</strong> Agile/Scrum, TDD, design patterns, CI/CD, version control, system architecture</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "32px 0 8px" }}>What Drives Me</h2>
      <p>
        I'm drawn to problems that require both technical depth and systems thinking, whether that's optimizing distributed storage observability, architecting multi-agent AI workflows, or designing hybrid edge-cloud architectures for real-time inference. I believe the best engineering happens at the intersection of disciplines: combining machine learning with infrastructure, blending embedded hardware with cloud services, or applying economic thinking to technical tradeoffs.
      </p>
      <p>
        I'm constantly learning and experimenting. Whether it's earning Neo4j certifications to deepen my knowledge graph expertise, contributing to open-source projects, or prototyping new ideas in personal projects, I treat every challenge as an opportunity to expand my capabilities and deliver meaningful impact.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "32px 0 8px" }}>What I'm Looking For</h2>
      <p>
        I'm actively seeking <strong>Software Engineering, Machine Learning Engineering, and AI Engineering</strong> opportunities where I can contribute to building scalable, production-grade systems. I'm particularly excited about roles involving:
      </p>
      <ul>
        <li>Agentic AI systems and LLM application development</li>
        <li>Distributed systems, cloud infrastructure, and observability tooling</li>
        <li>Full-stack development with emphasis on backend architecture and data pipelines</li>
        <li>Computer vision, ML model deployment, and edge computing</li>
        <li>Developer tools, DevOps automation, and platform engineering</li>
      </ul>
      <p>
        Long term, I'm interested in technical leadership roles where I can mentor engineers, shape product direction, and push the boundaries of what's possible with intelligent systems. I'm looking for environments that prioritize learning, ownership, and building technology that matters.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "32px 0 8px" }}>Beyond Engineering</h2>
      <p>
        Outside of code, I'm an avid learner with diverse interests. My Economics minor has given me frameworks for thinking about market dynamics, incentive design, and decision-making under uncertainty, perspectives that inform how I approach technical architecture and product strategy. I enjoy competitive problem-solving (you'll find me on LeetCode), following developments in AI research, and exploring how technology reshapes industries.
      </p>
      <p>
        I also value giving back. Whether through mentoring students as a TA, volunteering as a youth basketball coach, or contributing to open-source projects, I believe in using my skills to help others grow and succeed.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "32px 0 8px" }}>Let's Connect</h2>
      <p>
        I'm always excited to discuss interesting technical problems, collaboration opportunities, or just connect with fellow engineers and builders.
      </p>
      <ul>
        <li>
          <a href="https://github.com/pjgranieri" target="_blank" rel="noopener noreferrer">
            GitHub
          </a> — Explore my technical projects and contributions
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pasqualegranieri" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> — Connect professionally and view my full experience
        </li>
        <li>
          <a href="mailto:pjg44@pitt.edu">Email</a> — Reach out directly for opportunities or questions
        </li>
        <li>
          <a href="https://leetcode.com/u/pj_gran" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a> — Follow my problem-solving journey
        </li>
      </ul>
      
    </div>
  );
}