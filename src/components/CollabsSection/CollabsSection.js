import React from "react";
import { motion } from "framer-motion";
import "./CollabsSection.css";
import collabsImage from "../../assets/Collabs.png";

const CollabsSection = () => {
  return (
    <div className="collabs-container">
      <div className="marquee-wrapper">
        <motion.div
          className="marquee"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          <img
            src={collabsImage}
            alt="Collabs Logos"
            className="collabs-logos"
          />
          <img
            src={collabsImage}
            alt="Collabs Logos"
            className="collabs-logos"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CollabsSection;
