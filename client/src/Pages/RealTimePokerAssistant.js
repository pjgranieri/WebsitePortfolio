import React from "react";

export default function RealTimePokerAssistant() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "1.7rem", marginBottom: 8 }}>Real-Time Poker Assistant</h1>
      <div style={{ color: "#888", marginBottom: 8 }}>
        Aug 2025 – Dec 2025<br />
        University of Pittsburgh | Senior Capstone (ECE 1896)
      </div>
      <div style={{ marginBottom: 16 }}>
        <a href="https://github.com/pjgranieri/Portable-Real-Time-Poker-Assistant" target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>
          GitHub Repo
        </a>
        <a href="https://youtu.be/1nT3llKM1yY" target="_blank" rel="noopener noreferrer">
          Video Demo
        </a>
      </div>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Overview</h2>
      <p>
        The Poker AI Coach is a portable, real-time poker assistant that combines computer vision, cloud-based machine learning, and embedded hardware to analyze live poker games and provide strategic recommendations. The system captures gameplay through an OV5640 camera, processes images using specialized YOLO models, and displays AI-driven decisions on an LCD screen—all powered by a custom battery-operated device.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Key Features</h2>
      <ul>
        <li>
          <strong>Computer Vision Pipeline:</strong> Multi-model specialist architecture with 4 YOLOv8-nano models achieving 99%+ mAP for card detection. Adaptive preprocessing using CLAHE enhancement, brightness variants, and multi-threshold cascades (0.20 → 0.15 → 0.10) for robust performance across lighting conditions.
        </li>
        <li>
          <strong>Software Orchestrator:</strong> 10-state Finite State Machine managing complete Texas Hold'em gameplay flow including pre-flop, flop, turn, river, and showdown phases. Handles betting cycles, pot tracking, blind rotation, and player state management with automatic error correction for illegal actions.
        </li>
        <li>
          <strong>Hybrid Edge-Cloud Architecture:</strong> ESP32-S3 microcontroller captures and transmits 640×480 JPEG images via WiFi to Node.js/Express server. Microsoft Azure cloud processes images through YOLO inference and ML poker model, returning decisions within &lt;5-second system heartbeat.
        </li>
        <li>
          <strong>Dynamic ROI Management:</strong> Server-controlled crop-mode system with 5 intelligent regions (NoCrop, CropLeft, CropMiddle, CropRight, CropCards). Reduces bandwidth usage by 50-70% through adaptive cropping based on game phase.
        </li>
        <li>
          <strong>Real-Time Integration Layer:</strong>
          <ul>
            <li>RESTful API with authenticated endpoints for image upload, crop-mode control, and polling</li>
            <li>Triple-polling system (image upload, action display, winner notification) operating every 1000ms</li>
            <li>Comprehensive error handling with automatic WiFi reconnection, JPEG retry logic, and 30-second HTTP timeouts</li>
          </ul>
        </li>
        <li>
          <strong>Advanced Detection Algorithms:</strong>
          <ul>
            <li>Action Analyzer: Multi-stage cascade detecting fold/check/call/raise with MediaPipe gesture fallback</li>
            <li>Chip Counter: Aspect-ratio-based stack estimation with vertical gradient fallback achieving 2-chip accuracy</li>
            <li>Card Detection: 52-class classification with confidence &gt;0.70 for clear cards</li>
            <li>Pot Detector: Specialized model handling heavy chip overlap and irregular stacks</li>
          </ul>
        </li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>System Architecture</h2>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Hardware Layer</h3>
      <ul>
        <li>Custom PCB with ESP32-S3-WROOM-1 microcontroller</li>
        <li>OV5640 autofocus camera (5MP, I2C interface)</li>
        <li>16×2 LCD display with I2C backpack</li>
        <li>USB-C powered battery system with 3+ hour runtime</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Communication Layer</h3>
      <ul>
        <li>Node.js Express server as stateful intermediary</li>
        <li>HTTP POST for image uploads with timestamp-based storage</li>
        <li>Polling-based asynchronous request-response pattern</li>
        <li>API key authentication via X-API-Key header</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Processing Layer</h3>
      <ul>
        <li>Python-based vision processing clients</li>
        <li>YOLO model inference: 120-180ms per model</li>
        <li>Total CV pipeline latency: ~1.5-2.0 seconds</li>
        <li>Parallel-ready design for future optimization</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>ML Integration</h3>
      <ul>
        <li>JSON payload with 24 normalized features (hole cards, community cards, position, pot, stacks)</li>
        <li>Real-time decision output mapped to betting logic</li>
        <li>Action probabilities displayed on LCD</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Technical Highlights</h2>
      <ul>
        <li>
          <strong>Performance Metrics:</strong>
          <ul>
            <li>End-to-end latency: &lt;5 seconds (capture to display)</li>
            <li>Card recognition TPR: 100% (hole cards), 99%+ (community cards)</li>
            <li>Chip count accuracy: ±1 chip</li>
            <li>System uptime: 3+ continuous hours on battery</li>
          </ul>
        </li>
        <li>
          <strong>Robust Error Handling:</strong>
          <ul>
            <li>JPEG validation via magic bytes (0xFFD8 start, 0xFFD9 end)</li>
            <li>5-attempt capture retry with 200ms exponential backoff</li>
            <li>Crop-mode mismatch detection with query support</li>
            <li>CV fallback after 3 consecutive failures</li>
            <li>Illegal ML action correction</li>
          </ul>
        </li>
        <li>
          <strong>Software Engineering Best Practices:</strong>
          <ul>
            <li>Modular component design with single-source-of-truth game state</li>
            <li>Deterministic FSM flow with clear state transitions</li>
            <li>Independent CV/ML/betting components for high testability</li>
            <li>Comprehensive pytest suite with 1,500+ test images</li>
            <li>Environment variable management for API security</li>
          </ul>
        </li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>User Interface</h2>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>LCD Display</h3>
      <ul>
        <li>Action recommendations (Fold/Check/Call/Raise)</li>
        <li>Action probabilities from ML model</li>
        <li>Winner and pot amount display (8-second duration)</li>
        <li>16×2 character format visible from 1-2 feet</li>
      </ul>

      <h3 style={{ fontSize: "1rem", margin: "16px 0 8px", fontWeight: 600 }}>Server Endpoints</h3>
      <ul>
        <li>POST /api/upload-image - Image upload with validation</li>
        <li>POST /api/set-crop-mode - Dynamic ROI control</li>
        <li>GET /api/signal - Crop instruction polling</li>
        <li>GET /api/coach-action - ML action retrieval</li>
        <li>GET /api/winner - Showdown result display</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Team & Development</h2>
      <p>
        Worked in a 4-person team using Agile methodologies:
      </p>
      <ul>
        <li><strong>My Role:</strong> Led computer vision architecture, software orchestrator design, cloud integration, and hardware-software integration</li>
        <li><strong>Collaboration:</strong> Worked closely with hardware team (PCB design, power systems) and ML team (poker decision model)</li>
        <li><strong>Tools:</strong> Git/GitHub (version control), Altium (PCB design), Arduino IDE (firmware)</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Tech Stack</h2>
      <p>
        <strong>Languages:</strong> Python · C++ · JavaScript · JSON<br />
        <strong>Frameworks & Libraries:</strong> YOLOv8 · OpenCV · PyTorch · MediaPipe · Node.js · Express.js · pytest<br />
        <strong>Cloud & Infrastructure:</strong> Microsoft Azure · RESTful APIs · HTTP/HTTPS<br />
        <strong>Hardware:</strong> ESP32-S3 · OV5640 Camera · I2C Protocol · USB-C PD<br />
        <strong>Tools:</strong> Git · Altium · Arduino IDE · Sharp (image processing) · Pandas
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>Results</h2>
      <p>Successfully demonstrated complete poker coaching workflow with:</p>
      <ul>
        <li>Accurate real-time card, chip, and action detection</li>
        <li>Reliable cloud communication under varying network conditions</li>
        <li>Seamless integration between embedded hardware and cloud ML</li>
        <li>Portable, battery-powered form factor with professional enclosure</li>
        <li>Modular architecture enabling future enhancements and parallel processing</li>
      </ul>
    </div>
  );
}
