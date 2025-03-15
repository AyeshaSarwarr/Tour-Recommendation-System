import React from "react";
import "./assets/AboutUs.css"; // Ensure this file contains your styles
import Promotion from "../components/Promotion";
import VideoComponent from "../components/VideoComponent";
import TourPackages from "../components/TourPackages";
import Reviews from "../components/Reviews";
import FooterSection from "../components/FooterSection";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="start">
      {/* Navigation Bar */}
      <header>
        <div className="logo">Travel</div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/aboutus" className="active">About</Link></li>
            <li><a href="#">Services ▼</a></li>
            <li><a href="#">Upcoming Packages</a></li>
          </ul>
        </nav>
        <a href="#" className="contact-btn">Get in Touch</a>
      </header>

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
