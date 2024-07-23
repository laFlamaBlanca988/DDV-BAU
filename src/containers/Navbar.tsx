import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        setIsSticky(window.scrollY > navbarRef.current.clientHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`bg-[#FFF] text-black h-[80px] items-center flex px-8 text-2xl transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"
      }`}
    >
      <div className="container mx-auto flex justify-between text-center items-center">
        <div className="text-xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/about"
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-700"
          >
            About
          </Link>
          <Link
            to="/gallery"
            onClick={() => scrollToSection("gallery")}
            className="hover:text-gray-700"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-700"
          >
            Contact
          </Link>
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
            onClick={() => scrollToSection("about")}
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            About
          </a>
          <a
            href="#gallery"
            onClick={() => scrollToSection("gallery")}
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="block text-gray-300 hover:text-white px-2 py-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
