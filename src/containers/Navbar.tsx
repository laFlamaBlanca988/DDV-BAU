import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`bg-transparent text-white h-[80px] flex items-center px-6 md:px-8 text-base md:text-lg transition-all duration-300 z-50 absolute top-0 left-0 w-full`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-semibold white">Logo</div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/about"
            onClick={() => scrollToSection("about")}
            className="hover:text-[#ff792d] hover:underline transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/gallery"
            onClick={() => scrollToSection("gallery")}
            className="hover:text-[#ff792d] hover:underline transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#ff792d] hover:underline transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-black focus:outline-none"
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
        <div className="md:hidden mt-4 space-y-2">
          <a
            href="#about"
            onClick={() => scrollToSection("about")}
            className="block text-gray-600 hover:text-black hover:underline px-4 py-2 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#gallery"
            onClick={() => scrollToSection("gallery")}
            className="block text-gray-600 hover:text-black hover:underline px-4 py-2 transition-colors duration-300"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="block text-gray-600 hover:text-black hover:underline px-4 py-2 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
