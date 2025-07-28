const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../.env" });

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists" : "Missing");

const app = express();
const PORT = process.env.PORT || 5001;

// Allow all origins for debugging (change to your domain for production)
app.use(
  cors({
    origin: "*",
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Handle preflight for all routes
app.options("/", cors());
app.options("/contact", cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("📨 Received:", name, email, message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verify login
  try {
    await transporter.verify();
    console.log("✅ Gmail SMTP is ready");
  } catch (authError) {
    console.error("❌ AUTH ERROR:", authError);
    return res.status(500).send("Authentication failed");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // must match authenticated user for Gmail
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Message: ${message}\n\nSender Email: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Message sent!");
    res.status(200).send("Message sent!");
  } catch (sendError) {
    console.error("❌ Send error:", sendError);
    res.status(500).send("Message failed to send.");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

