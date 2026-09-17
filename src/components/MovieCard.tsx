import type { Show } from "../api/tvmaze";

interface MovieCardProps {
  show: Show;
  onSeeDetails: (show: Show) => void;
}

function MovieCard({ show, onSeeDetails }: MovieCardProps) {
  const posterUrl = show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
  const year = show.premiered ? show.premiered.split("-")[0] : "N/A";
  const rating = show.rating?.average ?? "N/A";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
      <img
        src={posterUrl}
        alt={show.name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-1">
          {show.name}
        </h3>
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
          <span>⭐ {rating}</span>
          <span>📅 {year}</span>
        </div>
        <button
          onClick={() => onSeeDetails(show)}
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;