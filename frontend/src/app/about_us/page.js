"use client";
import React from "react";
import Promotion from "@/app/components/Promotion";
import VideoComponent from "@/app/components/VideoComponent";
import TourPackages from "@/app/components/TourPackages";
import Reviews from "@/app/components/Reviews";
import FooterSection from "@/app/components/FooterSection";
import Navbar from "@/app/components/Navbar";

const AboutUs = () => {
  return (
    <div
      className="w-full h-screen bg-white bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/images/Beach.jpg)" }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="w-full h-screen flex justify-center items-center text-center bg-black bg-opacity-30 text-white">
        <div className="hero-content">
          <p className="text-sm uppercase tracking-wider">READ</p>
          <h1 className="text-6xl font-semibold font-cursive">About Us</h1>
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
