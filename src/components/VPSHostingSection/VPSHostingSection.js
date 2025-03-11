import React from "react";
import "./VPSHostingSection.css";
import { FaServer, FaCogs, FaCheckCircle } from "react-icons/fa";
import manImage from "../../assets/man.png";

const VPSHostingSection = () => {
  return (
    <section className="vps-section">
      {/* Background Man Image */}
      <img src={manImage} alt="Man Illustration" className="man-image" />

      {/* Left Side - Guide Section */}
      <div className="guide-section">
        <h2 className="guide-name">Adarsh</h2>
        <p className="guide-role">Phanom Guide</p>
      </div>
      
      {/* Right Side - VPS Details */}
      <div className="vps-details">
        <h3 className="vps-title">Virtual Private Server</h3>
        <h1 className="vps-heading">Flexible, private, and affordable VPS Hosting</h1>
        
        <ul className="vps-features">
          <li><FaCogs /> Expand major projects with hardware strategy design options.</li>
          <li><FaServer /> Pick Your Dream OS.</li>
          <li><FaCheckCircle /> Maintain Sites and Applications uptime of 99.9%.*</li>
        </ul>
        
        <div className="cta-buttons">
          <button className="pricing-btn">Get Plans and Pricing →</button>
          <button className="managed-vps-btn">Buy Fully Managed VPS</button>
        </div>

        {/* Ratings */}
        <div className="rating-section">
          <span className="stars">⭐⭐⭐⭐☆</span>
          <span className="rating-text">4.6 out of 5 stars based on 110,937 reviews</span>
          <a href="#reviews" className="view-all">View All</a>
        </div>
      </div>
    </section>
  );
};

export default VPSHostingSection;
