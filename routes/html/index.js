//Route for main

const router = require("express").Router();

//Accessing the Models folder
const db = require('../../models');

//Paths

router.use("", require("./main"));

module.exports = router;