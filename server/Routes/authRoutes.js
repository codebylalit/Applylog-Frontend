// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middleware/authMiddleware");

require("dotenv").config();


const jwtSecret = process.env.JWT_SECRET;

router.get("/user", authMiddleware, (req, res) => {
  console.log("User route hit");
  console.log("User:", req.user);
  res.json(req.user);
});

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send("Error registering user");
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received login request:", { email, password });
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found with email:", email);
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match for email:", email);
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});








module.exports = router;
