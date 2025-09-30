import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <Link to="/" className="text-xl font-medium tracking-tight hover:opacity-60 transition-opacity">
              Anirudh A.
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm tracking-wide transition-opacity ${
                  isActive('/') ? 'opacity-100 font-medium' : 'opacity-50 hover:opacity-100'
                }`}
              >
                Work
              </Link>
              <Link
                to="/about"
                className={`text-sm tracking-wide transition-opacity ${
                  isActive('/about') ? 'opacity-100 font-medium' : 'opacity-50 hover:opacity-100'
                }`}
              >
                About
              </Link>
              <Link
                to="/resume"
                className={`text-sm tracking-wide transition-opacity ${
                  isActive('/resume') ? 'opacity-100 font-medium' : 'opacity-50 hover:opacity-100'
                }`}
              >
                Resume
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">© 2024 Anirudh A. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/rudhsy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/rudhsy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
