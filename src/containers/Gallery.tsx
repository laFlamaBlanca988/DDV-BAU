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
    <section id="gallery" className="bg-black mb-20 pt-20">
      <div className="relative flex justify-center gap-0 overflow-hidden">
        {images.map((src, index) => {
          const isHovered = index === hoveredIndex;
          return (
            <div
              key={index}
              className={`relative transition-all duration-300  cursor-pointer ${
                isHovered ? "z-10" : ""
              }`}
              style={{
                width: isHovered ? "30%" : "calc((100% - 30%) / 3)",
                transition: "width 0.6s ease",
                overflow: "hidden",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt={`Construction ${index}`}
                className="w-full h-[500px] transition-transform duration-300"
                style={{
                  filter: isHovered ? "brightness(1)" : "brightness(0.7)", // Change brightness on hover
                  objectFit: "cover", // Ensure the image covers the div
                  transform: `scale(${isHovered ? 1 : 1})`, // Maintain scale
                  transition: "filter 0.6s ease", // Smooth brightness transition
                }}
              />
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
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
