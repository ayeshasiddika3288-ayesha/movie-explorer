import type { Show } from "../api/tvmaze";

interface MovieModalProps {
  show: Show | null;
  onClose: () => void;
}

function MovieModal({ show, onClose }: MovieModalProps) {
  if (!show) return null;

  const backdropUrl =
    show.image?.original ||
    show.image?.medium ||
    "https://via.placeholder.com/600x350?text=No+Image";
  const rating = show.rating?.average ?? "N/A";
  const year = show.premiered ? show.premiered.split("-")[0] : "N/A";

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-900 rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold shadow-md z-10"
        >
          ✕
        </button>

        <img
          src={backdropUrl}
          alt={show.name}
          className="w-full h-64 sm:h-80 object-cover rounded-t-lg"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {show.name}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {year}</span>
            <span>📌 Status: {show.status}</span>
          </div>

          {show.genres && show.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {show.genres.map((genre) => (
                <span
                  key={genre}
                  className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-semibold text-gray-900 mb-2">Overview:</h3>
          <div
            className="text-gray-700 text-sm leading-relaxed mb-6"
            dangerouslySetInnerHTML={{
              __html: show.summary || "No summary available.",
            }}
          />

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-5 py-2 rounded-md transition-colors"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;