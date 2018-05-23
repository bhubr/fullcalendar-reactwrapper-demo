// import React...
import React from 'react';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';


const rnd = n => Math.floor((n + 1) * Math.random())
const rndDay = () => rnd(30) + 1
const rndHour = () => rnd(14) + 6
const rndDuration = () => rnd(3) + 1

const events = []
for(let id = 1 ; id <= 200 ; id++) {
  const day = rndDay()
  const stHour = rndHour()
  const endHour = stHour + rndDuration()
  events.push({
    id,
    allDay: false,
    title: 'Event ' + id,
    start: new Date(2018, 4, day, stHour, 0, 0, 0),
    end: new Date(2018, 4, day, endHour, 0, 0, 0)
  })
}

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events
    // :[
    //             {
    //                 title: 'All Day Event',
    //                 start: '2017-05-01'
    //             },
    //             {
    //                 title: 'Long Event',
    //                 start: '2017-05-07',
    //                 end: '2017-05-10'
    //             },
    //             {
    //                 id: 999,
    //                 title: 'Repeating Event',
    //                 start: '2017-05-09T16:00:00'
    //             },
    //             {
    //                 id: 999,
    //                 title: 'Repeating Event',
    //                 start: '2017-05-16T16:00:00'
    //             },
    //             {
    //                 title: 'Conference',
    //                 start: '2017-05-11',
    //                 end: '2017-05-13'
    //             },
    //             {
    //                 title: 'Meeting',
    //                 start: '2017-05-12T10:30:00',
    //                 end: '2017-05-12T12:30:00'
    //             },
    //             {
    //                 title: 'Birthday Party',
    //                 start: '2017-05-13T07:00:00'
    //             },
    //             {
    //                 title: 'Click for Google',
    //                 url: 'http://google.com/',
    //                 start: '2017-05-28'
    //             }
    //         ],
    }
  }

  render() {
    return (
      <div id="example-component">
        <FullCalendar
             id = "your-custom-ID"
         header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        }}
         defaultDate={'2018-05-23'}
        navLinks= {true} // can click day/week names to navigate views
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        events = {this.state.events}
    />
      </div>
    );
  }
}

export default ExampleComponent
