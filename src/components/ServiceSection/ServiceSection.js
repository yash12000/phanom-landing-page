import React from "react";
import "./ServiceSection.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import images
import seoIcon from "../../assets/serviceSEO.png";
import socialIcon from "../../assets/serviceSocial.png";
import ppcIcon from "../../assets/servicePPO.png";
import youtubeIcon from "../../assets/serviceYT.png";
import marketingImage from "../../assets/digital-marketing-promotion-advertising-svgrepo-com 1.png"; // Updated icon
import toolsImage from "../../assets/tools.png"; // Added tools image

// Service Data
const services = [
  {
    icon: seoIcon,
  },
  {
    icon: socialIcon,
  },
  {
    icon: ppcIcon,
  },
  {
    icon: youtubeIcon,
  },
];

const ServiceSection = () => {
  return (
    <section className="service-section">
      {/* Left Section */}
      <div className="left-section">
        <h2 className="explore-title">
          Explore <br /> our <br /> <span>Service</span>
        </h2>
        <p className="explore-description">
          Explore our service and discover solutions designed to meet your
          unique needs. With a focus on quality and innovation, we turn your
          vision into reality.
        </p>
        <button className="appointment-btn">Book an Appointment</button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Digital Marketing Title + Icon */}
        <div className="digital-marketing-container">
          <img src={marketingImage} alt="Digital Marketing" className="marketing-icon" />
          <h2 className="main-title">Digital Marketing</h2>
        </div>
        
        <p className="subtitle">
          Keep your lawn in top shape without lifting a finger and boost the
          appearance of your property.
        </p>

        {/* Service Cards */}
        <div className="service-card-container">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <img src={service.icon} alt={`Service icon`} className="service-icon" />
            </div>
          ))}
        </div>

        {/* Tools Image Below All Services */}
        <div className="tools-container">
          <img src={toolsImage} alt="Tools" className="tools-icon" />
        </div>
      </div>

      {/* Bottom Right Vector Symbol */}
      <div className="vector-symbol">➜</div>
    </section>
  );
};

export default ServiceSection;