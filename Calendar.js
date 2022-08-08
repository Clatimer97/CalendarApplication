

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
        saveBtnEl.attr("data-but", i)
        // connect button to save function
        saveBtnEl.on('click', function (event){
            console.log(event.target)
            console.log($(event.target).siblings())
            // var agendaEvent = descriptionEl.input 
            // console.log(agendaEvent) // text is a method, you need to get the value
            // var key = "agendaEvent" + i
            // localStorage.setItem(key, agendaEvent);
 
            // printEvent(key, descriptionEl)
            // do local storage stuff
            // dsecriptionEl can be
        })
        
        // descriptionEl.text("Enter Information Here!"); // here you're using .text method

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


function printEvent(localStorageKey, textAreaElement){
    // no need parse because it's already a string
    // use the right id when printing event
   var savedEvent= localStorage.getItem(localStorageKey);
    if(savedEvent !== null){
        textAreaElement.text(savedEvent) // confirm this
    }

    if(savedEvent == null){
        return;
    }
};


