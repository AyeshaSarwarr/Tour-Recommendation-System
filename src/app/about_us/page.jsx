import React from "react";
import "@/app/about_us/AboutUs.css"; // Ensure this file contains your styles
import Promotion from "@/app/components/Promotion";
import VideoComponent from "@/app/components/VideoComponent";
import TourPackages from "@/app/components/TourPackages";
import Reviews from "@/app/components/Reviews";
import FooterSection from "@/app/components/FooterSection";

const AboutUs = () => {
  return (
    <div className="start">
    
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p>READ</p>
          <h1>About Us</h1>
        </div>
      </section>

      {/* Other Components */}
      <Promotion />
      <VideoComponent />
      <TourPackages />
      <Reviews />
      <FooterSection />
    </div>
  );
};

export default AboutUs;
