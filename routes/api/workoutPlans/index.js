//Route for main

const router = require("express").Router();

//Accessing the Models folder
const db = require('../../../models');

//Get route
router.get("/", function(req, res){
    //This route will get all workouts.
    res.end();
});

router.post("/", function(req, res){
    //This route will add a new workout into the database.
    res.end();
})

router.put("/:id", function(req, res){
    //This route will add an exercise to an existing document.
    res.end();

})

router.delete("/:id", function(req, res){
    //This route will delete an existing workout document.
    res.end();

})

module.exports = router;