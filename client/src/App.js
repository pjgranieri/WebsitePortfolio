import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import TrainControl from "./Pages/TrainControl";
import BacktestingEngine from "./Pages/BacktestingEngine";
import SpaceInvadersBopit from "./Pages/SpaceInvadersBopit";
import "./App.css";

function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Router>
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          gap: 24,
          padding: "1rem",
          borderBottom: "1px solid #eee",
          marginBottom: 24,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Me</Link>
      </nav>
      <div
        className="cursor-gradient"
        style={{
          left: cursor.x - 200,
          top: cursor.y - 200,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/train-control" element={<TrainControl />} />
        <Route path="/projects/backtesting-engine" element={<BacktestingEngine />} />
        <Route path="/projects/space-invaders-bopit" element={<SpaceInvadersBopit />} />
      </Routes>
    </Router>
  );
}

export default App;
