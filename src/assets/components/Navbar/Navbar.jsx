import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-blue-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold sm:text-2xl">Car Rental Service</h1>
          <div className="md:flex hidden space-x-8">
            <Link
              to="/"
              className="hover:text-blue-300 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-300 transition-colors duration-300 ease-in-out"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-300 transition-colors duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-xl focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-800 shadow-md md:hidden">
            <Link
              to="/"
              className="block p-4 hover:text-blue-300 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block p-4 hover:text-blue-300 transition-colors duration-300 ease-in-out"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block p-4 hover:text-blue-300 transition-colors duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
