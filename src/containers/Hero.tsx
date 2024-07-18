// src/components/Hero.tsx

import { useState, useEffect } from "react";
import imageOne from "../assets/hero-1.jpg";
import imageTwo from "../assets/hero-2.jpg";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState<string>(imageOne);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === imageOne ? imageTwo : imageOne
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 fade`}
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          {/* Background image */}
        </div>
      </div>

      {/* Text Container */}
      <div className="absolute inset-0 flex items-center justify-center text-center p-6 bg-black bg-opacity-50">
        <div className="w-full max-w-2xl slide-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Construction Company
          </h1>
          <p className="text-lg md:text-xl text-white">
            Building your future with excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
