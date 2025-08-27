import React from "react";

export default function Experience() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 32 }}>Experience</h1>

      {/* Teaching Assistant */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.15rem", margin: 0, fontWeight: 600 }}>Teaching Assistant for ECE 1140: Systems and Project Engineering</h2>
        <div style={{ color: "#555", marginBottom: 2 }}>
          University of Pittsburgh — Pittsburgh, PA · On-site
        </div>
        <div style={{ color: "#888", marginBottom: 12 }}>
          August 2025 – Present
        </div>
        <p>
          As a TA for ECE 1140, I mentor students through hands-on systems engineering projects. The course mirrors industry workflows, and I guide students through the entire development lifecycle: from requirement specs and software architecture to sprint planning, integration, and testing.
        </p>
        <p>
          I offer one-on-one mentorship, help debug and review technical implementations, and provide feedback on documentation and teamwork. My work emphasizes real-world readiness, agile practices, and collaborative development.
        </p>
        <div style={{ marginTop: 8, marginBottom: 4, fontWeight: 500 }}>Key Contributions:</div>
        <ul style={{ marginTop: 0, marginBottom: 8 }}>
          <li>Mentored student teams on system design, software architecture, and sprint execution</li>
          <li>Facilitated debugging sessions, code reviews, and requirement evaluations</li>
          <li>Promoted agile principles using GitHub and Jira for collaborative project tracking</li>
        </ul>
        <div style={{ fontSize: "0.98rem", color: "#444" }}>
          <strong>Skills Reinforced:</strong> Technical mentoring · Agile development · Software lifecycle · Team collaboration
        </div>
      </section>

      {/* Software Engineer Intern */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.15rem", margin: 0, fontWeight: 600 }}>Software Engineer Intern</h2>
        <div style={{ color: "#555", marginBottom: 2 }}>
          Sogeti — Dallas, TX · On-site
        </div>
        <div style={{ color: "#888", marginBottom: 12 }}>
          June 2025 – July 2025
        </div>
        <p>
          At Sogeti, I contributed to the development of an agentic AI system designed to streamline internal QA processes. I integrated PostgreSQL with pgvector, Neo4j, and OpenAI GPT-4 to create autonomous agents capable of processing internal documentation and validating test cases intelligently.
        </p>
        <p>
          Working within a containerized environment using Docker and orchestration platforms like Agno, I helped build a scalable testing pipeline that leveraged LangMem for memory persistence. I also participated in design reviews and agile sprint cycles, gaining hands-on experience in cross-functional development environments.
        </p>
        <div style={{ marginTop: 8, marginBottom: 4, fontWeight: 500 }}>Key Contributions:</div>
        <ul style={{ marginTop: 0, marginBottom: 8 }}>
          <li>Integrated vector databases, knowledge graphs, and LLMs into agentic AI pipelines</li>
          <li>Supported infrastructure for memory-driven agents using LangMem and Docker</li>
          <li>Contributed to system-level design, evaluation, and agile development workflows</li>
        </ul>
        <div style={{ fontSize: "0.98rem", color: "#444" }}>
          <strong>Technologies:</strong> PostgreSQL · pgvector · Neo4j · GPT-4 · Docker · LangMem · Agno · REST APIs
        </div>
      </section>

      {/* Founder & Entrepreneur */}
      <section>
        <h2 style={{ fontSize: "1.15rem", margin: 0, fontWeight: 600 }}>Founder & Entrepreneur</h2>
        <div style={{ color: "#555", marginBottom: 2 }}>
          610Street Style Shoes — Royersford, PA · Self-employed
        </div>
        <div style={{ color: "#888", marginBottom: 12 }}>
          April 2021 – August 2023
        </div>
        <p>
          I launched and ran a profitable sneaker reselling business, focused on market-driven buying and selling strategies. By tracking market trends and resale value fluctuations, I created a repeatable process to optimize profit margins and increase inventory turnover.
        </p>
        <p>
          I handled all aspects of the business independently, including sourcing products, evaluating prices, managing inventory, and optimizing timing for maximum returns. I continually refined pricing and purchasing strategies based on performance data.
        </p>
        <div style={{ marginTop: 8, marginBottom: 4, fontWeight: 500 }}>Key Contributions:</div>
        <ul style={{ marginTop: 0, marginBottom: 8 }}>
          <li>Built a profitable resale business from scratch, generating consistent four-figure income</li>
          <li>Managed product sourcing, price appraisal, and sales strategy based on trend analysis</li>
          <li>Developed repeatable systems for inventory turnover and demand forecasting</li>
        </ul>
        <div style={{ fontSize: "0.98rem", color: "#444" }}>
          <strong>Skills Applied:</strong> Entrepreneurship · Market analysis · Inventory management · Data-driven decision making
        </div>
      </section>
    </div>
  );
}