import React from "react";

const projects = [
  {
    title: "Backtesting Engine",
    description:
      "A robust backtesting engine for algorithmic trading strategies, featuring historical data analysis and performance metrics.",
    link: "#",
  },
  {
    title: "Space Invaders Bopit",
    description:
      "A modern twist on the classic Space Invaders game, integrating unique controls and interactive gameplay.",
    link: "#",
  },
  {
    title: "Train Control",
    description:
      "A simulation tool for managing and optimizing train schedules and operations.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        fontFamily: "sans-serif",
        padding: 24,
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: 32 }}>Projects</h1>

      {/* Completed Projects */}
      <h2 style={{ fontSize: "1.2rem", margin: "32px 0 16px" }}> Completed</h2>

      {/* Train Control Simulation System */}
      <section style={{ marginBottom: 40 }}>
        <h3
          style={{
            fontSize: "1.08rem",
            margin: 0,
            fontWeight: 600,
          }}
        >
          Train Control Simulation System
        </h3>
        <p style={{ margin: "8px 0 16px" }}>
          A modular simulation platform that integrates Train, Wayside, and Central
          Traffic Control (CTC) components. Features a real-time PyQt5 frontend with
          interactive maps, fault-tolerant backend logic, and multi-line support.
        </p>
        <a
          href="/projects/train-control"
          style={{
            textDecoration: "underline",
            color: "#007bff",
          }}
        >
          [View Project →]
        </a>
      </section>

      {/* Backtesting Engine for Algorithmic Trading */}
      <section style={{ marginBottom: 40 }}>
        <h3
          style={{
            fontSize: "1.08rem",
            margin: 0,
            fontWeight: 600,
          }}
        >
          Backtesting Engine for Algorithmic Trading
        </h3>
        <p style={{ margin: "8px 0 16px" }}>
          A strategy-based trading simulator that evaluates historical performance
          using financial indicators like RSI and Bollinger Bands. Includes batch
          testing, equity curve plots, and Sharpe/Drawdown analysis.
        </p>
        <a
          href="/projects/backtesting-engine"
          style={{
            textDecoration: "underline",
            color: "#007bff",
          }}
        >
          [View Project →]
        </a>
      </section>

      {/* Space Invaders “Bop-It!” Game */}
      <section style={{ marginBottom: 40 }}>
        <h3
          style={{
            fontSize: "1.08rem",
            margin: 0,
            fontWeight: 600,
          }}
        >
           Space Invaders “Bop-It!” Game
        </h3>
        <p style={{ margin: "8px 0 16px" }}>
          An embedded reaction game built on an ATMega328P with a custom PCB,
          real-time input controls, LED/audio feedback, and LCD-based scoring logic.
          Designed and fabricated hardware from scratch.
        </p>
        <a
          href="/projects/space-invaders-bopit"
          style={{
            textDecoration: "underline",
            color: "#007bff",
          }}
        >
          [View Project →]
        </a>
      </section>

      {/* In Progress Projects */}
      <h2 style={{ fontSize: "1.2rem", margin: "32px 0 16px" }}>In Progress</h2>

      {/* Portfolio Website */}
      <section style={{ marginBottom: 40 }}>
        <h3
          style={{
            fontSize: "1.08rem",
            margin: 0,
            fontWeight: 600,
          }}
        >
          Portfolio Website (In Progress)
        </h3>
        <p style={{ margin: "8px 0 16px" }}>
          A personal portfolio site built with React and a simple backend to showcase
          my projects, experience, and weekly blog updates. Features an interactive
          contact form, project breakdowns, and responsive design optimized for
          desktop and mobile.
        </p>
        {/* Uncomment below if you want to link to the portfolio project page */}
        {/* <Link to="/projects/portfolio-website" style={{ textDecoration: "underline", color: "#007bff" }}>
          [View Project →]
        </Link> */}
      </section>

      {/* AI Email & Calendar Assistant */}
      <section style={{ marginBottom: 40 }}>
        <h3
          style={{
            fontSize: "1.08rem",
            margin: 0,
            fontWeight: 600,
          }}
        >
          AI Email & Calendar Assistant (In Progress)
        </h3>
        <p style={{ margin: "8px 0 16px" }}>
          A personal AI assistant designed to read, summarize, and prioritize emails,
          with future integration to help schedule events directly into a user’s
          calendar. Aims to streamline daily planning with natural language
          understanding, multi-account support, and cross-platform syncing (Google,
          Apple, Outlook).
        </p>
        {/* <Link to="/projects/ai-email-calendar-assistant" style={{ textDecoration: "underline", color: "#007bff" }}>
          [View Project →]
        </Link> */}
      </section>
    </div>
  );
}