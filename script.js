$(document).ready(function(){

    // group all  our code to run when DOM is ready

        $("#currentDay").text(moment().format('LLLL')); // local time displayed from moment.js

        $(".saveBtn").on("click", function() { // assigned function to button when clicked

            var input = $(this).siblings(".col-md-8").val()   // made variable that collects the value of the .col-md-8 class

            var temp = $(this).parent().data("hour") // made a variable to collect the data from the hour block
 
            localStorage.setItem(`hour-${temp}` , input); // sets the value collected into local storage
            
        })

        $(".time-block .col-md-8").each(function(index, value){ //loops through to find the value input from user
            var temp = $(this).parent().data("hour");
            temp = localStorage.getItem(`hour-${temp}`);
            $(value).val(temp);

        })
       

        var rowArr = $(".time-block"); // variable of the array of timeblocks from 09-17


         var currentHour = moment().hour(); // variable that collects the current hour
     

            rowArr.each(function() {
            var thisHour = parseInt($(this).attr("data-hour")); // function to compare the current hour with the hour in the time block


            if (thisHour == currentHour ) { // if current hour is same as time block then class added
                $(this).addClass("present");
                $(this).removeClass("past");
                
                

            } else if (thisHour < currentHour) { // if time block hour is past then no class added because default class of time block is already set to past

 
            

            } else if (thisHour > currentHour) { // if time block has not occurred yet then class is set to future

                $(this).removeClass("past");
                $(this).addClass("future");

            }

        })
        

    })