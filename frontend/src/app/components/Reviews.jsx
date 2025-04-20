"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Reviews({ tourId }) {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const reviewsPerPage = 3;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/reviews/all/`);

        if (!response.ok) {
          throw new Error(`Error fetching reviews: ${response.statusText}`);
        }

        const data = await response.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, [tourId]);

  const totalReviews = reviews.length;

  const prevReviews = () => {
    setStartIndex((prev) =>
      prev === 0
        ? Math.max(totalReviews - reviewsPerPage, 0)
        : prev - reviewsPerPage
    );
  };

  const nextReviews = () => {
    setStartIndex((prev) =>
      prev + reviewsPerPage >= totalReviews
        ? 0 // Wrap back to the start
        : prev + reviewsPerPage
    );
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  if (totalReviews === 0) {
    return <p className="text-center mt-10 text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="text-center mb-8">
        <h3 className="text-blue-500 text-sm uppercase tracking-wider font-semibold">
          Promotion
        </h3>
        <h2 className="text-3xl font-bold text-gray-800">
          See What Our Clients Say About Us
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevReviews}
          className="text-gray-500 hover:text-blue-600 transition p-2 sm:p-4"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>

        {visibleReviews.map((review, index) => (
          <div
            key={startIndex + index}
            className="bg-gray-100 p-6 rounded-xl shadow-md w-80 text-center sm:w-64"
          >
            <img
              src={review.image || "/assets/images/avatar.png"}
              alt="Client"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-3">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="mr-2 text-blue-400"
              />
              {review.quote || "No review text available"}
            </p>
            <h4 className="text-lg font-semibold text-gray-800">
              {review.name}
            </h4>
          </div>
        ))}

        <button
          onClick={nextReviews}
          className="text-gray-500 hover:text-blue-600 transition p-2 sm:p-4"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(totalReviews / reviewsPerPage) }).map(
          (_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-200 ease-in-out ${
                i * reviewsPerPage === startIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-blue-300"
              }`}
              onClick={() => setStartIndex(i * reviewsPerPage)}
            ></span>
          )
        )}
      </div>
    </div>
  );
}
