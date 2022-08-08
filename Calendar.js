
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

let planner = $("#planner");
let currentHour = moment().format("H");

const saveBtnEl= $(".saveBtn");

const workHours= [8,9,10,11,12,13,14,15,16,17,18,19,20]
const workHoursTime= [8,9,10,11,12,1,2,3,4,5,6,7,8]

let calendarEvents= []


function displayAgenda(){

    for(i=0; i<workHours.length; i++){

        let rowEl = $("<div>");
        let hourEl = $("<p>");
        let descriptionEl = $("<textarea>")
        let saveBtnEl = $("<button>");

        rowEl.addClass("row time-block");
        hourEl.addClass("hour col-1");
        descriptionEl.addClass("description w-100 p3 col 10");
        saveBtnEl.addClass("saveBtn col-1")

        if(workHours[i]>12){
            hourEl.text(workHoursTime[i] + " PM")
        } else {  
            hourEl.text(workHoursTime[i]+ "AM")

        }

       

        saveBtnEl.text("💾")
        descriptionEl.text("");


        rowEl.append(hourEl);
        rowEl.append(descriptionEl);
        rowEl.append(saveBtnEl);
        planner.append(rowEl)

        if(currentHour== workHours[i]){
            descriptionEl.addClass("present")
        } else if (currentHour<workHours[i]){
            descriptionEl.addClass("future")
        } else if (currentHour>workHours[i]){
            descriptionEl.addClass("past")
        }
    }
};

displayAgenda()