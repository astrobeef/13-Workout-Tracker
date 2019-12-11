console.log("Linked to html!");

const $exerciseType = $("#select-type");
const $exerciseParams = $("#exercise-params");
const $exerciseSend = $(".complete");
const $finishedWorkout = $("#finished-workout");
const $addExercise = $("add-another-exercise");
const $modal = $(".modal");
const $modalTitle = $(".modal-title");

const newWorkout = [];

const API = {
    sendWorkout: async function (workout) {

        const response = await fetch("api/workoutPlans", {
            method : 'POST',
            mode: 'cors',
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type" : "application/json"
            },
            redirect : "follow",
            referrer: "no-referrer",
            body : JSON.stringify(workout)
        });

        return await response.json();
    }
}

$exerciseType.change(function () {

    clearParameters();

    iOption = $(this).val();

    generateParameters(iOption);

});

function clearParameters() {

    $exerciseParams.empty();

}

function generateParameters(iType) {

    let iDiv = $("<div>").addClass("exercise-param");
    let iLabel = $("<label>").attr("for", "exercise-name").text("Exercise Name");
    let iInput = $("<input>").attr("id", "exercise-name").attr("aria-describedby", "nameHelp").attr("placeholder", "Name of exercise").addClass("form-control exercise-input");
    let iSmall = $("<small>").attr("id", "nameHelp").addClass("form-text text-muted").text("An example could be bench press.");

    appendParameter(iDiv, [iLabel, iInput, iSmall]);

    switch (iType) {
        case ("Cardio"):

            iDiv = $("<div>").addClass("exercise-param my-3");
            iLabel = $("<label>").attr("for", "exercise-distance").text("Distance");
            iInput = $("<input>").attr("id", "exercise-distance").attr("aria-describedby", "distanceHelp").attr("placeholder", "10").addClass("form-control exercise-input");
            iSmall = $("<small>").attr("id", "distanceHelp").addClass("form-text text-muted").text("Measured in whole miles.");

            appendParameter(iDiv, [iLabel, iInput, iSmall]);

            iDiv = $("<div>").addClass("exercise-param my-3");
            iLabel = $("<label>").attr("for", "exercise-duration").text("Duration");
            iInput = $("<input>").attr("id", "exercise-duration").attr("aria-describedby", "durationHelp").attr("placeholder", "60").addClass("form-control exercise-input");
            iSmall = $("<small>").attr("id", "durationHelp").addClass("form-text text-muted").text("Measured in whole minutes.");

            appendParameter(iDiv, [iLabel, iInput, iSmall]);

            break;
        case ("Resistance"):

            iDiv = $("<div>").addClass("exercise-param my-3");
            iLabel = $("<label>").attr("for", "exercise-weight").text("Weight");
            iInput = $("<input>").attr("id", "exercise-weight").attr("aria-describedby", "weightHelp").attr("placeholder", "50").addClass("form-control exercise-input");
            iSmall = $("<small>").attr("id", "weightHelp").addClass("form-text text-muted").text("Measured in pounds.");

            appendParameter(iDiv, [iLabel, iInput, iSmall]);

            iDiv = $("<div>").addClass("exercise-param my-3");
            iLabel = $("<label>").attr("for", "exercise-reps").text("Reps");
            iInput = $("<input>").attr("id", "exercise-reps").attr("aria-describedby", "repHelp").attr("placeholder", "10").addClass("form-control exercise-input");
            iSmall = $("<small>").attr("id", "repHelp").addClass("form-text text-muted").text("Amount of times performed.");

            appendParameter(iDiv, [iLabel, iInput, iSmall]);
            break;
        default:
            console.error("Uncaught switch case");
            break;
    }

}

function appendParameter(pDiv, pInfoArr) {

    pInfoArr.forEach(iElement => {
        pDiv.append(iElement);
    });

    $exerciseParams.append(pDiv);

}

$exerciseSend.click((event) => {
    constructExerciseFromParameters();

    switch ($(event.target).attr("id")) {
        case ("finished-workout"):
            API.sendWorkout(newWorkout);
            break;
        case ("add-another-exercise"):
            break;
        default:
            console.error("Uncaught switch case");
            break;
    }
});

function constructExerciseFromParameters() {
    const paramElements = $exerciseParams.children(".exercise-param");
    const params = {};

    for (let iCurParam = 0; iCurParam < paramElements.length; iCurParam++) {
        const input = $(paramElements[iCurParam]).find(".exercise-input");

        params[input.attr("id")] = input.val();
    }

    console.log(params);
    console.log("^^^ params");

    newWorkout.push(params);

    console.log(newWorkout);
    console.log("^^^ newWorkout");
}

function convertArrayToObject(pArray){

    console.log(pArray);
    console.log("^^^ pArray");
    let rObject = {};
    
    for(let i = 0; i < pArray.length; i++)
    {
        rObject[i] = pArray[i];
    }

    console.log(rObject);
    console.log("^^^ rObject");
    return rObject;

}