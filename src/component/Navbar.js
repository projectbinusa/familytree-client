import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo dan Menu Utama */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.tadl.org/sites/default/files/styles/blog_featured/public/2023-10/familysearch.png?itok=K0NIjy4n"
              className="h-8"
              alt="Logo"
            />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              FamilySearch
            </span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Tombol Aksi: Login dan Create Account */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/sign-in"
            className="text-gray-800 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
          >
            SIGN IN
          </Link>
          <Link
            to="/create-account"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
          >
            CREATE ACCOUNT
          </Link>
        </div>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/sign-in"
              className="text-gray-800 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
            >
              SIGN IN
            </Link>
            <Link
              to="/create-account"
              className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
            >
              CREATE ACCOUNT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
