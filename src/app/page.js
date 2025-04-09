// "use client";

// import { useEffect, useState } from "react";
// import api from "../utils/api";
// import LandingPage from "../app/Pages/Home";
// import AboutUs from "./pages/aboutus/page";
// import LogIn from "../app/Pages/Login";
// import SignUp from "../app/Pages/SignUp";
// import BuildPackageForm from "@/app/pages/BuildPackageForm";
// import Booktour from "./pages/Booktour";

// export default function Home() {
//   // const [data, setData] = useState(null);

//   // useEffect(() => {
//   //   api.get("/api/test-endpoint/")  // ✅ Corrected endpoint
//   //     .then((response) => setData(response.data))
//   //     .catch((error) => console.error("Error fetching data:", error));
//   // }, []);

//   return (
//     // <div>
//     //   <h1>Next.js with Django API</h1>
//     //   <pre>{JSON.stringify(data, null, 2)}</pre>
//     // </div>
//     // <LandingPage />
//     // <BuildPackageForm/>
//     <Booktour />
//     // <AboutUs></AboutUs>
//     // <LogIn></LogIn>
//     // <SignUp></SignUp>
//   );
// }

import React from "react";
import "@/app/Home.css"; 
import Services from "@/app/components/Services";
import Trip from "@/app/components/Trip";
import Bookings from "@/app/components/Bookings";
import Tours from "@/app/components/Tours";
import Recomendations from "@/app/components/Recomendations";
import TourPackages from "@/app/components/TourPackages";
import Reviews from "@/app/components/Reviews";
import FooterSection from "@/app/components/FooterSection";
import Navbar from "@/app/components/Navbar";
import Image from "next/image"; 

function Home() {
  return (
    <>
      <Navbar />
      <section className="myContent">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>No matter where you’re going to, we’ll take you there</h1>
          <form className="search-bar">
            <input type="text" placeholder="Where to?" />
            <select>
              <option>Travel Type</option>
              <option>Adventure</option>
              <option>Relaxation</option>
            </select>
            <select>
              <option>Duration</option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <Services />
      <Trip />
      <Bookings />

      <div style={{ width: "100%", position: "relative" }}>
        <Image
          src="/assets/images/holiday.png"
          alt="Holiday"
          width={0} // Automatically adjusts width
          height={0} // Automatically adjusts height
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <Tours />
      <Recomendations />
      <TourPackages />
      <Reviews />
      <FooterSection />
    </>
  );
}

export default Home;
