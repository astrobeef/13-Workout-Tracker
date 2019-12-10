//Route for main

const router = require("express").Router();

//Accessing the Models folder
const db = require('../models');

//Paths

router.use("/api", require("./api"));
router.use("", require("./html"));

module.exports = router;