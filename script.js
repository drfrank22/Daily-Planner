// DISPLAY CURRENT DATE
var todaysDate = $("#currentDay");
todaysDate.text(moment().format("MMMM Do YYYY"));

// CREATE TIME CLOCKS FOR ALL TIMES 9AM-5PM
var hourArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var timeBlockContainer = $(".container");

for (i = 1; i < hourArray.length; i++) {
    var timeBlockClones = $("#form").clone();
    timeBlockClones.attr("id", hourArray[i]); 
    timeBlockClones.children(".row").attr("style", "white-space: pre-Wrap"); 
    timeBlockClones.children(".row").children(".hour").text(hourArray[i]); 
    timeBlockClones.appendTo(timeBlockContainer);
}