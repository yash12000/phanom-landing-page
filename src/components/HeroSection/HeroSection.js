import React from "react";
import Counter from "../Counter/Counter";
import "./HeroSection.css";
import seoImage1 from "../../assets/SEO.png";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Left Side - Text Content */}
      <div className="hero-content">
        <h1>
          <span className="highlight">
            Let’s <span className="purple-text">innovation</span>
          </span>{" "}
          meets <span className="black-text">your excellence</span>
        </h1>
        <p className="hero-description">
          Excellence refined, innovation ignited, the future starts here
        </p>
        <button className="cta-button">Book an Appointment</button>
      </div>

      {/* Right Side - SEO Image */}
      <div className="hero-image">
        <img src={seoImage1} alt="SEO Visualization" />
      </div>

      {/* Stats Section - Below SEO Image */}
      <div className="stats">
        <div>
          <Counter end={24} />
          /7 <span>Online Support</span>
        </div>
        <div>
          <Counter end={100} />+ <span>Web Developed & Application</span>
        </div>
        <div>
          <Counter end={5} />+ <span>Year Experience</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
