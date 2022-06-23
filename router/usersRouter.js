const { Router } = require("express");
//external imports
const express = require("express");
//internal imports
const { getusers } = require("../controller/usersController");
const router = express.Router();
router.get("/", getusers);
module.exports = router;
