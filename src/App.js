import React from "react";
import Header from "./components/Header/Header.js";
import HeroSection from "./components/HeroSection/HeroSection.js";
import CollabsSection from "./components/CollabsSection/CollabsSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import VPSHostingSection from "./components/VPSHostingSection/VPSHostingSection";
import StatsSection from "./components/StatsSection/StatsSection";
import UniqueSection from "./components/UniqueSection/UniqueSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Mission from "./components/Mission/Mission.js";
import ConnectSection from "./components/ConnectSection/ConnectSection";
import VideoTestimonials from "./components/VideoTestimonials/VideoTestimonials.js";
import BlogSection from "./components/BlogSection/BlogSection.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "#fff" }}>
      <Header />
      <HeroSection />
      <CollabsSection />
      <ServiceSection />
      <div style={{ marginBottom: "50px" }}>
        <VPSHostingSection />
      </div>
      <StatsSection />
      <div style={{ marginBottom: "50px", backgroundColor: "#fff" }}></div>
      <UniqueSection />
      <WhyChooseUs />
      <Mission />
      <ConnectSection />
      <VideoTestimonials />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
