//Route for main

const router = require("express").Router();

//Accessing the Models folder
const db = require('../../../models');

//Get route
router.get("/", function (req, res) {
    //This route will get all workouts.

    db.workoutPlans.find({}, (err, workouts) => {
        res.json(workouts);
    });

});

router.post("/", function (req, res) {
    //This route will add a new workout into the database.

    console.log(req.body);
    console.log("^^^^^^^^^^^^ req.body ^^^^^^^^^^^^^^^^^");

    const iExercises = req.body;

    db.workoutPlans.create({ exercises: [...iExercises] }, function (err, workout) {
        if (err) throw (err);

        res.json(workout);
    });
})

router.put("/:id", function (req, res) {
    //This route will add an exercise to an existing document.
    res.end();

})

router.delete("/:id", function (req, res) {
    //This route will delete an existing workout document.
    res.end();

})

module.exports = router;