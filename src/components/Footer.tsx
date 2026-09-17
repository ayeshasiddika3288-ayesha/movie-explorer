function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-semibold text-white">
          🎬 MovieExplorer
        </div>

        <p className="text-sm text-gray-400">
          © 2026 MovieExplorer. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;