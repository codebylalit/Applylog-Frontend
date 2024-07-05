const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["To do", "In progress", "Done"],
    default: "To do",
  },
  deadline: { type: Date },
});

module.exports = mongoose.model("Task", TaskSchema);
