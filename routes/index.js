//Route for main

const router = require("express").Router();

//Accessing the Models folder
const db = require('../models');

//Paths

router.use("/api", require("./api"));

//Get route
router.get("/", function(req, res){
    res.send(200);
});

module.exports = router;