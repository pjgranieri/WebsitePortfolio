import React from "react";

export default function TrainControl() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "1.7rem", marginBottom: 8 }}>🚆 Train Control Simulation System</h1>
      <div style={{ color: "#888", marginBottom: 8 }}>
        Jan 2025 – Apr 2025<br />
        University of Pittsburgh | Course Project (ECE 1140)
      </div>
      <div style={{ marginBottom: 16 }}>
        <a href="https://github.com/connor-marsh/ECE1140ChooChoo" target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>
          🔗 GitHub Repo
        </a>
        <a href="https://youtu.be/F9jONVVjt_M?t=411" target="_blank" rel="noopener noreferrer">
          🎥 Video Demo
        </a>
      </div>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🧠 Overview</h2>
      <p>
        The Train Control Simulation System is a modular, real-time simulation of a metropolitan railway network built in Python with a PyQt5-based UI. It models the interaction between Train, Wayside, and Central Traffic Control (CTC) subsystems with infrastructure support for multiple lines (Green & Red). The system allows dynamic tracking of block occupancy, authority control, and infrastructure state changes (switches, lights, and crossings).
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>⚙️ Key Features</h2>
      <ul>
        <li>
          <strong>Full Backend Architecture:</strong> Handles routing logic, authority validation, block adjacency, and signal management. Supports switch state transitions, crossing activation, and failure modes like broken rail and power loss.
        </li>
        <li>
          <strong>Real-Time Frontend (PyQt5):</strong> Zoomable, interactive track map with support for clicking blocks or icons to display detailed data. UI includes dropdowns for block selection, line switching, simulation speed, and temperature inputs.
        </li>
        <li>
          <strong>Infrastructure Simulation:</strong> Includes dynamic updates and icon states for:
          <ul>
            <li>🚉 Stations</li>
            <li>🚦 Traffic Lights</li>
            <li>🔀 Switches</li>
            <li>🚧 Railway Crossings</li>
            <li>🚆 Trains</li>
            <li>⚠️ Failure Modes (Circuit, Rail, Power)</li>
          </ul>
        </li>
        <li>
          <strong>Multi-Line Support:</strong> Load and simulate multiple transit lines (Green & Red) via structured Excel files. Each line is visualized independently and supports live switching from the top bar.
        </li>
        <li>
          <strong>Robust Data Input:</strong> Uses .xlsx files with strict schema validation to load track layouts, including attributes like elevation, underground status, speed limits, station data, beacon info, and switch routing.
        </li>
        <li>
          <strong>Failure Simulation & Debugging:</strong> Simulate failures on a per-block basis. Toggle:
          <ul>
            <li>Track Circuit Failure</li>
            <li>Broken Rail</li>
            <li>Power Failure</li>
          </ul>
          View errors live on the map and reset errors system-wide.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🖥️ User Interface Details</h2>
      <ul>
        <li>
          <strong>Top Bar Controls:</strong>
          <ul>
            <li>📂 Import Track Layout</li>
            <li>🟢 Line Selector (Green / Red)</li>
            <li>🧱 Block Selector</li>
            <li>⏱️ 12-Hour Clock</li>
            <li>🐢 Speed Input</li>
            <li>🌡️ Temperature Input (activates heaters)</li>
          </ul>
        </li>
        <li>
          <strong>Center Map:</strong> Interactive QGraphicsView map for selected line. Real-time block occupancy and infrastructure status. Clickable blocks and icons (station, train, switch, light, crossing).
        </li>
        <li>
          <strong>Bottom Panel:</strong>
          <ul>
            <li>Left: Block Attributes (length, speed, elevation, underground, etc.)</li>
            <li>Center: Icon Legend (train, light, station, failure types, etc.)</li>
            <li>Right: Failure Mode Toggles & Infrastructure Info Panel</li>
          </ul>
        </li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>👥 Team & Tools</h2>
      <p>
        Worked in an Agile 6-person team using:<br />
        <strong>GitHub</strong> (version control, branching), <strong>Jira</strong> (sprints, user stories, task management)
      </p>
      <p>
        <strong>Tools & Tech Stack:</strong> Python · PyQt5 · Pandas · Excel<br />
        OOP design patterns · Signal-slot architecture
      </p>
    </div>
  );
}