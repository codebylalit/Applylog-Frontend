// models/Job.js

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offered", "Rejected"],
    default: "Applied",
  },
  deadline: {
    type: Date,
  },
  notes: {
    type: String,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", jobSchema);
