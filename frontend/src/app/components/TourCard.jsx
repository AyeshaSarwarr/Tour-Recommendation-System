export default function TourCard({ tour, onEdit, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">{tour.title}</h2>
      <p className="text-gray-600">Price: ${tour.price}</p>
      <div className="mt-3 space-x-2">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
