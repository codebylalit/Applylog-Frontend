const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact");

router.post("/contact", contactController.submitContactForm);

module.exports = router;
