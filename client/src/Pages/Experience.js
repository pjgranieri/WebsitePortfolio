import React from "react";

const experiences = [
  {
    title: "Industry Project Contributor",
    subtitle: "OpenEBS/Mayastor",
    company: "Microsoft Industry Project",
    location: "University of Pittsburgh",
    date: "Aug 2025 - Dec 2025",
    description: [
      "Selected to contribute to OpenEBS Mayastor, a CNCF cloud-native storage project for Kubernetes. Designed and implemented a Prometheus exporter to expose node status metrics, enhancing observability across distributed storage clusters.",
      "Built and managed local Kubernetes clusters using Kind, Docker, and kubectl. Deployed stateful and stateless workloads while exploring CI/CD pipelines with GitHub Actions and Helm chart management."
    ],
    highlights: [
      "Designed Prometheus exporter to expose node health metrics for distributed Kubernetes storage",
      "Researched Mayastor's two-tier architecture: RESTful control plane and async Rust I/O data plane",
      "Deployed and scaled Kubernetes workloads using kubectl, Helm, and declarative YAML manifests",
      "Delivered weekly progress reports and technical documentation to Microsoft mentors"
    ],
    technologies: ["Kubernetes", "Docker", "Rust", "Go", "Prometheus", "Grafana", "Helm", "GitHub Actions"],
  },
  {
    title: "Teaching Assistant",
    subtitle: "ECE 1140: Systems and Project Engineering",
    company: "University of Pittsburgh",
    location: "Pittsburgh, PA",
    date: "Aug 2025 - Present",
    description: [
      "Mentor 60+ students through full-stack software and systems engineering projects, guiding teams from requirements gathering through deployment. Teach Agile/Scrum methodologies, software architecture patterns, and industry-standard tooling.",
      "Evaluate student deliverables including IEEE 830 SRS, IEEE 1016 SDD, and IEEE 829 Test Plans. Conduct code reviews and provide feedback on testing strategies and architecture decisions."
    ],
    highlights: [
      "Coached teams on software architecture, design patterns, and verification/validation strategies",
      "Evaluated technical implementations across requirements, design, testing, and deployment phases",
      "Reinforced Agile practices using GitHub workflows, Jira Scrum boards, and sprint retrospectives",
      "Mentored students on professional development practices including documentation and collaboration"
    ],
    technologies: ["Agile/Scrum", "Software Architecture", "Code Review", "TDD", "UML", "Technical Mentorship"],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "AI/ML Platform Development",
    company: "Sogeti (Capgemini)",
    location: "Dallas, TX",
    date: "Jun 2025 - Jul 2025",
    description: [
      "Developed an agentic AI platform integrating PostgreSQL with pgvector, Neo4j knowledge graphs, and OpenAI GPT-4 to automate QA workflows and reduce testing time by 20-30%.",
      "Architected backend services using FastAPI to connect AI agents with React frontends. Implemented RAG pipelines combining vector embeddings and graph relationships for enhanced context awareness."
    ],
    highlights: [
      "Built agentic AI system using Agno framework, reducing QA cycle time by 20-30%",
      "Designed PostgreSQL + pgvector schemas and Neo4j knowledge graphs for semantic search",
      "Developed FastAPI backend services and integrated qTest REST APIs for enterprise workflows",
      "Implemented RAG pipelines with LangMem for persistent agent memory",
      "Containerized infrastructure with Docker on Azure, establishing CI/CD via GitHub Actions"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Neo4j", "GPT-4", "Docker", "Azure", "LangChain"],
    certifications: ["Neo4j Fundamentals", "Neo4j & LLM Fundamentals", "Building Knowledge Graphs with LLMs"],
  },
  {
    title: "Founder & Entrepreneur",
    subtitle: "E-Commerce & Market Analysis",
    company: "610Street Style Shoes",
    location: "Royersford, PA",
    date: "Apr 2021 - Aug 2023",
    description: [
      "Founded and operated a profitable sneaker resale business, generating consistent four-figure income through data-driven market analysis and inventory optimization.",
      "Tracked market trends, seasonal demand cycles, and pricing fluctuations to build predictive models for buy-low/sell-high strategies. Managed all aspects of operations independently."
    ],
    highlights: [
      "Built profitable resale business from scratch with data-driven pricing strategies",
      "Analyzed market trends and competitor pricing to optimize timing and maximize returns",
      "Managed end-to-end operations: sourcing, authentication, valuation, and sales",
      "Developed systematic approaches to inventory tracking and capital efficiency"
    ],
    technologies: ["Market Analysis", "Data-Driven Decisions", "Inventory Management", "Financial Strategy"],
  },
];

export default function Experience() {
  return (
    <div className="page">
      <div className="container">
        {/* Page Header */}
        <section className="section">
          <div className="section-header">
            <span className="section-label">Professional Experience</span>
            <h1>Where I've Worked</h1>
            <p className="text-secondary mt-md" style={{ maxWidth: 600 }}>
              From cloud-native infrastructure to agentic AI platforms,
              my experience spans the full software development lifecycle.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="timeline stagger-in">
            {experiences.map((exp, index) => (
              <article key={index} className="timeline-item">
                <span className="timeline-date">{exp.date}</span>
                <h2 className="timeline-title">{exp.title}</h2>
                <p className="timeline-company">
                  {exp.company} {exp.subtitle && <span className="text-muted">/ {exp.subtitle}</span>}
                  <br />
                  <span className="text-muted" style={{ fontSize: '0.875rem' }}>{exp.location}</span>
                </p>

                <div className="timeline-content">
                  {exp.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                  <h4 className="mt-lg mb-md" style={{ color: 'var(--color-text)' }}>Key Contributions</h4>
                  <ul>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>

                  {exp.certifications && (
                    <p className="mt-lg text-muted" style={{ fontSize: '0.875rem' }}>
                      <strong className="text-accent">Certifications:</strong> {exp.certifications.join(' · ')}
                    </p>
                  )}
                </div>

                <div className="timeline-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
