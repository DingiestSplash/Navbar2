import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z"></path>
        </svg>
      </div>

      <div className="nav-center">

      </div>

      <div className="nav-right">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;



