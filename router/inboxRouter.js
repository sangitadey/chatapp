const { Router } = require("express");
//external imports
const express = require("express");
//internal imports
const { getinbox } = require("../controller/inboxController");
const router = express.Router();
router.get("/", getinbox);
module.exports = router;
