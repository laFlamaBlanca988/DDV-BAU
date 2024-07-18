import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#000000E6] p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#gallery" className="text-gray-300 hover:text-white">
            Gallery
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
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
