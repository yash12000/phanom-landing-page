import React from "react";
import "./VideoTestimonials.css";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
import testimonial4 from "../../assets/testimonial4.png";

const testimonials = [
  {
    name: "This Kumar",
    role: "CEO, Street Smart 222",
    image: testimonial1,
    hasPlayButton: true,
  },
  {
    name: "That Kumari",
    role: "CEO, Bee Bee 444",
    image: testimonial2,
  },
  {
    name: "Those Kumar",
    role: "Co Founder, Smart 555",
    image: testimonial3,
    hasPlayButton: true,
  },
  {
    name: "These Kumari",
    role: "Co Founder, To For 666",
    image: testimonial4,
    hasPlayButton: true,
  },
];

const VideoTestimonials = () => {
  return (
    <div className="video-testimonials">
      <h2 className="testimonial-title">
        Real Stories, Real Impact: Our Users Share Their Experience
      </h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
              {testimonial.hasPlayButton && (
                <div className="play-button">▶</div>
              )}
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
