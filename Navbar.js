// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>VEHICLES PARKING SYSTEM</h2>
      </div>
      <div className="navbar-right">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
