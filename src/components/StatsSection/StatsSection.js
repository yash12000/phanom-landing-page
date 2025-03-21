import React, { useEffect, useState } from "react";
import "./StatsSection.css";

const statsData = [
  [
    { value: "3x", desc: "Faster Release Cycle" },
    { value: "40%", desc: "Reduction in manual administration time" },
    { value: "60%", desc: "Software Development Reusability" },
    { value: "40%", desc: "Cost Optimization" },
  ],
  [
    { value: "5x", desc: "Increased Deployment Speed" },
    { value: "50%", desc: "Enhanced Automation Efficiency" },
    { value: "70%", desc: "Improved Code Maintainability" },
    { value: "30%", desc: "Lower Operational Costs" },
  ],
];

const StatsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % statsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats-container">
      {statsData[currentIndex].map((stat, index) => (
        <div className="stat-box" key={index}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-desc">{stat.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
