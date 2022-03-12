// Hi! Welcome to my increase-productivity-planner code!

// appends the date today to the webpage
const today = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").html(today);

let schedule = [];

loadPage = function () {
    
    for (let i = 9; i < 18; i++) {
        schedule.push({ hour: i });
    }

    for (let i = 0; i < schedule.length; i++) {

        console.log(schedule[i]);

        // creates hour div 
        let hourDiv = $("<div>").addClass("row time-block");
        const timeVal = schedule[i].hour;
        let timeString = "";
        if (timeVal < 12) {
          timeString = timeVal + " AM";
        } else if (timeVal > 12) {
          const adjustedTime = timeVal - 12;
          timeString = adjustedTime + " PM";
        } else {
          timeString = "12 PM";
        }

        let hourDisplay = $("<div>").text(timeString).addClass("col-md-1 hour");

        const inputId = "input-" + i;
        let input = $("<input>")
          .attr("placeholder", "Enter note here")
          .addClass("col-lg time-block description")
          .attr("id", inputId);
        const btnId = "btn-" + i;
        saveBtn = $("<button>")
          .addClass("fas fa-save saveBtn")
          .attr("id", btnId)
          .click(function () {
            saveEvent(i);
          });

        $(hourDiv).append(hourDisplay).append(input).append(saveBtn);
        $(".planner").append(hourDiv);
    }
};

// save 
saveEvent = function (i) {
  console.log(i);
  const inputId = "input-" + i;
  const eventInput = document.getElementById(inputId);
  const eventText = eventInput.value;
  console.log(eventInput);
  console.log(eventText);
  schedule[i].event =eventText;
  localStorage.schedule = JSON.stringify(schedule);
};

loadPage();

// Madison Kendall increase-productivity-planner code
