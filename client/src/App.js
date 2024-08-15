import React from "react";
import "./styles.css";
import EventForm from "./components/EventForm";
import EventList1 from "./components/EventList1";

const App = () => {
  return (
    <div>
      <h1>Event Management System (T19)</h1>
      <EventForm />
      <EventList1 />
    </div>
  );
};

export default App;
