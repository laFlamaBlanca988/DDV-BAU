// src/components/Gallery.tsx

import { useState } from "react";
import gal1 from "../assets/gal-1.jpg";
import gal2 from "../assets/gal-2.jpg";
import gal3 from "../assets/gal-3.jpg";
import gal4 from "../assets/gal-4.jpg";

const images: string[] = [gal1, gal2, gal3, gal4];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (): void => {
    setHoveredIndex(null);
  };

  return (
    <section className="mb-20 bg-gray-100">
      <div className="relative flex gap-0 overflow-hidden">
        {images.map((src, index) => {
          const isHovered = index === hoveredIndex;
          return (
            <div
              key={index}
              className={`relative transition-transform duration-300 ${
                isHovered ? "z-10" : ""
              }`}
              style={{
                width: isHovered ? "calc(25% + 20%)" : "25%", // Adjust width
                transition: "width 0.3s ease", // Smooth width transition
                overflow: "hidden", // Hide overflow to prevent layout issues
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt={`Construction ${index}`}
                className={`w-full h-[350px] object-contain transition-transform duration-300 ${
                  isHovered ? "scale-100" : "scale-100"
                }`}
                style={{
                  filter: "brightness(0.7)",
                  transform: `scale(${isHovered ? 1.2 : 1})`, // Adjust scale on hover
                }}
              />
              {/* Optional overlay if needed */}
              <div
                className={`absolute inset-0 bg-black opacity-40 transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-40"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
