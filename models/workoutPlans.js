const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    exercises: [
        {
            type: Object
        }
    ]
});

const WorkOut = mongoose.model("WorkOut", WorkoutSchema);

module.exports = WorkOut;