import React from "react";
import "./WhyChooseUs.css";
import semiCircle from "../../assets/Animation Comp.png";
import textImage from "../../assets/Why ChooseUs_.png";
import serviceIcon from "../../assets/service-icon.png";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <div className="left-animation">
        <img src={semiCircle} alt="Animated Semi-Circle" className="semi-circle" />
      </div>

      <div className="center-text">
        <img src={textImage} alt="Why Choose Us?" className="text-image" />
      </div>

      <div className="right-content">
        <div className="content-box">
          <img src={serviceIcon} alt="Service Icon" className="service-logo" />
          <div className="text-content">
            <h3>Wide Range of Services</h3>
            <p>
              Unlock a world of possibilities with our diverse pool of talented professionals
              – from digital marketing to web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;