import React from "react";
import "./Footer.css";
import logo from "../../assets/flogo.png";
import phoneIcon from "../../assets/phone-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Content Section */}
      <div className="footer-content">
        <h2 className="footer-heading">
          Let's make something <br /> great together.
        </h2>
        <p className="footer-subtext">
          Let us know what challenges you are <br /> trying to solve so we can
          help.
        </p>
        <button className="join-us-button">Join Us →</button>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-left">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>

        <div className="footer-middle">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Hire Talent</a>
          <a href="#">Portfolio</a>
          <a href="#">Book Appointment</a>
        </div>

        <div className="footer-right">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Pinterest</a>
          <a href="#">Twitter</a>
        </div>

        <div className="footer-address">
          <h4>Address:</h4>
          <p>
            E-193, Third Floor, TDS Tower,
            <br />
            Phase 8B, Industrial Area, Sector 74,
            <br />
            Sahibzada Ajit Singh Nagar, Punjab 160055
          </p>
        </div>
      </div>

      {/* Copyright & Call Section */}
      <div className="footer-bottom-extra">
        <div className="footer-terms">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
        <p className="footer-copyright">
          © 2025 Company Name. All rights reserved.
        </p>

        <div className="footer-call">
          <img src={phoneIcon} alt="Phone Icon" className="phone-icon" />
          <div>
            <p className="call-text">Call us</p>
            <p className="call-number">+91 628 007 2655</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
