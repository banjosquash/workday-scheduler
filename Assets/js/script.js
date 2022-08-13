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
    
})