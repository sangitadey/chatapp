const { Router } = require("express");
//external imports
const express = require("express");
//internal imports
const { getlogin } = require("../controller/loginController");
const router = express.Router();
router.get("/", getlogin);
module.exports = router;
