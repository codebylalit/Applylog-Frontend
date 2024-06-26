const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lalitkumarnamdev4645:JobAppTR@jobapptr.052ce5t.mongodb.net/?retryWrites=true&w=majority&appName=JobAppTR",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // You might also want to add useCreateIndex: true if you are using unique indexes
      }
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
