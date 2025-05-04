import React, { useEffect, useState } from "react";

export default function GalleryContent({ tourId }) {
  const [images, setImages] = useState([]);

useEffect(() => {
  const fetchImages = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/tours/${tourId}/gallery/`);
      const textData = await res.text();
      console.log("Response:", textData); // Log raw response for debugging

      const data = JSON.parse(textData);
      setImages(data.gallery || []);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  fetchImages();
}, [tourId]);

  if (images.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No images available for this tour.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((url, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <img
            src={url}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
