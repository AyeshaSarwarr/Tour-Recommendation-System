"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ManagePackages() {
  const router = useRouter();
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tours");
      setTours(response.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  const handleDelete = async (tourId) => {
    if (!window.confirm("Are you sure you want to delete this tour?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/tours/${tourId}/`);
      alert("Tour deleted successfully!");
      fetchTours();
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  const handleUpdate = (tourId) => {
      router.push(`/update_package/${tourId}`);
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        background: "linear-gradient(to bottom, #e3f2fd, #fff)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.5rem",
          color: "#0d47a1",
        }}
      >
        ✈️ Manage Tour Packages
      </h2>

      {tours.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          No tours available.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {tours.map((tour) => (
            <div
              key={tour.id}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {tour.main_image && (
                <img
                  src={`${tour.main_image}`}
                  alt={tour.title}
                  style={{
                    width: "100%",
                    height: "300px", // or 250px+
                    objectFit: "cover",
                  }}
                />
              )}
              <div style={{ padding: "20px" }}>
                <h3 style={{ margin: "10px 0", color: "#1976d2" }}>
                  {tour.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: "1.5",
                    minHeight: "60px",
                  }}
                >
                  {tour.description}
                </p>
                <p style={{ fontWeight: "bold", margin: "15px 0" }}>
                  💰 Price: ${tour.price_per_person}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() => handleUpdate(tour.id)}
                    style={{
                      flex: 1,
                      backgroundColor: "#2196f3",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      transition: "background 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1976d2")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#2196f3")
                    }
                  >
                    ✏️ Update
                  </button>
                  <button
                    onClick={() => handleDelete(tour.id)}
                    style={{
                      flex: 1,
                      backgroundColor: "#e53935",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      transition: "background 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#c62828")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#e53935")
                    }
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManagePackages;
