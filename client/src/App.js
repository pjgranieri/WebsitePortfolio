import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import TrainControl from "./Pages/TrainControl";
import BacktestingEngine from "./Pages/BacktestingEngine";
import SpaceInvadersBopit from "./Pages/SpaceInvadersBopit";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/contact", formData);
      alert("Message sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

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
