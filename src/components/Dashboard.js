// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState('');

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleSelectSlot = (slotInfo) => {
    const { start, end, view } = slotInfo;

    let adjustedStart = start;
    let adjustedEnd = end;

    if (view === 'month') {
      adjustedStart = moment(start).startOf('day').toDate();
      adjustedEnd = moment(end).endOf('day').toDate();
    } else if (view === 'week') {
      adjustedStart = moment(start).toDate();
      adjustedEnd = moment(end).toDate();
    }

    setSelectedEvent({
      title: 'New Event',
      start: adjustedStart,
      end: adjustedEnd,
    });
  };

  const handleCreateEvent = () => {
    if (newEventTitle.trim() !== '') {
      const newEvent = {
        ...selectedEvent,
        title: newEventTitle.trim(),
      };
      setEvents([...events, newEvent]);
      setSelectedEvent(null);
      setNewEventTitle('');
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Calendar App</h1>
      <h2>Welcome!</h2>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
        />
      </div>
      {selectedEvent && (
        <div>
          <h3>Selected Event</h3>
          <p>
            <strong>Title:</strong> {selectedEvent.title}
          </p>
          <p>
            <strong>Start:</strong> {moment(selectedEvent.start).format('LLLL')}
          </p>
          <p>
            <strong>End:</strong> {moment(selectedEvent.end).format('LLLL')}
          </p>
          <label>
            Event Title:
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
            />
          </label>
          <button onClick={handleCreateEvent}>Create Event</button>
        </div>
      )}
      <div>
        <h3>My Events:</h3>
        {events.map((event, index) => (
          <div key={index}>
            <p>
              <strong>Title:</strong> {event.title}
            </p>
            <p>
              <strong>Start:</strong> {moment(event.start).format('LLLL')}
            </p>
            <p>
              <strong>End:</strong> {moment(event.end).format('LLLL')}
            </p>
          </div>
        ))}
      </div>
      <p>Have a nice day!</p>
    </div>
  );
};

export default Dashboard;
