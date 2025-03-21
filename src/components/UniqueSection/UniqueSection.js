import React from "react";
import "./UniqueSection.css";
import holisticIcon from "../../assets/holistic-icon.png";
import clientIcon from "../../assets/client-icon.png";
import innovativeIcon from "../../assets/innovative.png";
import expertIcon from "../../assets/expert.png";
import technologyIcon from "../../assets/technology.png";
import excellenceIcon from "../../assets/excellence.png";
import customizedIcon from "../../assets/customized.png";
import sustainableIcon from "../../assets/sustainable.png";
const featureCards = [
  {
    id: 1,
    title: "Holistic Solutions",
    description:
      "We provide end-to-end services that address all aspects of your needs, ensuring seamless integration and effective results.",
    iconSrc: holisticIcon,
    iconAlt: "Holistic solutions icon",
  },
  {
    id: 2,
    title: "Client-Centric Approach",
    description:
      "Your goals and satisfaction are our top priorities, driving us to craft tailored solutions that align seamlessly with your vision and exceed expectations.",
    iconSrc: clientIcon,
    iconAlt: "Client-centric icon",
  },
  {
    id: 3,
    title: "Innovative Thinking",
    description:
      "Our team is made up of highly skilled professionals with extensive experience & diverse expertise, guaranteeing quality, innovative solutions, and outstanding results in every project we undertake.",
    iconSrc: innovativeIcon,
    iconAlt: "Innovative thinking icon",
  },
  {
    id: 4,
    title: "Expert Team",
    description:
      "Our team consists of highly skilled professionals with diverse expertise, dedicated to delivering the highest quality of work and consistently exceeding expectations.",
    iconSrc: expertIcon,
    iconAlt: "Expert team icon",
  },
  {
    id: 5,
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest tools and technologies to stay ahead of industry trends and deliver modern solutions.",
    iconSrc: technologyIcon,
    iconAlt: "Technology icon",
  },
  {
    id: 6,
    title: "Commitment to Excellence",
    description:
      "Our dedication to quality and continuous improvement ensures outstanding results and long-term client satisfaction.",
    iconSrc: excellenceIcon,
    iconAlt: "Excellence icon",
  },
  {
    id: 7,
    title: "Customized Strategies",
    description:
      "We understand that every client is unique, so we design personalized strategies to meet specific goals and challenges.",
    iconSrc: customizedIcon,
    iconAlt: "Customized strategies icon",
  },
  {
    id: 8,
    title: "Sustainable Practices",
    description:
      "We prioritize solutions that are not only effective but also environmentally and socially responsible.",
    iconSrc: sustainableIcon,
    iconAlt: "Sustainable practices icon",
  },
];

const UniqueSection = () => {
  return (
    <div className="unique-section">
      {/* Left Side (Sticky Content) */}
      <div className="unique-left">
        <h2>
          What makes <br /> Us Unique?
        </h2>
        <p>
          At Phanom Professionals, we don't just offer services; we innovate,
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
        {featureCards.map((card) => (
          <div key={card.id} className="unique-card">
            <div className="icon-box">
              <img src={card.iconSrc} alt={card.iconAlt} />
            </div>
            <div className="text-box">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueSection;
