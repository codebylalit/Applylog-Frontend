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
    enum: [
      "Applied",
      "Interview",
      "Offered",
      "Rejected",
      "Follow-up",
      "Wishlist",
    ],
    default: "Applied",
  },
  salary: {
    type: Number,
  },
  jobType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
  },
  location: {
    type: String,
  },
  url: {
    type: String,
  },
  appliedOn: {
    type: Date,
  },
  deadline: {
    type: Date,
  },
  description: {
    type: String,
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
