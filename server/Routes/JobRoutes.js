const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware"); // Ensure you have middleware for authentication if needed
const Job = require("../models/Job"); // Import your Job model

router.use(auth);

// POST /api/jobs - Create a new job
router.post("/", auth, async (req, res) => {
  try {
    const {
      company,
      position,
      status,
      salary,
      jobType,
      location,
      url,
      appliedOn,
      deadline,
      description,
      notes,
    } = req.body;

    const newJob = new Job({
      user_id: req.user._id, // Assuming user ID is stored in req.user
      company,
      position,
      status,
      salary,
      jobType,
      location,
      url,
      appliedOn,
      deadline,
      description,
      notes,
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error("Error adding job:", error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// GET /api/jobs - Get all jobs for the authenticated user
router.get("/", auth, async (req, res) => {
  try {
    const jobs = await Job.find({ user_id: req.user._id });
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    res.status(500).send("Server error");
  }
});

// PUT /api/jobs/:id - Update a job
router.put("/:id", auth, async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedJob);
  } catch (error) {
    console.error("Error updating job:", error.message);
    res.status(500).send("Server error");
  }
});

// DELETE /api/jobs/:id - Delete a job
router.delete("/:id", auth, async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (error) {
    console.error("Error deleting job:", error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
