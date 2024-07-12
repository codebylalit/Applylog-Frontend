const Email = require("../models/email");

exports.submitEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const newEmail = new Email({ email });
    console.log(newEmail)
    await newEmail.save();
    res.status(201).json({ message: "Email submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit email", error });
  }
};