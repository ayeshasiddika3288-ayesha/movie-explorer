import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            DISCOVER MOVIES
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Explore and discover your favorite movies and TV shows from
            around the world, all in one place.
          </p>
          <Link
            to="/movies"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            Explore Now
          </Link>
        </div>

        {/* decorative glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </section>

      {/* Optional: quick info section below hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🔍 Search
            </h3>
            <p className="text-gray-600">
              Find any movie or show by title in seconds.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ⭐ Ratings
            </h3>
            <p className="text-gray-600">
              Check ratings before you hit play.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🎬 Details
            </h3>
            <p className="text-gray-600">
              Get full details in one click.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;