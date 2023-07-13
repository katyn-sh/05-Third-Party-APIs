// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateTime = $('#currentDay');
var saveBtn = document.querySelector(".saveBtn");

var currentHour = dayjs().hour();

function printDateTime() {
    var date = dayjs().format("dddd, MMM YYYY")
    dateTime.text(date);
}

function hourTracker() {
    $('.timeSchedule').each(function () {
        var schedulehHour = $(this).attr("id").split("hour")[1];
        console.log("currentHour " + currentHour)
        console.log("schedulehHour " + schedulehHour)

        if (schedulehHour < currentHour) {
            $(this).addClass("past");
        }
        else if (schedulehHour == currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
})

$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

printDateTime();
hourTracker();