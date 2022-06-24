const { Router } = require("express");
//external imports
const express = require("express");
//internal imports
const { getusers } = require("../controller/usersController");
const avatarupload = require("../middlewares/users/avatarupload");
const router = express.Router();
router.get("/", getusers);
//add users
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/usersvalidator");
router.post("/", avatarupload, addUserValidators, addUserValidationHandler);
module.exports = router;
