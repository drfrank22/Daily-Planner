$(document).ready(function() {

// DISPLAY CURRENT DATE
var todaysDate = $("#currentDay");
todaysDate.text(moment().format("MMMM Do YYYY"));
// var time = moment().format("h:mm:ss");

// CREATE TIME BLOCKS FOR ALL TIMES 9AM-5PM
var hourArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var timeBlockContainer = $(".container");

for (i = 1; i < hourArray.length; i++) {
    var timeBlockClones = $("#9AM").clone();
    timeBlockClones.attr("id", hourArray[i]); 
    timeBlockClones.children(".row").attr("style", "white-space: pre-Wrap"); 
    timeBlockClones.children(".row").children(".hour").text(hourArray[i]); 
    timeBlockClones.appendTo(timeBlockContainer);
}

// SET TIME AND GIVE PAST, PRESENT, FUTURE CSS
var currentTimeHour = moment().format("hA");
console.log(currentTimeHour);
var allTimeBlocks = $(".time-block");

for (i = 0; i < allTimeBlocks.length; i++) {
    var timeBlock = $(allTimeBlocks[i]);
    var timeBlockId = timeBlock.attr("id");
    var timeBlockTextarea = timeBlock.children(".row").children("textarea");  
    if (timeBlockId === currentTimeHour){
        timeBlockTextarea.addClass("present"); 
    } else if (moment(timeBlockId, "hA").isBefore()) {
        timeBlockTextarea.addClass("past"); 
    } else if (moment(timeBlockId, "hA").isAfter()) {
        timeBlockTextarea.addClass("future"); 
    }
};

// var inputText9 = $("#9AM").children(".row").children("textarea");
// var saveButton9 = $("#9AM").children(".row").children("button");
// //retrieves previously save text to display
// inputText9.value = localStorage.getItem("content9");
// //when the Save button is clicked, store the input of the textarea
// saveButton9.on("click", updateOutput9);
// //sets the input of text area into local storage
// function updateOutput9() {
//     localStorage.setItem("content9", inputText9.value);
//     JSON.stringify(inputText9.value)
// };

// function setPlanner() {

//     $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//     $(".time-block").each(function () {
//         var id = $(this).attr("id");
//         var schedule = localStorage.getItem(id);

//         if (schedule !== null) {
//             $(this).children(".schedule").val(schedule);
//         }
//     });
// }

// setPlanner();

// var saveBtn = $("#saveBtn");

// saveBtn.on("click", function () {
//     var time = $(this).parent().attr("id");
//     var schedule = $(this).siblings(".schedule").val();

//     localStorage.setItem(time, schedule);
// });


// DISPLAY PREVIOUSLY SAVED EVENTS IN CALENDAR
var savedEvents;
var eventsArr = [];

function previouslySavedEvents () {
    savedEvents = localStorage.getItem("savedEvents");
    eventsArr=[];
    if (savedEvents === null || savedEvents === "") {
        savedEvents = [];
    } else {
        savedEvents = JSON.parse(savedEvents);
        for (i = 0; i , savedEvents.length; i++) {
        eventsArr.push(savedEvents[i].event)
        }
    }
    for (i = 0; i < eventsArr.length; i++) {
        var timeBlockElid = "#" + eventsArr[i];
        var timeBlockEl = $(timeBlockElid).children(".row").children("textarea");
        $(timeBlockElid).children(".row").children("button").attr("data-event", "yes");
        timeBlockEl.val(savedEvents[i].event)
    }
};

previouslySavedEvents();

// SAVE EVENTS
function saveEvent(time,input){
    alert("You saved your event!"); 
    savedEvents.push({"time":time,
    "event": input
    }); 
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents)); 
}

$("#saveBtn").on("click", function() {
    saveEvent();
})

// EVENT LISTENER FOR CLEAR BUTTON
$("#clearBtn").on("click", function() {
    localStorage.clear();
    location.reload();
})

console.log(localStorage);

});