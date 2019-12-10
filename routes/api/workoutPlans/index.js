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

    const iName = req.body.name;
    const iExercises = req.body.exercises;

    db.workoutPlans.create({ name: iName, exercises: [...iExercises] }, function (err, workout) {
        if (err) throw (err);

        console.log(workout);

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