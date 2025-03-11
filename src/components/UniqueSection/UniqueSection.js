import React from "react";
import "./UniqueSection.css";
import holisticIcon from "../../assets/holistic-icon.png"; // Add your image path
import clientIcon from "../../assets/client-icon.png"; // Add your image path

const UniqueSection = () => {
  return (
    <div className="unique-section">
      {/* Left Side (Sticky Content) */}
      <div className="unique-left">
        <h2>
          What makes <br /> Us Unique?
        </h2>
        <p>
          At Phanom Professionals, we don’t just offer services; we innovate,
          create, and lead with excellence. Our unique and forward-thinking
          approach sets us apart in the highly competitive world of marketing
          and IT services. As a leading digital marketing agency in India, we
          are committed to delivering transformative solutions that drive
          growth, inspire engagement, and establish lasting success for our
          clients.
        </p>
        <button className="appointment-btn">Book an Appointment</button>
      </div>

      {/* Right Side (Scrollable Content) */}
      <div className="unique-right">
        <div className="unique-card">
          <div className="icon-box">
            <img src={holisticIcon} alt="Holistic Solutions" />
          </div>
          <div className="text-box">
            <h3>Holistic Solutions</h3>
            <p>
              We provide end-to-end services that address all aspects of your
              needs, ensuring seamless integration and effective results.
            </p>
          </div>
        </div>

        <div className="unique-card">
          <div className="icon-box">
            <img src={clientIcon} alt="Client-Centric Approach" />
          </div>
          <div className="text-box">
            <h3>Client-Centric Approach</h3>
            <p>
              Your goals and satisfaction are our top priorities, driving us to
              craft tailored solutions that align seamlessly with your vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSection;
