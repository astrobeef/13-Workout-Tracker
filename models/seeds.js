const mongoose = require("mongoose");

const db = require("../models");

// const test = new db.workoutPlans({name : "test 1", exercises : [{type : "type 1", name : "Bench"}, {type : "type 1", name : "Bench"}]});

// test.save(function (err, test){
//     if(err) throw(err);

//     console.log(test);
// });

// db.workoutPlans.create({name : "test 2", exercises : [{type : "type 1", name : "Bench"}, {type : "type 1", name : "Bench"}]}, function(err, test) {
//     if(err) throw(err);

//     console.log(test);
// });