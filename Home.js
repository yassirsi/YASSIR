// src/components/Home.js
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    carType: '',
    carColor: '',
    parkingDay: '',
    parkingTime: ''
  });

  const [ticket, setTicket] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parkingNumber = Math.floor(100 + Math.random() * 90);
    setTicket({ ...formData, parkingNumber });
  };

  return (
    <div className="home-container">
      <h1>Vehicle Parking System</h1>
      {ticket ? (
        <div className="ticket">
          <h2>Parking Ticket</h2>
          <p><strong>Car Type:</strong> {ticket.carType}</p>
          <p><strong>Car Color:</strong> {ticket.carColor}</p>
          <p><strong>Parking Day:</strong> {ticket.parkingDay}</p>
          <p><strong>Parking Time:</strong> {ticket.parkingTime}</p>
          <p><strong>Parking Number:</strong> {ticket.parkingNumber}</p>
        </div>
      ) : (
        <form className="parking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="carType">Car Type:</label>
            <input
              type="text"
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="carColor">Car Color:</label>
            <input
              type="text"
              id="carColor"
              name="carColor"
              value={formData.carColor}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="parkingDay">Parking Day:</label>
            <input
              type="date"
              id="parkingDay"
              name="parkingDay"
              value={formData.parkingDay}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="parkingTime">Parking Time:</label>
            <input
              type="time"
              id="parkingTime"
              name="parkingTime"
              value={formData.parkingTime}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Get Parking Ticket</button>
        </form>
      )}
    </div>
  );
};

export default Home;
