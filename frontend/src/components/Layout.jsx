import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isWorkPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#0f0f10] text-zinc-100">
      {/* Floating Navigation Menu */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <nav className="backdrop-blur-glass bg-zinc-900/80 border border-zinc-800 px-6 py-4 elevation-2" style={{ borderRadius: '28px' }}>
          <div className="flex items-center space-x-8">
            {/* Name - shows in menu when scrolled on work page */}
            {(scrolled && isWorkPage) && (
              <span className="text-base font-medium tracking-tight animate-in fade-in slide-in-from-left-2">
                Anirudh
              </span>
            )}
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className={`text-sm tracking-wide transition-all duration-200 ${
                  isActive('/') ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Work
              </Link>
              <Link
                to="/about"
                className={`text-sm tracking-wide transition-all duration-200 ${
                  isActive('/about') ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                }`}
              >
                About
              </Link>
              <Link
                to="/resume"
                className={`text-sm tracking-wide transition-all duration-200 ${
                  isActive('/resume') ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Resume
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-28">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-zinc-500">© 2024 Anirudh A. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/rudhsy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/rudhsy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
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
