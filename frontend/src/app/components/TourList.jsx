import TourCard from "./TourCard";

export default function TourList({ tours, onEdit, onDelete }) {
  if (tours.length === 0) {
    return <p className="text-gray-500">No tours added yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          tour={tour}
          onEdit={() => onEdit(tour)}
          onDelete={() => onDelete(tour.id)}
        />
      ))}
    </div>
  );
}
