import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/newloggg.d00e50814202bbb2c40b 1.png";
import bubble from "../../assets/bubble.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Phanom Professionals" />
        </div>

        {/* Navigation Menu */}
        <nav className={menuOpen ? "nav open" : "nav"}>
          <ul>
            <li>
              <a href="#">Service ▾</a>
            </li>
            <li>
              <a href="#">Hire Indian Talent ▾</a>
            </li>
            <li>
              <a href="#">Our Portfolio</a>
            </li>
            <li>
              <a href="#">Case Study</a>
            </li>
          </ul>
        </nav>

        {/* Button */}
        <a href="#" className="btn">
          Book an Appointment
        </a>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Floating Bubble Image */}
      <img src={bubble} alt="Bubble" className="bubble-img" />
    </header>
  );
};

export default Header;
