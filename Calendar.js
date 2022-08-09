

//create time element at top of page using moment
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

//give the div container an id so I can append elements to it 
let planner = $("#planner");
let currentHour = moment().format("H");

const saveBtnEl= $(".saveBtn");


// to remember what was saved, you need to read from local storage when the page loads

//create work hours array to get the schedule to display
const workHours= [8,9,10,11,12,13,14,15,16,17,18,19,20]
const workHoursTime= [8,9,10,11,12,1,2,3,4,5,6,7,8]

let calendarEvent= [];

//function to display the work hours and elements within it 
function displayAgenda(){

    for(i=0; i<workHours.length; i++){

    //create elements using the let property 
        let rowEl = $("<div>");
        let hourEl = $("<p>");
        let descriptionEl = $("<textarea>")
        let saveBtnEl = $("<button>");

        //add the CSS properties to the newly created elements; use the column property from Bootstrap grid and width to adjust the fit to the page
        rowEl.addClass("row time-block");
        hourEl.addClass("hour col-1");
        descriptionEl.addClass("description w-100 p3 col 10");
        saveBtnEl.addClass("saveBtn col-1")

        //use the work hours arrays to toggle AM/PM to display to the page
        if(workHours[i]>11){
            hourEl.text(workHoursTime[i] + " PM")
        } else {  
            hourEl.text(workHoursTime[i]+ "AM")

        }

       
        //used a floppy disk emoji for the save button
        saveBtnEl.text("💾")
        descriptionEl.attr("data-text", i)
        saveBtnEl.attr("data-number", i)
        // connect save button to an on click event that saves any input to local storage
         saveBtnEl.on('click', function (event){
            console.log(event.target)
             console.log($(event.target).siblings())


             var saveBtnEl= $(event.target)
             var textEntry= saveBtnEl.siblings("textarea").val()
             var number= saveBtnEl.data().number
             console.log(number)
            
            localStorage.setItem(number, textEntry);

         });
        

        //appended all the child elements to the parent elements in order to create the timetable
        rowEl.append(hourEl);
        rowEl.append(descriptionEl);
        rowEl.append(saveBtnEl);
        planner.append(rowEl)

        //used if statements for the workhours element to get the colors to display; added the CSS classes onto them
        if(currentHour== workHours[i]){
            descriptionEl.addClass("present")
        } else if (currentHour<workHours[i]){
            descriptionEl.addClass("future")
        } else if (currentHour>workHours[i]){
            descriptionEl.addClass("past")
        }
    }
    
};

//calling the function to display the timetable
displayAgenda();

//used the ready event to scan local storage for any input and display it to the page even after it's been deleted or the page has been refreshed 
$(document).ready(function() {
   
    for (var i=0; i<12; i++){
    localStorage.getItem(i)

    let textarea= $(document).find("[data-text="+ i + "]")
    console.log(textarea)
    textarea.val(localStorage.getItem(i))
    
    console.log(typeof i)
    }
   
  });