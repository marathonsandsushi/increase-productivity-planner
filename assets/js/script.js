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

      // <!-- Time: 3 PM -->
      // <div id="hour15" class="row time-block">
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
      
      //   <div class="col-md-1 hour">3 PM</div>
      let hourDisplay = $("<div>").text(timeString).addClass("col-md-1 hour")
      //   <textarea class="col-md-10 description"></textarea>
     // let time = $("<textarea>").addClass("description");


      //   <button class="btn saveBtn cold-md-1"><i class="fas fa-save"></i></button>
      // </div>
      
      
      
      let input = $("<input>").attr("placeholder", "Enter note here").addClass("col-lg time-block description");
      const btnId = "btn-" + i;
      saveBtn = $("<button>").addClass("fas fa-save saveBtn").attr('id', btnId).click(
        function() {
          handleButtonClick(i);
        }
      );

      // saveBtn.setAttribute("onclick", "handleButtonClick("+i+")");
      // $("button").click(function(){
      //   $("img").attr("width",function(n, v){
      //     return v - 50;
      //   });
      // });
      $(hourDiv).append(hourDisplay).append(input).append(saveBtn);
      $(".planner").append(hourDiv);
    }
  };

 handleButtonClick = function (arrayIndex) {
console.log(arrayIndex);
 }


loadPage();

// Madison Kendall increase-productivity-planner code 
