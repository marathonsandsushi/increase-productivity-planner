// Hi! Welcome to my increase-productivity-planner code!  

// appends the date today to the webpage
const today = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(today);

let schedule = [];

loadPage = function() {
    for(let i=9; i<18; i++) {
       schedule.push({"hour": i});
    }
    for(let i=0; i < schedule.length; i++) {
      console.log(schedule[i]);

      let hourDiv = $("<div>").addClass("row time-block");
      const timeVal = schedule[i].hour;
      let timeString = "";
      if(timeVal < 12) {
        timeString = timeVal + " AM";
      } else if(timeVal > 12) {
        const adjustedTime = timeVal - 12;
        timeString = adjustedTime + " PM";
      } else {
        timeString = "12 PM";
      }

      let time = $("<textarea>").text(timeString).addClass("description");
      let input = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
      saveBtn = $("<button>").addClass("fas fa-save saveBtn")
      $(hourDiv).append(time).append(input).append(saveBtn);
      $(".planner").append(hourDiv);
    }
  };




loadPage();

// Madison Kendall increase-productivity-planner code 
