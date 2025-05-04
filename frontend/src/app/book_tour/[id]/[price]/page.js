"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const BookTour = () => {
  const { id, price } = useParams();

  // Retrieve user data from localStorage or global state
  const userId = localStorage.getItem("user_id"); // Assuming you store the user ID after login

  const [formData, setFormData] = useState({
    phone: "",
    date: "",
    tickets: "",
    tourId: id || "", // Ensure tourId is correctly populated
    userId: userId || "", // Attach logged-in user's ID
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const today = new Date();
      const formattedDate = today
        .toLocaleDateString("en-GB")
        .split("/")
        .join("-");
      setFormData((prev) => ({
        ...prev,
        tourId: id,
        date: formattedDate,
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(formData.tickets) <= 0 || isNaN(parseInt(formData.tickets))) {
      setError("Please enter a valid number of tickets (1 or more).");
      return;
    }

    try {
      // Send the formData (including userId) to the backend
      await axios.post("/api/bookings/create/", formData);
      alert("Tour booked successfully!");
    } catch (err) {
      console.error("Booking error:", err);
      setError("Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/assets/images/bgImage.jpg')] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-2 animate-fadeIn">
          Book This Tour
        </h2>
        <p className="text-gray-600 text-center mb-4 animate-fadeIn delay-75">
          Explore the stunning beauty of Swat Valley with us.
        </p>
        {price && (
          <p className="text-center text-xl font-semibold text-blue-700 mb-4">
            Tour Price: ${price}
          </p>
        )}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            suppressHydrationWarning
            type="hidden"
            name="date"
            value={formData.date}
          />

          <input
            type="number"
            name="tickets"
            value={formData.tickets}
            onChange={handleChange}
            placeholder="Number of People"
            min="1"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition duration-300 shadow-lg hover:bg-green-600"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTour;
