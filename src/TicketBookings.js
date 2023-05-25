import React, { useState } from "react";
import "./TicketBookings.css";
import Seats from "./Seats";

const TicketBookings = () => {
    const[tickets,setTickets]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();



   setTickets('')
  };
  return (
    <div className="container">
      <h3>Ticket-Booking-App</h3>
      <label>Enter the no of tickets:</label>
      <br />
      <input
        type="text"
        value={tickets}
        onChange={(e)=>setTickets(e.target.value)}
        style={{ height: "30px", borderRadius: "4px", borderColor: "gray" }}
      />
      <br />
      <button className="seat-btn"
        onClick={handleSubmit}>
        Submit
      </button>
      <div className="seat-container">
        {Seats.map((item,index) => (
          <div className="square" style={{backgroundColor:item.status==="available" ? "white" :" red",
          borderColor:item.status==="available" ? "green" : "white",
          color:item.status==="available" ? "black" :"white"}}  key={index}>{item.seatId}</div>
        ))}
      </div>
    </div>
  );
};

export default TicketBookings;
