import React, { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  // submit button handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { name, date, description };
    try {
      await axios.post("http://localhost:5000/api/events", newEvent);
      setName("");
      setDate("");
      setDescription("");
    } catch (error) {
      console.error("There was an error creating the event!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};
export default EventForm;
