import React, { useState } from "react";
import PageTop from "../../components/PageTop";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";
import listPlugin from "@fullcalendar/list";

const EventItem = ({ info }) => {
  const {
    event: { title },
  } = info;
  return (
    <div className=" bg-Neutral-blue w-full rounded-md p-1">
      <h3>{title}</h3>
    </div>
  );
};
const EventListItem = ({ title, start }) => {
  const date = formatDate(start, {
    month: "long",
    year: "numeric",
    day: "numeric",
    timeZoneName: "short",
  });
  return (
    <div className=" bg-Neutral-blue p-2 rounded-md min-w-[200px]">
      <h3 className=" font-bold">{title}</h3>
      <p>{date}</p>
    </div>
  );
};
const AddEventModal = ({ setIsOpen, event, events, setEvents }) => {
  const [input, setInput] = useState("");
  const { start, end } = event;
  return (
    <div className=" absolute top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center bg-[#4C4E4EA8]">
      <div className=" w-1/2 h-1/2 p-4 rounded-md dark:bg-Primary-dark-element bg-Primary-light-element flex flex-col justify-evenly items-center text-center text-gray-700 dark:text-white">
        <h3 className=" font-semibold text-xl">
          Please enter the title of the event
        </h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" rounded-md text-gray-700 p-2"
        />
        <div className=" flex justify-evenly w-full items-center">
          <button
            onClick={() => {
              if (input !== "") {
                setEvents([
                  ...events,
                  {
                    title: input,
                    start,
                    end,
                    id: `${start}||${end}||${input}`,
                  },
                ]);
                setIsOpen(false);
              }
            }}
            className=" p-2 rounded-md bg-Neutral-green hover:bg-Neutral-blue"
          >
            Confirm
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className=" p-2 rounded-md bg-Neutral-green hover:bg-Neutral-blue"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
const DeleteEventModal = ({ setIsOpen, title, events, setEvents }) => {
  return (
    <div className=" absolute top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center bg-[#4C4E4EA8]">
      <div className=" w-1/2 h-1/2 p-4 rounded-md dark:bg-Primary-dark-element bg-Primary-light-element flex flex-col justify-evenly items-center text-center text-gray-700 dark:text-white">
        <h3 className=" font-semibold text-xl">
          Are you sure you want to delete this event?
        </h3>
        <div className=" flex justify-evenly w-full items-center">
          <button
            onClick={() => {
              setEvents(prev=>prev.filter(event=>event.title!==title));
              setIsOpen(false);
            }}
            className=" p-2 rounded-md bg-Neutral-green hover:bg-Neutral-blue"
          >
            Confirm
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className=" p-2 rounded-md bg-Neutral-green hover:bg-Neutral-blue"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const index = () => {
  const [events, setEvents] = useState([]);
  const [addEventModal, setAddEventModal] = useState(false);
  const [deleteEventModal, setDeleteEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [deletedTitle, setDeletedTitle] = useState("");

  const handleSelect = (info) => {
    setSelectedEvent(info);
    setAddEventModal(true);
  };

  const hanldeDelete = (info) => {
    const {
      event: { title },
    } = info;
    setDeletedTitle(title);
    setDeleteEventModal(true);
  };

  return (
    <div className=" w-full p-2">
      <PageTop title={"CALENDAR"} text={"Full Calendar Interactive Page"} />
      <div className=" desktop:grid grid-cols-10 p-2 desktop:p-8 h-full flex flex-col items-center relative">
        {addEventModal ? (
          <AddEventModal
            setIsOpen={setAddEventModal}
            event={selectedEvent}
            events={events}
            setEvents={setEvents}
          />
        ) : null}
        {deleteEventModal ? (
          <DeleteEventModal
            setIsOpen={setDeleteEventModal}
            title={deletedTitle}
            events={events}
            setEvents={setEvents}
          />
        ) : null}
        <div className=" flex order-last desktop:order-first h-full flex-col desktop:col-span-3 p-2 gap-4 items-center">
          <h3 className=" text-Neutral-green font-bold text-lg">EVENTS</h3>
          <div className=" flex desktop:flex-col gap-1 w-full h-full overflow-auto max-h-[450px] p-1 max-w-[500px]">
            {events.map((event, ind) => (
              <EventListItem key={ind} {...event} />
            ))}
          </div>
        </div>
        <div className=" desktop:col-span-7 ">
          <FullCalendar
            plugins={[daygridPlugin, interactionPlugin, listPlugin]}
            editable
            selectable
            events={events}
            select={handleSelect}
            eventClick={hanldeDelete}
            views={["dayGridMonth", "dayGridWeek", "dayGridDay", "listMonth"]}
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,dayGridWeek,dayGridDay,listMonth",
            }}
            eventContent={(info) => <EventItem info={info} />}
          />
        </div>
      </div>
    </div>
  );
};

export default index;