import React, { useEffect, useRef } from 'react';
import './AnimationSection.css';

const AnimationSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const animatedElements = containerRef.current.querySelectorAll('.animation-item');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="animation-section" ref={sectionRef}>
      <div className="animation-container" ref={containerRef}>
        <div className="animation-item prototype-card">
          <div className="card-content">
            <h3>Prototype Mode</h3>
            <p>Preview animations and interactions in real-time</p>
          </div>
          <div className="prototype-screen">
            <div className="screen-content">
              <div className="screen-element"></div>
              <div className="screen-element"></div>
              <div className="screen-element"></div>
            </div>
          </div>
        </div>

        <div className="animation-item sticky-card">
          <div className="card-content">
            <h3>Sticky Scroll</h3>
            <p>Create engaging scroll-based experiences</p>
          </div>
          <div className="sticky-demo">
            <div className="sticky-element"></div>
          </div>
        </div>

        <div className="animation-item smooth-card">
          <div className="card-content">
            <h3>Smooth Animations</h3>
            <p>Trigger beautiful animations on scroll</p>
          </div>
          <div className="smooth-demo">
            <div className="smooth-element"></div>
            <div className="smooth-element"></div>
            <div className="smooth-element"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationSection; 