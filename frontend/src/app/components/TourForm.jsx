import { useState, useEffect } from "react";

export default function TourForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setPrice(initialData.price);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;
    onSubmit({ id: initialData?.id || null, title, price });
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Tour Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        type="submit"
      >
        {initialData ? "Update Tour" : "Add Tour"}
      </button>
    </form>
  );
}
