const express = require("express");
const router = express.Router();
const emailController = require("../controller/email");

router.post("/email", emailController.submitEmail);

module.exports = router;
