$(document).ready(function() {
/*   $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  }); */
  console.log($('#calendar'))
  
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      defaultDate: '2021-02-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Introduction to the Web',
          start: '2021-02-01'
        },
        {
          title: 'Intro to HTML',
          start: '2021-02-04',
          end: '2021-02-06'
        },
        {
          id: 999,
          title: 'Intro to CSS',
          start: '2021-02-09T16:00:00'
        },
        {
          id: 999,
          title: 'CSS Layouts',
          start: '2021-02-16T16:00:00'
        },
        {
          title: 'Intro to Javascript',
          start: '2021-02-11',
          end: '2021-02-13'
        },
        {
          title: 'Variables and Functions',
          start: '2021-02-18T10:30:00',
          end: '2021-02-18T12:30:00'
        },
        {
          title: 'Objects and the DOM',
          start: '2021-02-19T12:00:00'
        },
        {
          title: 'Uploading to GitHub',
          start: '2021-02-22T14:30:00'
        },
        {
          title: 'Publishing your page',
          start: '2021-02-24T17:30:00'
        }
      ]
    });
    
  });