// DISPLAY CURRENT DATE
var todaysDate = $("#currentDay");
todaysDate.text(moment().format("MMMM Do YYYY"));

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

}

// SAVE TO LOCAL STORAGE SO THAT WHEN REFRESHED, EVENTS STAY
var savedEvents;

function saveToLocalStorage () {
    // savedEvents = 
}



// EVENT LISTENERS TO SAVE BUTTON
var saveButton = $(".saveBtn");
saveButton.on("click", function (event) {
    event.preventDefault ();
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
})


