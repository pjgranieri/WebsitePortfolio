import React from "react";

const experiences = [
  {
    title: "Teaching Assistant",
    subtitle: "ECE 0302: Data Structures and Algorithms",
    company: "University of Pittsburgh",
    location: "Pittsburgh, PA",
    date: "Jan 2026 - Present",
    description: [
      "Grade programming assignments and projects focused on implementing core data structures (stacks, queues, trees, heaps, hash tables) and algorithms (sorting, searching, recursion) in C++.",
      "Conduct weekly office hours to debug student code, explain algorithmic concepts, and guide students through problem-solving approaches while supporting understanding of algorithm complexity analysis and memory management."
    ],
    highlights: [
      "Evaluated student implementations of fundamental data structures and algorithms in C++",
      "Conducted weekly office hours to assist students with debugging and algorithmic problem-solving",
      "Guided students through complexity analysis (Big-O notation) and efficient algorithm design",
      "Reinforced best practices in memory management, pointer usage, and C++ implementation strategies"
    ],
    technologies: ["C++", "Data Structures", "Algorithms", "Algorithm Analysis", "Memory Management", "Teaching"],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Microsoft Industry Project - OpenEBS Mayastor",
    company: "Microsoft",
    location: "Pittsburgh, PA (Hybrid)",
    date: "Sep 2025 - Present",
    description: [
      "Contributing to OpenEBS Mayastor, a CNCF cloud-native storage engine for Kubernetes, implementing Prometheus metrics and observability enhancements to improve operational visibility for distributed storage systems.",
      "Developed features in Go and Rust within a production-grade codebase, navigating control-plane/data-plane architecture, RESTful APIs, and container-orchestration patterns used by hundreds of global contributors."
    ],
    highlights: [
      "Authored OpenEBS Enhancement Proposal (OEP-4111) for node-status metrics architecture, receiving maintainer approval for implementation",
      "Designed and implemented Prometheus exporter to expose node health metrics for distributed Kubernetes storage",
      "Developed features in Go and Rust navigating production-grade control-plane/data-plane architecture",
      "Collaborated with Microsoft engineers through weekly technical reviews on distributed systems design",
      "Built expertise in formal documentation processes (OEPs) and enterprise-grade open-source contribution workflows"
    ],
    technologies: ["Kubernetes", "Go", "Rust", "Prometheus", "Docker", "Distributed Systems", "Cloud-Native Storage", "RESTful APIs"],
  },
  {
    title: "Teaching Assistant",
    subtitle: "ECE 1140: Systems and Project Engineering",
    company: "University of Pittsburgh",
    location: "Pittsburgh, PA",
    date: "Aug 2025 - Dec 2025",
    description: [
      "Mentored student teams through the full software/systems development lifecycle: requirements, architecture, sprint planning, integration, and testing.",
      "Hosted iteration and design reviews to evaluate technical implementations, software architecture, and documentation, providing feedback to improve quality and alignment with project requirements."
    ],
    highlights: [
      "Coached teams on software architecture, design patterns, and verification/validation strategies",
      "Evaluated technical implementations across requirements, design, testing, and deployment phases",
      "Promoted agile practices using GitHub workflows and Jira, reinforcing real-world readiness",
      "Mentored students on professional development practices including documentation and team collaboration"
    ],
    technologies: ["Agile/Scrum", "Software Architecture", "Code Review", "GitHub", "Jira", "Technical Mentorship", "TDD"],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "AI/ML Platform Development",
    company: "Sogeti (Capgemini)",
    location: "Dallas, TX",
    date: "Jun 2025 - Aug 2025",
    description: [
      "Pioneered an agentic AI platform with a team of 3 to automate QA workflows, integrating vector databases (PostgreSQL + pgvector), knowledge graphs (Neo4j), and GPT-4, improving efficiency by 30% and saving hundreds of hours of manual labor.",
      "Designed a solution to automate requirements and user story generation, eliminating manual creation and linking processes across the QA lifecycle."
    ],
    highlights: [
      "Built agentic AI system using Agno framework, improving QA efficiency by 30%",
      "Designed PostgreSQL + pgvector schemas and Neo4j knowledge graphs for semantic search and RAG pipelines",
      "Developed FastAPI backend services and integrated qTest REST APIs for enterprise workflows",
      "Implemented autonomous agent pipelines with Docker and API integration using LangMem for memory management",
      "Followed agile practices with iterative development, sprint planning, and continuous integration"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Neo4j", "GPT-4", "Docker", "Azure", "LangChain", "Agno"],
    certifications: ["Neo4j Fundamentals", "Neo4j & LLM Fundamentals", "Building Knowledge Graphs with LLMs"],
  },
  {
    title: "Founder & Entrepreneur",
    subtitle: "E-Commerce & Market Analysis",
    company: "610Street Style Shoes",
    location: "Royersford, PA",
    date: "Apr 2021 - Aug 2023",
    description: [
      "Ran a profitable resale business for 2+ years, buying and selling sneakers based on market timing and demand trends.",
      "Tracked market trends, seasonal demand cycles, and pricing fluctuations to build strategies for buy-low/sell-high execution. Managed all aspects of operations independently."
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
