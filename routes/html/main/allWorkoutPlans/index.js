//Route for main

const router = require("express").Router();

//Accessing the Models folder
const db = require('../../../../models');

//Get route
router.get("/", function (req, res) {

    
    db.workoutPlans.find({}, function (err, workoutsDB) {
        if (err) throw err;

        const workoutsObj = {
            workouts: workoutsDB
        }

        console.log(workoutsObj);

        res.render("allWorkoutPlans", workoutsObj);
    });

});

module.exports = router;