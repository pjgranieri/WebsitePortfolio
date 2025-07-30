import React from "react";

export default function SpaceInvadersBopit() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "1.7rem", marginBottom: 8 }}>🕹️ Space Invaders "Bop-It!" Game with ATMega328P & Custom PCB</h1>
      <div style={{ color: "#888", marginBottom: 8 }}>
        Mar 2025 – Apr 2025<br />
        University of Pittsburgh | Embedded Systems Project
      </div>
      <div style={{ marginBottom: 16 }}>
        <a href="https://github.com/pjgranieri/SpaceInvaders" target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>
          🔗 GitHub Repo
        </a>
        <a href="https://www.youtube.com/watch?v=FF51uR-_Np4" target="_blank" rel="noopener noreferrer">
          🎥 Video Demo
        </a>
      </div>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🧠 Overview</h2>
      <p>
        This embedded game blends the fast-paced reflex mechanics of Bop-It with the space-themed action of Space Invaders, implemented on an ATMega328P microcontroller. The player is challenged to respond to randomized prompts using three physical inputs — steering wheel, throttle, and fire button — while progressing through increasingly difficult stages governed by finite state machine (FSM) logic.
      </p>
      <p>
        The project features a custom PCB, real-time input processing, audio-visual feedback, and a scoring display, all wrapped in a fully integrated physical enclosure.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>⚙️ Key Features</h2>
      <ul>
        <li>
          <strong>Embedded FSM Gameplay:</strong>
          <ul>
            <li>Randomized commands like "Turn Left", "Throttle Up", "Shoot"</li>
            <li>Timed response system with decreasing reaction windows</li>
            <li>FSM transitions on correct/incorrect inputs</li>
          </ul>
        </li>
        <li>
          <strong>Physical Input Controls:</strong>
          <ul>
            <li>🕹️ Steering Wheel (analog input)</li>
            <li>🚀 Throttle Lever (analog input)</li>
            <li>🔫 Push Button (digital input)</li>
          </ul>
        </li>
        <li>
          <strong>Feedback & Display:</strong>
          <ul>
            <li>LCD screen displays real-time score (target: 99 points)</li>
            <li>DFPlayer Mini module handles game sounds (success, failure)</li>
            <li>Green/red LEDs for success/failure feedback</li>
          </ul>
        </li>
        <li>
          <strong>Robust Hardware Design:</strong>
          <ul>
            <li>Custom PCB (KiCad) with:</li>
            <li style={{ marginLeft: 16 }}>Power regulation (9V input → 5V logic)</li>
            <li style={{ marginLeft: 16 }}>UART/I2C support for serial peripherals</li>
            <li style={{ marginLeft: 16 }}>I/O layout for analog/digital controls</li>
            <li>Enclosure designed in Onshape and built using laser-cut acrylic</li>
          </ul>
        </li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🗂️ Repository Structure</h2>
      <div style={{
        background: "#f6f8fa",
        padding: 12,
        borderRadius: 6,
        fontSize: "0.97rem",
        marginBottom: 16,
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        lineHeight: 1.5
      }}>
SpaceInvaders/
  src/      # Arduino software (FSM logic, input handling)
  pcb/      # KiCad PCB design files
  cad/      # Enclosure design (CAD screenshots, Onshape link)
  docs/     # Final report and documentation
  media/    # Photos and video demo
  README.md
      </div>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🧪 How It Works</h2>
      <ul>
        <li>Players are shown a randomized command on the LCD.</li>
        <li>They respond using the correct physical control:
          <ul>
            <li>Turn the wheel (analog read)</li>
            <li>Push the throttle lever</li>
            <li>Press the fire button</li>
          </ul>
        </li>
        <li>Correct inputs trigger: Green LED, ding sound, and score increment</li>
        <li>Incorrect or delayed inputs result in: Red LED, crash sound, and game reset</li>
        <li>The goal is to reach 99 points without a single mistake.</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🧰 Hardware/Software Integration</h2>
      <ul>
        <li><strong>Microcontroller:</strong> ATMega328P</li>
        <li><strong>Languages:</strong> C++, Arduino</li>
        <li><strong>Protocols:</strong> UART (sound), I2C (LCD), ADC (inputs)</li>
        <li><strong>Tools:</strong> KiCad (PCB), Onshape (CAD), DFPlayer (Audio), Soldering/Prototyping</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>👨‍💻 Team & Roles</h2>
      <ul>
        <li>PJ Granieri — Hardware Design, PCB Fabrication, FSM Logic</li>
        <li>Joshua Krymgold — Software Development</li>
        <li>Aragya Goyal — CAD & Enclosure Fabrication</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🔧 Build Instructions (from GitHub)</h2>
      <ol>
        <li>Upload <code>src/main.ino</code> to ATMega328P or Arduino Uno-compatible board</li>
        <li>Assemble the PCB using KiCad files</li>
        <li>Laser cut/3D print enclosure (optional)</li>
        <li>Load .mp3 sound files to microSD and insert into DFPlayer</li>
        <li>Power the system with regulated 5V (e.g., 9V battery + onboard regulator)</li>
      </ol>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>💡 Implementation Notes</h2>
      <ul>
        <li>Analog inputs sampled at startup to compensate for drift</li>
        <li>AVCC tied to 5V for proper ADC operation</li>
        <li>Manual serial conflict resolution for UART + I2C</li>
        <li>FSM handles timing decay and input validation dynamically</li>
      </ul>
    </div>
  );
}