import React from "react";

export default function Careerly() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "1.7rem", marginBottom: 8 }}>Careerly - AI-Powered Career Development Platform</h1>
      <div style={{ color: "#888", marginBottom: 8 }}>
        Oct 2025 – Present<br />
        Independent Full-Stack SaaS Project
      </div>
      <div style={{ marginBottom: 16 }}>
        <a href="https://www.usecareerly.com" target="_blank" rel="noopener noreferrer">
          Live Site
        </a>
      </div>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Overview</h2>
      <p>
        Careerly is a production-ready, full-stack SaaS platform that leverages cutting-edge AI to help job seekers optimize resumes, practice interviews, track applications, and accelerate career growth. The platform serves as a comprehensive career development toolkit with credit-based monetization, trial and premium tiers, and seamless integration with industry-leading services.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>System Architecture</h2>
      <p>Built on modern cloud infrastructure with clean separation between frontend, backend, and external services:</p>
      <ul>
        <li><strong>Frontend:</strong> React 19 application with 20+ pages deployed on Vercel CDN</li>
        <li><strong>Backend:</strong> FastAPI server with 12 API routes and 18+ service modules deployed on Railway</li>
        <li><strong>Database:</strong> PostgreSQL via Supabase with 18+ tables managing user data, resumes, interviews, and analytics</li>
        <li><strong>AI Integration:</strong> OpenAI GPT-5 and GPT-5-mini for intelligent content generation and evaluation</li>
        <li><strong>Payments:</strong> Stripe for subscription management and checkout flows</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Core Features</h2>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>1. AI-Powered Resume Optimization</h3>
      <p>Built sophisticated three-stage pipeline transforming raw project descriptions into ATS-optimized professional resumes:</p>
      <ul>
        <li><strong>Master Resume Management:</strong> JSON-based storage of all experiences, projects, skills, and certifications with guided form editor</li>
        <li><strong>Job-Specific Tailoring:</strong> AI analyzes job descriptions and optimizes resume content for keyword alignment and ATS compatibility</li>
        <li><strong>Multi-Stage Generation:</strong> AI content generation → LaTeX template rendering → PDF compilation</li>
        <li><strong>Professional Output:</strong> High-quality PDFs using LaTeX typesetting with automated Supabase storage</li>
        <li><strong>Version Tracking:</strong> Complete resume history with ability to link specific versions to job applications</li>
      </ul>
      <p><em>Technical Achievement: End-to-end resume generation in under 10 seconds from upload to downloadable PDF.</em></p>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>2. Mock Interview System with Real-Time AI Evaluation</h3>
      <p>Architected comprehensive interview practice platform using Finite State Machine design pattern:</p>
      <ul>
        <li><strong>Interview Types:</strong> Behavioral (STAR method) and technical interviews customized by company, role, and seniority level</li>
        <li><strong>Dynamic Question Generation:</strong> 5-8 adaptive questions per session based on role requirements</li>
        <li><strong>State Machine Flow:</strong> Deterministic interview progression managing question delivery, answer collection, and evaluation</li>
        <li><strong>Real-Time Scoring:</strong> AI analyzes responses and provides immediate scores (0-100) with detailed feedback</li>
        <li><strong>Adaptive Questioning:</strong> Follow-up questions generated based on initial response quality</li>
        <li><strong>Comprehensive Feedback:</strong> Strengths/weaknesses analysis with specific improvement suggestions and hiring recommendations</li>
        <li><strong>Session History:</strong> Track performance trends across multiple practice sessions</li>
      </ul>
      <p><em>Technical Achievement: Real-time AI evaluation with sub-2-second response times maintaining conversational flow.</em></p>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>3. Job Application Tracking Pipeline</h3>
      <p>Developed full-featured application management system with end-to-end workflow tracking:</p>
      <ul>
        <li><strong>Status Pipeline:</strong> Wishlist → Applied → Phone Screen → Interview → Offer/Rejected with automatic timestamping</li>
        <li><strong>Job Description Storage:</strong> Link job postings to tailored resumes with complete application context</li>
        <li><strong>Resume Association:</strong> Connect optimized PDFs with specific applications for version control</li>
        <li><strong>Search & Discovery:</strong> Browse and track opportunities with filtering and sorting capabilities</li>
        <li><strong>Progress Analytics:</strong> Visual dashboards showing application funnel metrics</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>4. Secure Authentication & Credit Management</h3>
      <p>Implemented robust authentication flow with transactional credit system ensuring data integrity:</p>
      <ul>
        <li><strong>Google OAuth Integration:</strong> Seamless login via Supabase Auth with JWT token management</li>
        <li><strong>Session Persistence:</strong> Automatic token refresh and secure storage across browser sessions</li>
        <li><strong>Credit System:</strong> Trial tier (5 AI resumes, 5 copilot sessions, 3 mock interviews) vs Premium tier (unlimited access)</li>
        <li><strong>Rollback Protection:</strong> Automatic credit restoration on operation failures preventing double-charging</li>
        <li><strong>Real-Time Tracking:</strong> Live credit balance display across platform with usage analytics</li>
      </ul>
      <p><em>Technical Achievement: 100% transactional integrity with atomic operations and automatic rollback on failures.</em></p>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>5. AI Copilot & Quiz Practice</h3>
      <p><strong>Conversational AI Assistant:</strong></p>
      <ul>
        <li>Context-aware career guidance powered by GPT-5</li>
        <li>Interview preparation with practice Q&A and personalized feedback</li>
        <li>Resume improvement suggestions with content refinement</li>
        <li>Persistent chat history with thread management</li>
      </ul>
      <p><strong>Quiz Practice Engine:</strong></p>
      <ul>
        <li>132KB+ curated question bank across technical and behavioral domains</li>
        <li>Real-time scoring with immediate feedback and explanations</li>
        <li>Performance analytics tracking improvement over time</li>
        <li>Progress visualization across topic areas</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>6. Goal Tracking & Gamification</h3>
      <p>Built productivity system encouraging consistent platform engagement:</p>
      <ul>
        <li><strong>Daily Goal Setting:</strong> Configurable targets for applications, practice sessions, and skill development</li>
        <li><strong>Streak Calculation:</strong> Track consecutive days of activity with calendar visualization</li>
        <li><strong>Activity Logging:</strong> Automatic recording of platform usage across all features</li>
        <li><strong>Weekly Summaries:</strong> Performance dashboards with progress analytics and insights</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Technical Architecture</h2>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Backend Architecture</h3>
      <p><strong>Modular Service Layer (18+ service modules):</strong></p>
      <ul>
        <li>Designed clean separation between routes (HTTP handling), services (business logic), utilities (helpers), and models (validation)</li>
        <li>Each service module handles specific domain: AI optimization, interview management, quiz scoring, goal tracking</li>
        <li>Enables independent testing, reusability across routes, and simplified debugging</li>
      </ul>
      <p><strong>API Design (12 route handlers):</strong></p>
      <ul>
        <li>RESTful endpoints for resume operations, job tracking, mock interviews, quiz practice, goals, copilot chat, and payments</li>
        <li>Consistent error responses with proper HTTP status codes</li>
        <li>Request/response validation using Pydantic schemas</li>
      </ul>
      <p><strong>Middleware Stack:</strong></p>
      <ul>
        <li>Rate limiting with configurable per-route limits</li>
        <li>CORS with origin whitelisting</li>
        <li>Security headers (HSTS, CSP, X-Frame-Options)</li>
        <li>JWT authentication on all protected endpoints</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Frontend Architecture</h3>
      <p><strong>Component Library (20+ reusable components):</strong></p>
      <ul>
        <li>Layout components: Navigation, sidebar, dashboard grid, top bar with credit display</li>
        <li>Feature components: Resume editor, PDF viewer, interview interface, chat interface, streak widgets</li>
        <li>UI components: Notifications, modals, glassmorphism cards, animated backgrounds</li>
      </ul>
      <p><strong>State Management:</strong></p>
      <ul>
        <li>Global authentication context managing OAuth flow and JWT lifecycle</li>
        <li>API client with request/response interceptors for automatic token attachment and error handling</li>
        <li>Session persistence across page reloads</li>
      </ul>
      <p><strong>Routing (20+ pages):</strong></p>
      <ul>
        <li>Landing, dashboard, resume generation, job tracking, interview practice, quiz system, progress analytics, payment flows</li>
        <li>Protected routes requiring authentication</li>
        <li>Dynamic routing for interview sessions and application details</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Database Schema</h3>
      <p><strong>Core Tables (18+ migrations):</strong></p>
      <ul>
        <li>User profiles with tier, credits, and Stripe customer ID</li>
        <li>Job applications with status pipeline and resume linking</li>
        <li>Mock interview sessions with comprehensive scoring</li>
        <li>Question/answer records with detailed feedback</li>
        <li>User resumes with JSON-based storage and versioning</li>
        <li>Quiz attempts with performance tracking</li>
        <li>Daily activities for streak calculation</li>
      </ul>
      <p><strong>Relationships:</strong></p>
      <ul>
        <li>One-to-many relationships between users and all major entities</li>
        <li>Proper foreign key constraints and cascading deletes</li>
        <li>Optimized indexes for common query patterns</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>External Integrations</h3>
      <p><strong>OpenAI Integration:</strong></p>
      <ul>
        <li>GPT-5 for complex tasks: resume optimization, interview feedback, company research</li>
        <li>GPT-5-mini for simple tasks: chat responses, quick evaluations</li>
        <li>Retry logic and error handling for API reliability</li>
      </ul>
      <p><strong>Supabase Integration:</strong></p>
      <ul>
        <li>PostgreSQL database with automatic backups</li>
        <li>Google OAuth provider with JWT management</li>
        <li>S3-compatible storage for resume PDFs with versioning</li>
        <li>Real-time capabilities for future features</li>
      </ul>
      <p><strong>Stripe Integration:</strong></p>
      <ul>
        <li>Checkout session creation with customer portal access</li>
        <li>Webhook handling for subscription lifecycle: activations, cancellations, payment failures</li>
        <li>Seamless trial to premium transitions</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Deployment & Infrastructure</h3>
      <p><strong>Frontend (Vercel):</strong></p>
      <ul>
        <li>Global CDN for optimal performance</li>
        <li>Automatic SSL certificate provisioning</li>
        <li>Environment-based configuration</li>
        <li>Build optimization and caching</li>
      </ul>
      <p><strong>Backend (Railway):</strong></p>
      <ul>
        <li>NIXPACKS builder with automatic Python detection</li>
        <li>LaTeX installation for PDF generation</li>
        <li>Health monitoring and automatic restarts</li>
        <li>Container orchestration with resource limits</li>
      </ul>
      <p><strong>Production Features:</strong></p>
      <ul>
        <li>Automated deployments from Git</li>
        <li>Environment variable management</li>
        <li>Logging and monitoring</li>
        <li>Rollback capabilities</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Technical Highlights</h2>
      <ol>
        <li><strong>Three-Stage Resume Pipeline:</strong> Intelligent content generation with AI → professional LaTeX templating → high-quality PDF compilation with automated storage</li>
        <li><strong>FSM-Based Interview System:</strong> Deterministic state machine managing complex interview flows with adaptive questioning and real-time evaluation</li>
        <li><strong>Transactional Credit System:</strong> Atomic operations with automatic rollback preventing inconsistent state and user overcharging</li>
        <li><strong>Clean Architecture:</strong> Modular service layer with clear separation of concerns enabling independent testing and maintenance</li>
        <li><strong>Secure Authentication:</strong> OAuth flow with JWT token management, automatic refresh, and comprehensive error handling</li>
        <li><strong>Production Infrastructure:</strong> Cloud deployment with CDN, container orchestration, health monitoring, and automated scaling</li>
      </ol>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Performance & Security</h2>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Performance Optimizations</h3>
      <ul>
        <li>Sub-10-second resume generation from upload to PDF</li>
        <li>Sub-2-second AI response times during interviews</li>
        <li>Session caching for reduced database queries</li>
        <li>CDN distribution for global low-latency access</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Security Implementations</h3>
      <ul>
        <li>JWT-based authentication with token verification</li>
        <li>Security headers preventing common web vulnerabilities</li>
        <li>Input validation on all user-submitted data</li>
        <li>Rate limiting preventing abuse</li>
        <li>CORS configuration with strict origin control</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Tech Stack</h2>
      <p>
        <strong>Frontend:</strong> React 19 · React Router · Axios · Supabase JS<br />
        <strong>Backend:</strong> FastAPI · Uvicorn · Pydantic · OpenAI SDK · Stripe SDK<br />
        <strong>Database:</strong> PostgreSQL · Supabase (BaaS)<br />
        <strong>Document Processing:</strong> PyPDF2 · python-docx · PyLaTeX · texlive<br />
        <strong>Infrastructure:</strong> Vercel · Railway · Docker<br />
        <strong>Testing:</strong> pytest · React Testing Library
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Results & Impact</h2>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Platform Capabilities</h3>
      <ul>
        <li>Complete resume optimization workflow in under 10 seconds</li>
        <li>Real-time mock interview evaluation with conversational AI</li>
        <li>100% credit transaction integrity with rollback protection</li>
        <li>Seamless OAuth authentication with session management</li>
        <li>Sub-200ms average API response times</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Technical Scale</h3>
      <ul>
        <li>20+ frontend pages with responsive design</li>
        <li>12 API routes with 18+ backend service modules</li>
        <li>18+ database tables with complex relationships</li>
        <li>132KB+ curated question bank</li>
        <li>Multi-stage AI pipeline with error recovery</li>
      </ul>
    </div>
  );
}
