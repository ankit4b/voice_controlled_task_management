import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// const events = [{ title: "Meeting1", start: new Date() }];

export default function Calendar() {
  const { todos } = useContext(TodoContext);
  const [events, setEvents] = useState([]);
  const d = new Date();
  let day = d.getDay();

  useEffect(() => {
    const event_list = [];
    todos.forEach((todo) => {
      if (todo.datetime) {
        event_list.push({ title: todo.title, start: todo.datetime });
      }
    });
    setEvents(event_list);
    console.log("event_list : ", event_list);
  }, [todos]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="font-island w-full text-left text-4xl">
          {weekday[day]}
        </h3>

        {/* <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={events}
          eventContent={renderEventContent}
        /> */}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          height={"50vh"}
          events={events}
        />
      </div>
    </>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
// headerToolbar={{
//   start: "today prev,next", // will normally be on the left. if RTL, will be on the right
//   center: "title",
//   end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
// }}
