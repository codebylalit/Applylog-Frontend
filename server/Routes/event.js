const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Example schema and model for Event (adjust as necessary)
const eventSchema = new mongoose.Schema({
  date: String,
  description: String,
  tag: String,
});

const Event = mongoose.model("Event", eventSchema);

// GET route to fetch all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Error fetching events" });
  }
});

// POST route to add a new event
router.post("/", async (req, res) => {
  const { date, description, tag } = req.body;

  try {
    const newEvent = new Event({ date, description, tag });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Error adding event" });
  }
});

// PUT route to update an event
router.put("/:eventId", async (req, res) => {
  const { eventId } = req.params;
  const { description, tag } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { description, tag },
      { new: true }
    );
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: "Error updating event" });
  }
});

// DELETE route to delete an event
router.delete("/:eventId", async (req, res) => {
  const { eventId } = req.params;

  try {
    await Event.findByIdAndDelete(eventId);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting event" });
  }
});

module.exports = router;
