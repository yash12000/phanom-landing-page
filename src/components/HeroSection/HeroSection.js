import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import Counter from "../Counter/Counter";
import seoImage1 from "../../assets/SEO1.png";
import seoImage2 from "../../assets/SEO2.png";
import seoImage3 from "../../assets/SEO3.png";
import seoImage4 from "../../assets/SEO4.png";

const images = [seoImage1, seoImage2, seoImage3, seoImage4];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
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

      <div className="hero-image">
        <img src={images[currentImage]} alt="SEO Visualization" className="fade-image" />
      </div>

      <div className="stats">
        <div>
          <Counter end={24} duration={2} />
          /7 <span>Online Support</span>
        </div>
        <div>
          <Counter end={100} duration={2} />+ <span>Web Developed & Application</span>
        </div>
        <div>
          <Counter end={5} duration={2} />+ <span>Year Experience</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
