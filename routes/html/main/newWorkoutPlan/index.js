//Route for main

const router = require("express").Router();

//Accessing the Models folder
const db = require('../../../../models');

//Get route
router.get("/", function (req, res) {

    res.render("newWorkoutPlan");

});

module.exports = router;