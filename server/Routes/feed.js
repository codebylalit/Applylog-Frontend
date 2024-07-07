// routes/feedbackRoutes.js
const express = require("express");
const router = express.Router();
const feedbackController = require("../controller/feedback")

router.post("/feedback", feedbackController.submitFeedback);

module.exports = router;
