import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          🎬 <span>MovieExplorer</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`hidden sm:block text-sm transition-colors ${
              location.pathname === "/"
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
              location.pathname === "/movies"
                ? "bg-blue-700 text-white ring-2 ring-blue-400"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Movies
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;