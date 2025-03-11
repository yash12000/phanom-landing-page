import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission-section">
      {/* Title */}
      <h2 className="mission-title">Our Mission</h2>
      <p className="mission-subtext">
        Empowering businesses with innovation, crafting bespoke solutions, and
        driving industry leadership.
      </p>

      {/* Mission Content */}
      <div className="mission-container">
        <div className="mission-card">
          <div className="mission-number">01</div>
          <h3>Innovate</h3>
          <p>
            Harnessing the power of technology to bring fresh, groundbreaking
            ideas to life. Stay ahead with our visionary approach to
            problem-solving and growth.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-number">02</div>
          <h3>Create</h3>
          <p>
            Designing and developing solutions that drive progress and meet
            unique challenges. Build the future with tailored solutions that
            redefine possibilities.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-number">03</div>
          <h3>Dominate</h3>
          <p>
            Empowering businesses to lead their industries with robust, scalable
            IT strategies. Achieve unmatched success with our expertise guiding
            your digital journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
