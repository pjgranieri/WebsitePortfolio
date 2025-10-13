import React, { useState } from "react";

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

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      {/* Headline */}
      <header style={{ textAlign: "center", marginBottom: 32 }}>
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>PJ Granieri</h1>
        <h2 style={{ fontWeight: 400, color: "#acacacff", margin: "0.5rem 0 1.5rem" }}>
          Aspiring Software Engineer | Computer Engineering & Economics @ Pitt
        </h2>
        <div style={{ fontSize: "1.05rem", color: "#acacacff", marginBottom: 24 }}>
          Building intelligent systems at the intersection of AI, distributed systems, and software architecture
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
          <a href="https://www.linkedin.com/in/pasqualegranieri" target="_blank" rel="noopener noreferrer" className="cta-btn">LinkedIn</a>
          <a href="https://github.com/pjgranieri" target="_blank" rel="noopener noreferrer" className="cta-btn">GitHub</a>
          <a href="#contact" className="cta-btn">Contact</a>
        </div>
      </header>

      {/* About Me */}
      <section style={{ marginBottom: 40 }}>
        <h3>About Me</h3>
        <p>
          I'm PJ Granieri, a Computer Engineering student at the University of Pittsburgh with a minor in Economics, passionate about building intelligent, scalable systems that solve real-world problems.
        </p>
        <p>
          My experience spans the full software development lifecycle ranging from embedded systems and computer vision to agentic AI platforms and cloud-native infrastructure. At Sogeti, I developed an AI-powered QA automation system that reduced testing time by 20-30%, integrating PostgreSQL, Neo4j knowledge graphs, and GPT-4. Through my Microsoft Industry Project, I contributed to OpenEBS Mayastor, designing Prometheus exporters for Kubernetes observability.
        </p>
        <p>
          I thrive on challenges that require both technical depth and systems thinking. Whether I'm architecting multi-agent AI workflows, optimizing distributed storage systems, or building real-time embedded hardware, I'm driven by the intersection of software engineering, machine learning, and infrastructure design.
        </p>
        <p>
          Beyond academics, I've founded a profitable e-commerce business, mentored 60+ students as a TA for Systems Engineering, and built projects ranging from quantitative trading engines to autonomous poker AI systems. I'm constantly learning, building, and seeking opportunities to apply my skills to meaningful engineering problems.
        </p>
      </section>

      {/* Featured Projects */}
      <section style={{ marginBottom: 40 }}>
        <h3>Featured Projects</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h4>Computer Vision Poker AI/ML Coach</h4>
            <ul style={{ fontSize: "0.95rem" }}>
              <li>Real-time autonomous poker player using ESP32-S3 + Azure ML</li>
              <li>≥99% card recognition accuracy with sub-5s cloud latency</li>
              <li>Hybrid edge-cloud architecture with OpenCV & PyTorch models</li>
            </ul>
          </div>
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h4>AI Assistant – Intelligent Planner</h4>
            <ul style={{ fontSize: "0.95rem" }}>
              <li>Agentic AI for scheduling, email, and task management</li>
              <li>FastAPI backend + PostgreSQL with pgvector + GPT-4</li>
              <li>Persistent memory with LangChain & Google Calendar/Gmail APIs</li>
            </ul>
          </div>
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h4>Train Control Simulation System</h4>
            <ul style={{ fontSize: "0.95rem" }}>
              <li>Real-time railway simulation with PyQt5 interactive maps</li>
              <li>Backend + frontend integration with failure injection testing</li>
              <li>Multi-line support with Agile workflows and IEEE standards</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "right", marginTop: 8 }}>
          <a href="/projects" style={{ textDecoration: "underline" }}>[View All Projects →]</a>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section style={{ marginBottom: 40 }}>
        <h3>Experience Snapshot</h3>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 250 }}>
            <strong>Microsoft Industry Project – OpenEBS/Mayastor</strong><br />
            <span style={{ color: "#666", fontSize: "0.95rem" }}>Sept 2025 – Dec 2025 | University of Pittsburgh</span>
            <ul style={{ fontSize: "0.95rem" }}>
              <li>Contributed to CNCF cloud-native storage project for Kubernetes</li>
              <li>Designed Prometheus exporter for distributed node health metrics</li>
              <li>Built and managed K8s clusters with Docker, Helm, and kubectl</li>
              <li>Researched Rust-based data plane and NVMe-oF integration</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 250 }}>
            <strong>Software Engineer Intern @ Sogeti</strong><br />
            <span style={{ color: "#666", fontSize: "0.95rem" }}>Jun 2025 – Jul 2025 | Dallas, TX</span>
            <ul style={{ fontSize: "0.95rem" }}>
              <li>Built agentic AI platform reducing QA testing time by 20-30%</li>
              <li>Integrated PostgreSQL + pgvector, Neo4j, and GPT-4 for RAG pipelines</li>
              <li>Developed FastAPI backend services with Docker on Azure</li>
              <li>Earned 3 Neo4j certifications in knowledge graphs and LLMs</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "right", marginTop: 8 }}>
          <a href="/experience" style={{ textDecoration: "underline" }}>[View Full Experience →]</a>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section style={{ marginBottom: 40 }}>
        <h3>Skills & Technologies</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          <div>
            <strong style={{ fontSize: "0.95rem", color: "#555" }}>Languages</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>Python, C++, Java, Rust, Go, JavaScript, C</div>
          </div>
          <div>
            <strong style={{ fontSize: "0.95rem", color: "#555" }}>AI/ML</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>GPT-4, LangChain, OpenCV, PyTorch, TensorFlow, RAG</div>
          </div>
          <div>
            <strong style={{ fontSize: "0.95rem", color: "#555" }}>Databases</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>PostgreSQL, pgvector, Neo4j, SQLAlchemy</div>
          </div>
          <div>
            <strong style={{ fontSize: "0.95rem", color: "#555" }}>DevOps & Cloud</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>Docker, Kubernetes, Azure, GitHub Actions, Helm</div>
          </div>
          <div>
            <strong style={{ fontSize: "0.95rem", color: "#555" }}>Backend/APIs</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>FastAPI, REST APIs, Microservices, Prometheus</div>
          </div>
          <div>
            <strong style={{ fontSize: "0.95rem", color: "#555" }}>Embedded Systems</strong>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>ESP32, ATMega328P, Arduino, KiCad, UART/I2C</div>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section id="contact" style={{ marginBottom: 40 }}>
        <h3>Contact Me</h3>
        <p>
          Have a question, opportunity, or just want to say hi?<br />
          Feel free to reach out, I'd love to connect.
        </p>
        <div style={{ maxWidth: 400 }}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: 8, padding: 8, boxSizing: "border-box" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: 8, padding: 8, boxSizing: "border-box" }}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: 8, padding: 8, minHeight: 80, boxSizing: "border-box" }}
          />
          <button onClick={handleSubmit} style={{ padding: "8px 16px", cursor: "pointer" }}>Send Message</button>
        </div>
        {status && <div style={{ marginTop: 8 }}>{status}</div>}
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #ccc", paddingTop: 16, textAlign: "center", color: "#888" }}>
        PJ Granieri © 2025 &nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/pasqualegranieri" target="_blank" rel="noopener noreferrer">LinkedIn</a> &nbsp;|&nbsp;
        <a href="https://github.com/pjgranieri" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;|&nbsp;
        <a href="https://leetcode.com/u/pj_gran" target="_blank" rel="noopener noreferrer">LeetCode</a> &nbsp;|&nbsp;
      </footer>
    </div>
  );
}