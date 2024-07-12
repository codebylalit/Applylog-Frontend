require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors"); // Import the cors package
const PORT = process.env.PORT || 3000;
const authRouter = require("./Routes/authRoutes");
const jobRouter = require("./Routes/JobRoutes");
const taskRouter = require("./Routes/tasks");
const eventrouter = require("./Routes/event")
const emailRouter = require("./Routes/emailroute");
const contactRoutes = require("./Routes/contact");

// Middleware
app.use(bodyParser.json());

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3001", // frontend origin
  })
);

app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://lalitkumarnamdev4645:JobAppTR@jobapptr.052ce5t.mongodb.net/?retryWrites=true&w=majority&appName=JobAppTR",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

app.use("/api/auth", authRouter);
app.use("/api/jobs", jobRouter); // Mount job routes
app.use("/api/tasks", taskRouter); // Mount task routes
app.use("/api/events", eventrouter); // Mount task routes
app.use("/api", emailRouter); // Mount task routes
app.use("/api", contactRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
