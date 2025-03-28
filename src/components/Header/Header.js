import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/flogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { 
      name: "Service",
      hasDropdown: true,
      dropdownItems: ["Web Development", "Mobile Apps", "Digital Marketing", "Cloud Services"]
    },
    { 
      name: "Hire Indian Talent",
      hasDropdown: true,
      dropdownItems: ["Developers", "Designers", "Project Managers", "Digital Marketers"]
    },
    { name: "Our Portfolio", hasDropdown: false },
    { name: "Case Study", hasDropdown: false },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>

        <div className="nav-container">
          <nav className="nav-menu">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li 
                  key={index} 
                  className="nav-item"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <div className="dropdown">
                      <span className="nav-link">
                        {item.name}
                        <span className="dropdown-arrow">▾</span>
                      </span>
                      {activeDropdown === index && (
                        <div className="dropdown-content">
                          {item.dropdownItems.map((dropItem, idx) => (
                            <a key={idx} href="#" className="dropdown-item">
                              {dropItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="nav-link">{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <button className="appointment-btn">
            <span className="btn-text">Book an Appointment</span>
          </button>
        </div>
      </header>

      <div className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} />

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="decorative-circle"></div>
        <div className="decorative-circle-2"></div>

        <div className="mobile-menu-wrapper">
          <div className={`mobile-menu-item ${activeDropdown === 0 ? 'active' : ''}`} 
               onClick={() => toggleDropdown(0)}>
            <div className="mobile-menu-header">
              <span>Service</span>
              <span className="chevron-icon">▾</span>
            </div>
            <div className={`mobile-dropdown-content ${activeDropdown === 0 ? 'show' : ''}`}>
              {navItems[0].dropdownItems.map((item, idx) => (
                <a key={idx} href="#" className="mobile-dropdown-item">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className={`mobile-menu-item ${activeDropdown === 1 ? 'active' : ''}`}
               onClick={() => toggleDropdown(1)}>
            <div className="mobile-menu-header">
              <span>Hire Indian Talent</span>
              <span className="chevron-icon">▾</span>
            </div>
            <div className={`mobile-dropdown-content ${activeDropdown === 1 ? 'show' : ''}`}>
              {navItems[1].dropdownItems.map((item, idx) => (
                <a key={idx} href="#" className="mobile-dropdown-item">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-menu-item">
            Our Portfolio
          </div>

          <div className="mobile-menu-item">
            Case Study
          </div>
        </div>

        <button className="mobile-book-appointment">
          Book an Appointment
        </button>
      </div>
    </>
  );
};

export default Header;
