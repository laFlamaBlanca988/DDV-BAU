import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFF] text-black p-6 text-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#about"
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            About
          </a>
          <a
            href="#gallery"
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
