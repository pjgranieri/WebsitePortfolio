import React from "react";

export default function Experience() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 32 }}>Experience</h1>

      {/* Microsoft Industry Project */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.15rem", margin: 0, fontWeight: 600 }}>Industry Project Contributor – OpenEBS/Mayastor</h2>
        <div style={{ color: "#555", marginBottom: 2 }}>
          Microsoft Industry Project — University of Pittsburgh · Remote
        </div>
        <div style={{ color: "#888", marginBottom: 12 }}>
          August 2025 – December 2025
        </div>
        <p>
          Selected to contribute to OpenEBS Mayastor, a CNCF cloud-native storage project for Kubernetes. Designed and implemented a Prometheus exporter to expose node status metrics, enhancing observability across distributed storage clusters. Conducted deep technical research on Mayastor's architecture, documenting control plane microservices, Rust-based data plane engines, and NVMe-oF integration.
        </p>
        <p>
          Built and managed local Kubernetes clusters using Kind, Docker, and kubectl. Deployed stateful and stateless workloads to reinforce core concepts including pods, deployments, services, and daemon sets. Explored CI/CD pipelines with GitHub Actions and Helm chart management, aligning contributions with open-source best practices and CNCF governance standards.
        </p>
        <div style={{ marginTop: 8, marginBottom: 4, fontWeight: 500 }}>Key Contributions:</div>
        <ul style={{ marginTop: 0, marginBottom: 8 }}>
          <li>Designed Prometheus exporter to expose node health metrics for distributed Kubernetes storage</li>
          <li>Researched Mayastor's two-tier architecture: RESTful control plane and async Rust I/O data plane</li>
          <li>Deployed and scaled Kubernetes workloads using kubectl, Helm, and declarative YAML manifests</li>
          <li>Delivered weekly progress reports and technical documentation to Microsoft mentors</li>
        </ul>
        <div style={{ fontSize: "0.98rem", color: "#444" }}>
          <strong>Technologies:</strong> Kubernetes · Docker · Rust · Go · Prometheus · Grafana · Helm · NVMe-oF · GitHub Actions
        </div>
      </section>

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
          Mentor 60+ students through full-stack software and systems engineering projects, guiding teams from requirements gathering through deployment. Teach Agile/Scrum methodologies, software architecture patterns, and industry-standard tooling including GitHub for version control and Jira for sprint planning. Provide technical guidance on UML system modeling, design patterns, test-driven development, and API design.
        </p>
        <p>
          Evaluate student deliverables including IEEE 830 Software Requirements Specifications, IEEE 1016 Software Design Documents, and IEEE 829 Test Plans. Conduct code reviews, assess system architecture decisions, and provide feedback on testing strategies, configuration management, and risk mitigation approaches.
        </p>
        <div style={{ marginTop: 8, marginBottom: 4, fontWeight: 500 }}>Key Contributions:</div>
        <ul style={{ marginTop: 0, marginBottom: 8 }}>
          <li>Coached teams on software architecture, design patterns, and verification/validation strategies</li>
          <li>Evaluated technical implementations across requirements, design, testing, and deployment phases</li>
          <li>Reinforced Agile practices using GitHub workflows, Jira Scrum boards, and sprint retrospectives</li>
          <li>Mentored students on professional development practices including documentation and collaboration</li>
        </ul>
        <div style={{ fontSize: "0.98rem", color: "#444" }}>
          <strong>Skills Reinforced:</strong> Software architecture · Design patterns · Agile/Scrum · Code review · Testing strategies · Technical mentorship
        </div>
      </section>

      {/* Software Engineer Intern */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.15rem", margin: 0, fontWeight: 600 }}>Software Engineer Intern</h2>
        <div style={{ color: "#555", marginBottom: 2 }}>
          Sogeti (Capgemini) — Dallas, TX · On-site
        </div>
        <div style={{ color: "#888", marginBottom: 12 }}>
          June 2025 – July 2025
        </div>
        <p>
          Developed an agentic AI platform integrating PostgreSQL with pgvector, Neo4j knowledge graphs, and OpenAI GPT-4 to automate QA workflows and reduce testing time by 20-30%. Built multi-agent systems that refined raw requirements into structured user stories, validated test coverage, and generated intelligent test plans with full traceability.
        </p>
        <p>
          Architected backend services using FastAPI to connect AI agents with React frontends. Implemented retrieval-augmented generation (RAG) pipelines combining vector embeddings and graph relationships for enhanced context awareness. Designed database schemas supporting requirements, test cases, defects, and embeddings, while integrating qTest APIs for enterprise Agile workflows.
        </p>
        <div style={{ marginTop: 8, marginBottom: 4, fontWeight: 500 }}>Key Contributions:</div>
        <ul style={{ marginTop: 0, marginBottom: 8 }}>
          <li>Built agentic AI system using Agno framework, reducing QA cycle time by 20-30% and improving coverage</li>
          <li>Designed PostgreSQL + pgvector schemas and Neo4j knowledge graphs for semantic search and traceability</li>
          <li>Developed FastAPI backend services and integrated qTest REST APIs for enterprise testing workflows</li>
          <li>Implemented RAG pipelines with LangMem for persistent agent memory and context-aware reasoning</li>
          <li>Containerized infrastructure with Docker on Azure, establishing CI/CD workflows via GitHub Actions</li>
        </ul>
        <div style={{ fontSize: "0.98rem", color: "#444" }}>
          <strong>Technologies:</strong> Python · FastAPI · PostgreSQL · pgvector · Neo4j · GPT-4 · Docker · Azure · Agno · LangChain · REST APIs
        </div>
        <div style={{ fontSize: "0.95rem", color: "#666", marginTop: 8 }}>
          <strong>Certifications:</strong> Neo4j Fundamentals · Neo4j & LLM Fundamentals · Building Knowledge Graphs with LLMs
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
          Founded and operated a profitable sneaker resale business, generating consistent four-figure income through data-driven market analysis and inventory optimization. Developed repeatable systems for demand forecasting, price appraisal, and strategic timing to maximize profit margins and inventory turnover.
        </p>
        <p>
          Tracked market trends, seasonal demand cycles, and pricing fluctuations to build predictive models for buy-low/sell-high strategies. Managed all aspects of operations independently including product sourcing, authentication, pricing strategy, sales execution, and customer relationship management.
        </p>
        <div style={{ marginTop: 8, marginBottom: 4, fontWeight: 500 }}>Key Contributions:</div>
        <ul style={{ marginTop: 0, marginBottom: 8 }}>
          <li>Built profitable resale business from scratch with data-driven pricing and demand forecasting strategies</li>
          <li>Analyzed market trends and competitor pricing to optimize timing and maximize returns on inventory</li>
          <li>Managed end-to-end operations: sourcing, authentication, valuation, sales, and customer service</li>
          <li>Developed systematic approaches to inventory tracking and capital efficiency optimization</li>
        </ul>
        <div style={{ fontSize: "0.98rem", color: "#444" }}>
          <strong>Skills Applied:</strong> Entrepreneurship · Market analysis · Data-driven decision making · Inventory management · Financial strategy
        </div>
      </section>
    </div>
  );
}