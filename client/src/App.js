import React, { useState } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import About from "./Pages/About";

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
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>PJ Granieri – Portfolio</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
