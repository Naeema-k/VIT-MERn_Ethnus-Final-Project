import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList1 = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("There was an error fetching the events!", error);
      }
    };

    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      setEvents(events.filter((event) => event._id !== id));
    } catch (error) {
      console.error("There was an error deleting the event!", error);
    }
  };

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <div class="our_box">
              <h3>{event.name}</h3>
            </div>
            <div class="our_box">
              <p>{event.description}</p>
            </div>
            <div class="our_box">
              <p>{new Date(event.date).toLocaleDateString()}</p>
            </div>
            <div class="our_box">
              <button onClick={() => deleteEvent(event._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList1;
