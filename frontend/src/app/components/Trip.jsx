import React from "react";
import "./CSS/Trip.css";
import Link from "next/link";


const Trip = () => {
  
  return (
    <div className="TripBody">
      <section className="adventure-section">
        {/* Left Side: Text Content */}
        <div className="text-content">
          <p className="category">ADVENTURE TRIPS</p>
          <h2 className="title">
            Our Thrilling <br /> <span>Adventure Expeditions</span>
          </h2>
          <p className="description">
            Embark on an adrenaline-fueled journey to some of the most
            exhilarating destinations. From mountain treks to wild safaris, our
            adventure tours offer the perfect blend of thrill, nature, and
            exploration. Get ready to challenge yourself and create memories
            that will last a lifetime!
          </p>
          <Link href="/book_tour" passHref>
            <button className="bttn">View Packages</button>
          </Link>
        </div>

        {/* Right Side: Styled Image */}
        <div className="image-container">
          <div className="arch-image">
            <img src="/assets/images/trip.png" alt="Adventure" />
          </div>
          <p className="image-label">Adventure Expeditions</p>
        </div>
      </section>
    </div>
  );
};

export default Trip;
