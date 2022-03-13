// Hi! Welcome to my increase-productivity-planner code!

// appends the date today to the webpage
const today = moment().format("MMMM Do YYYY");
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
    let timeString = createTimeString(i);
    let input = createInputId(i);
    let saveBtn = createBtnId(i);

    let hourDisplay = $("<div>").text(timeString).addClass("col-md-1 hour");

    $(hourDiv).append(hourDisplay).append(input).append(saveBtn);
    $(".planner").append(hourDiv);
  }

};

saveEvent = function (i) {
    console.log(i);
    const inputId = "input-" + i;
    const eventInput = document.getElementById(inputId);
    const eventText = eventInput.value;
    console.log(eventInput);
    console.log(eventText);
    schedule[i].event = eventText;

    localStorage.setItem(i, eventText);
};

createInputId = function(i) {
    const inputId = "input-" + i;

    let scheduledItem = localStorage.getItem(i);
    if ( scheduledItem ) {

        let input = $("<input>")
          .attr("value", scheduledItem)
          .addClass("col-lg time-block description")
          .attr("id", inputId);
          return input;
    }
    else {

        let input = $("<input>")
        .attr("placeholder", "Enter note here")
        .addClass("col-lg time-block description")
        .attr("id", inputId);
        return input;
    }
};

createBtnId = function(i) {
  const btnId = "btn-" + i;
  saveBtn = $("<button>")
    .addClass("fas fa-save saveBtn")
    .attr("id", btnId)
    .click(function () {
      saveEvent(i);  
    }
    );
    return saveBtn;
  }

createTimeString = function (i) {
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

  return timeString;
};

changeInputColor = function () {
  for (let i = 0; i < schedule.length; i++) {
    const inputId = "input-" + i;
    const eventInput = document.getElementById(inputId);
    $(eventInput).removeClass(".pastHourColor .currentHourColor .futureHourColor");
    const style = getStyleForHour(schedule[i].hour);
    $(eventInput).addClass(style);
  }
}

getStyleForHour = function (hour) {
  let currentHour = moment().format('H');;
  if (hour < currentHour) {
    return "pastHourColor";
  } else if (hour == currentHour) {
  return "currentHourColor";
}

return "futureHourColor";
}

loadPage();
changeInputColor();

// Madison Kendall increase-productivity-planner code
