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
        <h2 style={{ fontWeight: 400, color: "#555", margin: "0.5rem 0 1.5rem" }}>
          Engineer | Builder | AI Problem Solver
        </h2>
        <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 24 }}>
          Software Engineer Intern @ Sogeti &bull; Computer Engineering @ Pitt &bull; AI, Systems, and Finance Enthusiast
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn">📄 Resume</a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="cta-btn">💼 LinkedIn</a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="cta-btn">📂 GitHub</a>
          <a href="#contact" className="cta-btn">📬 Contact</a>
        </div>
      </header>

      {/* About Me */}
      <section style={{ marginBottom: 40 }}>
        <h3>👋 About Me</h3>
        <p>
          I’m PJ Granieri, a Computer Engineering student at the University of Pittsburgh passionate about building intelligent, scalable systems.<br /><br />
          I’ve interned at Sogeti, where I helped develop an agentic AI system integrating PostgreSQL, Neo4j, and GPT-4 to automate internal QA workflows. I also TA for ECE 1140, and I’ve built projects spanning AI backtesting engines, train control simulations, and embedded systems with custom PCBs.<br /><br />
          Whether it's software engineering, automation, or AI — I love turning complex challenges into working systems that scale.
        </p>
      </section>

      {/* Featured Projects */}
      <section style={{ marginBottom: 40 }}>
        <h3>🛠️ Featured Projects</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h4>🔁 Backtesting Engine for Algorithmic Trading</h4>
            <ul>
              <li>Built a modular Python system to simulate technical strategies</li>
              <li>Logged metrics like Sharpe, Drawdown, and Win Rate</li>
              <li>Modeled after QuantConnect/Backtrader</li>
            </ul>
          </div>
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h4>🚆 Train Control Simulation System</h4>
            <ul>
              <li>Engineered real-time simulation of trains, wayside, and CTC</li>
              <li>Backend + PyQt frontend with maps, switch logic, and signals</li>
              <li>Multi-line, fault-tolerant, and agile-team tested</li>
            </ul>
          </div>
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h4>🕹️ Space Invaders “Bop-It!” Game</h4>
            <ul>
              <li>Embedded system with C++ + ATMega328P + KiCad PCB</li>
              <li>Real-time reaction game with sound, lights, and scoring</li>
              <li>Custom hardware, serial comms, and state machine control</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "right", marginTop: 8 }}>
          <a href="/projects" style={{ textDecoration: "underline" }}>[View All Projects →]</a>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section style={{ marginBottom: 40 }}>
        <h3>💼 Experience Snapshot</h3>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 250 }}>
            <strong>Software Engineer Intern @ Sogeti</strong><br />
            <span>Jun – Jul 2025 | Dallas, TX</span>
            <ul>
              <li>Developed agentic AI infrastructure using PostgreSQL + pgvector, Neo4j, OpenAI GPT-4, and Docker</li>
              <li>Integrated autonomous agents via orchestration platforms like Agno</li>
              <li>Built internal QA tools with memory management, testing pipelines, and API integrations</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 250 }}>
            <strong>Entrepreneur @ 610Street Style Shoes</strong><br />
            <span>Apr 2021 – Aug 2023</span>
            <ul>
              <li>Scaled a profitable shoe reselling business based on trend analysis</li>
              <li>Managed inventory, pricing strategy, and sales timing</li>
              <li>Gained business ops experience and customer insight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section id="contact" style={{ marginBottom: 40 }}>
        <h3>📬 Contact Me</h3>
        <p>
          Have a question, opportunity, or just want to say hi?<br />
          Feel free to reach out — I’d love to connect.
        </p>
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 8, padding: 8 }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 8, padding: 8 }}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 8, padding: 8, minHeight: 80 }}
          />
          <button type="submit" style={{ padding: "8px 16px" }}>Send Message</button>
        </form>
        {status && <div style={{ marginTop: 8 }}>{status}</div>}
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #ccc", paddingTop: 16, textAlign: "center", color: "#888" }}>
        PJ Granieri © 2025 &nbsp;|&nbsp;
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a> &nbsp;|&nbsp;
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;|&nbsp;
        <a href="https://leetcode.com/your-leetcode" target="_blank" rel="noopener noreferrer">LeetCode</a> &nbsp;|&nbsp;
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </footer>
    </div>
  );
}