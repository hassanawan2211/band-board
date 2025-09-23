// components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaMusic, FaSearch, FaUserCircle, FaTimes, FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <nav className="bg-gray-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        {/* Left Section (Logo) */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-bold z-10"
        >
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-lg">
            <FaMusic className="text-white" />
          </div>
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            BandBoard
          </span>
        </Link>

        {/* Middle Section (Links) - Desktop */}
        <div className="hidden md:flex gap-8">
          <Link 
            href="/library" 
            className="hover:text-green-400 transition-colors duration-300 font-medium py-2 relative group"
          >
            Library
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/playlists" 
            className="hover:text-green-400 transition-colors duration-300 font-medium py-2 relative group"
          >
            Playlists
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/favorites" 
            className="hover:text-green-400 transition-colors duration-300 font-medium py-2 relative group"
          >
            Favorites
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right Section (Search + User) */}
        <div className="flex items-center gap-5">
          {/* Search bar that expands when clicked */}
          <div className={`relative ${isSearchOpen ? 'w-40 sm:w-52' : 'w-10'} transition-all duration-300`}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-gray-800 text-white py-1.5 px-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 ${
                isSearchOpen ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            />
            <button
              onClick={toggleSearch}
              className="absolute right-0 top-0 h-full w-10 flex items-center justify-center hover:text-green-400 transition-colors"
            >
              {isSearchOpen ? <FaTimes size={16} /> : <FaSearch size={16} />}
            </button>
          </div>

          <button className="hover:text-green-400 transition-colors p-1.5 rounded-full hover:bg-gray-700">
            <FaUserCircle size={20} />
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-700 ml-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden bg-gray-800 text-white fixed w-full top-16 z-40 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <Link 
            href="/library" 
            className="py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Library
          </Link>
          <Link 
            href="/playlists" 
            className="py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Playlists
          </Link>
          <Link 
            href="/favorites" 
            className="py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Favorites
          </Link>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}