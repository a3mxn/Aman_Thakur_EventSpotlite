// React - Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>EventSpotLite</h1>
      <input type="text" placeholder="Search events..." />
    </nav>
  );
}

export default Navbar;
