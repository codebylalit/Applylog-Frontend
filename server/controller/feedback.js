// controllers/feedbackController.js
const Feedback = require("../models/feedback");

exports.submitFeedback = async (req, res) => {
  try {
    const { rating, feedback } = req.body;
    const newFeedback = new Feedback({ rating, feedback });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit feedback", error });
  }
};
