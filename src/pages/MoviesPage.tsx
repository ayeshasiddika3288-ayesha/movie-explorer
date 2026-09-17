import { useEffect, useState } from "react";
import { getAllShows, searchShows, type Show } from "../api/tvmaze";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function MoviesPage() {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);

  // Load all shows on first render
  useEffect(() => {
    setLoading(true);
    getAllShows()
      .then((data) => setShows(data))
      .catch(() => setError("Failed to load movies. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  // Debounced search whenever query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      setError(null);

      const fetchData = query.trim()
        ? searchShows(query)
        : getAllShows();

      fetchData
        .then((data) => setShows(data))
        .catch(() => setError("Failed to load movies. Please try again."))
        .finally(() => setLoading(false));
    }, 500); // wait 500ms after user stops typing

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-xl mx-auto">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {loading && (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-gray-500">Loading movies...</p>
  </div>
)}

      {!loading && error && (
        <p className="text-center text-red-500 py-10">{error}</p>
      )}

      {!loading && !error && shows.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No movies found. Try a different search.
        </p>
      )}

      {!loading && !error && shows.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shows.map((show) => (
            <MovieCard
              key={show.id}
              show={show}
              onSeeDetails={(s) => setSelectedShow(s)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}

export default MoviesPage;