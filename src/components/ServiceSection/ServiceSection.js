import React, { useState } from "react";
import "./ServiceSection.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import seoIcon from "../../assets/seoIcon.png";
import socialIcon from "../../assets/socialIcon.png";
import ppcIcon from "../../assets/ppcIcon.png";
import youtubeIcon from "../../assets/youtubeIcon.png";
import marketingIcon from "../../assets/digital-marketing-promotion-advertising-svgrepo-com 1.png";

const serviceCards = [
  {
    title: "SEO",
    subtitle: "Search Engine Optimization",
    description: "Technical SEO | On-Page SEO | Off-Page SEO | Local SEO",
    appointments: "240+ Appointment Booked Today",
    icon: seoIcon,
  },
  {
    title: "Social",
    subtitle: "Social Media Marketing",
    description: "Facebook | Instagram | X | LinkedIn Pinterest",
    appointments: "240+ Appointment Booked Today",
    icon: socialIcon,
  },
  {
    title: "PPC",
    subtitle: "Pay Per Click",
    description: "Search Ads | Display Ads | Demand Gen PPC Ads| Video Ads | Lead Generation",
    appointments: "240+ Appointment Booked Today",
    icon: ppcIcon,
  },
  {
    title: "YouTube",
    subtitle: "Marketing",
    description: "Channel SEO | Skip-Non Skip able Ads | Increase Subscriber & Views",
    appointments: "240+ Appointment Booked Today",
    icon: youtubeIcon,
  }
];

const ServiceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % serviceCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + serviceCards.length) % serviceCards.length);
  };

  return (
    <section className="service-section">
      <div className="left-section">
        <h2 className="explore-title">
          Explore <br /> our <br /> <span>Service</span>
        </h2>
        <p className="explore-description">
          Explore our service and discover solutions designed to meet your unique needs.
          With a focus on quality and innovation, we turn your vision into reality.
        </p>
        <button className="appointment-btn">Book an Appointment</button>
      </div>

      <div className="right-section">
        <div className="digital-marketing-header">
          <img src={marketingIcon} alt="Digital Marketing" className="marketing-icon" />
          <h2 className="main-title">Digital Marketing</h2>
        </div>
        <p className="subtitle">
          Keep your lawn in top shape without lifting a finger and boost the appearance of your property.
        </p>

        <div className="service-slider">
          <button className="slider-nav prev" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          
          <div className="service-cards-container">
            {serviceCards.map((card, index) => (
              <div 
                key={index}
                className={`service-card ${index === currentSlide ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`
                }}
              >
                <img src={card.icon} alt={card.title} className="service-icon" />
                <h3 className="card-title">{card.title}</h3>
                <h4 className="card-subtitle">{card.subtitle}</h4>
                <p className="card-description">{card.description}</p>
                <p className="appointments">{card.appointments}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            ))}
          </div>

          <button className="slider-nav next" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>

        <div className="slider-dots">
          {serviceCards.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;