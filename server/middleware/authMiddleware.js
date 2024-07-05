// middlewares/auth.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token.split(" ")[1], jwtSecret);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(404).json({ msg: "User not found" });
    }

    next();
  } catch (error) {
    console.error("Auth middleware error:", error.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;