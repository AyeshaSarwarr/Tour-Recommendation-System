"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddTourPage() {
  const router = useRouter();

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerPerson, setPricePerPerson] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [season, setSeason] = useState("summer");
  const [tourType, setTourType] = useState("party");
  const [availability, setAvailability] = useState("");
  const [minGroupSize, setMinGroupSize] = useState("1");
  const [maxGroupSize, setMaxGroupSize] = useState("10");
  const [selectedTags, setSelectedTags] = useState([]);
  const [aiKeywords, setAiKeywords] = useState("");
  const [mainImage, setMainImage] = useState(null);

const TAGS_CHOICES = [
  ["adventure", "Adventure"],
  ["luxury", "Luxury"],
  ["beach", "Beach"],
  ["mountain", "Mountain"],
  ["cultural", "Cultural"],
  ["city_tour", "City Tour"],
];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price_per_person", pricePerPerson);
    formData.append("duration", duration);
    formData.append("location", location);
    formData.append("season", season);
    formData.append("tour_type", tourType);
    formData.append("availability", availability);
    formData.append("min_group_size", minGroupSize);
    formData.append("max_group_size", maxGroupSize);
    // Append tags
    selectedTags.forEach((tagId) => formData.append("tags", tagId));
    // AI keywords JSON list
    const keywordsArray = aiKeywords
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    keywordsArray.forEach((keyword) => formData.append("ai_keywords", keyword));
    // Main image file
    if (mainImage) formData.append("main_image", mainImage);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tours/`, {
        method: "POST",

        body: formData,
      });
      if (res.ok) {
        router.push("/dashboard");
      } else {
        console.error("Failed to save tour", await res.text());
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-semibold">Add New Tour Package</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            required
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Price per Person
            </label>
            <input
              type="number"
              step="0.01"
              required
              className="w-full border rounded px-3 py-2"
              value={pricePerPerson}
              onChange={(e) => setPricePerPerson(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Duration (days)
            </label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            required
            className="w-full border rounded px-3 py-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Season</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
            >
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="monsoon">Monsoon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tour Type</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={tourType}
              onChange={(e) => setTourType(e.target.value)}
            >
              <option value="party">Party</option>
              <option value="family">Family</option>
              <option value="dj_night">DJ Night</option>
              <option value="classical">Classical</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Available Spots
            </label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Min Group Size
            </label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={minGroupSize}
              onChange={(e) => setMinGroupSize(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Max Group Size
            </label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={maxGroupSize}
              onChange={(e) => setMaxGroupSize(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tags</label>
          <select
            multiple
            className="w-full border rounded px-3 py-2"
            value={selectedTags}
            onChange={(e) =>
              setSelectedTags(
                Array.from(e.target.selectedOptions, (opt) => opt.value)
              )
            }
          >
            {TAGS_CHOICES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            AI Keywords (comma-separated)
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={aiKeywords}
            onChange={(e) => setAiKeywords(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Main Image
          </label>

          <div className="flex items-center space-x-4">
            <label
              htmlFor="mainImage"
              className="cursor-pointer inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Choose Image
            </label>
            {mainImage && (
              <span className="text-sm text-gray-600">{mainImage.name}</span>
            )}
          </div>

          <input
            type="file"
            id="mainImage"
            className="hidden"
            onChange={(e) => setMainImage(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Save Tour
        </button>
      </form>
    </div>
  );
}
