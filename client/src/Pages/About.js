import React from "react";

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 24 }}>About Me</h1>
      <p>
        I’m PJ Granieri, a Computer Engineering student at the University of Pittsburgh with a focus on AI systems, software engineering, and automation. I design and build tools that solve real-world problems — from intelligent trading engines to embedded games and real-time infrastructure simulators.
      </p>
      <p>
        I recently interned at Sogeti, where I worked on developing agentic AI systems that integrate OpenAI's GPT-4, Neo4j, and pgvector to automate internal QA workflows. I’ve also served as a Teaching Assistant for ECE 1140, helping students navigate the software development lifecycle through agile planning, architecture reviews, and debugging support.
      </p>
      <p>
        Beyond the classroom and internship settings, I’ve led multi-person teams, architected simulation environments, designed PCBs, and launched a profitable resale business. Every project has been an opportunity to push my technical skills, lead with ownership, and build something that works and scales.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "32px 0 8px" }}>What I Bring</h2>
      <ul>
        <li>Strong foundation in Python, C++, systems design, and backend architecture</li>
        <li>Real-world experience with LLMs, vector databases, and agent frameworks</li>
        <li>Deep understanding of embedded systems, UI development, and infrastructure integration</li>
        <li>Entrepreneurial mindset backed by hands-on execution</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "32px 0 8px" }}>What I’m Aiming For</h2>
      <p>
        I’m actively looking for opportunities in AI engineering, software development, and technical product roles where I can contribute to scalable systems, grow under mentorship, and help shape the next wave of intelligent tools. Long term, I’m interested in leading engineering teams, and pushing the boundaries of human-computer collaboration.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "32px 0 8px" }}>Let’s Connect</h2>
      <ul>
        <li>
          <a href="https://github.com/pjgranieri" target="_blank" rel="noopener noreferrer">
            GitHub — technical projects
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pasqualegranieri" target="_blank" rel="noopener noreferrer">
            LinkedIn — resume &amp; background
          </a>
        </li>
      </ul>
    </div>
  );
}