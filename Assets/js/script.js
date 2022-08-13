//current date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todaysDate);


$(document).ready(function() {
//save btn event listener
$(".saveBtn").on("click", function () {
    //get value of descripion(text-area, time slot) in jquery
    var textBar = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr("id");
    //save to local storage
    localStorage.setItem(timeSlot, textBar);
    
})

function trackTime() {
    var currentTime = moment().hour();

    // for each loop over time blocks

    $(".block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        //if statement to check time and show backgrounds
        if (timeBlock < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

}

$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


trackTime();
})
