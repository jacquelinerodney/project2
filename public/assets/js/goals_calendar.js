$(document).ready(function() {
/*   $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  }); */


 var pathArray = window.location.pathname.split('/');

  var id = pathArray[pathArray.length - 1]
  console.log("The id is", id)
  console.log(req.params.id)
 $.get("/api/users/" + id).then(response => {
  console.log("The user profile is", response.Goal.goalName)
  console.log("milestones are", response.Goal.milestones)
  console.log("Milestone 1 is", response.Goal.milestones[0].milestoneName)
  console.log("Frequency is", response.frequency)
  var daysAdded = parseFloat(response.frequency)
  console.log("days added is", daysAdded)
  console.log("response is", response)
  console.log(moment())
  var events = [];
  for (let i = 0; i < response.Goal.milestones.length; i++)  {
    events.push({
      title: response.Goal.milestones[i].milestoneName,
      start: moment().add(daysAdded, 'days').format("YYYY-MM-DD")
          ///GREG -- We may need further IF statements to say "look at last INDEX[i] and add Frequency number to that"
          // end: response.Goal.updatedAt
    }); 
    daysAdded += parseFloat(response.frequency)
    console.log(daysAdded)
  }
  console.log("events are", events)
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      defaultDate: moment(), /// Variable to call Moment to grab current date 
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, 
      events: events
    });
  })
})