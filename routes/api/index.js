//Route for API

const router = require("express").Router();

//Accessing the Models folder
const db = require('../../models');

router.use("/workoutPlans", require("../api/workoutPlans"));

module.exports = router;