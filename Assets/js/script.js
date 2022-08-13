//current date and time
var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todaysDate);



//save btn event listener
$('.saveBtn').on('click', function () {
    //get value of descripion(text-area, time slot) in jquery
    var description = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr("id");
    //save to local storage
    localStorage.setItem(description, timeSlot);
    console.log(localStorage)
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
trackTime();