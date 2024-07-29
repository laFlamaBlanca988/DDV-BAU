import { useState, useEffect } from "react";
import imageOne from "../assets/hero-1.jpg";
import imageTwo from "../assets/hero-2.jpg";
import "../styles/animations.css";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timer: number;

    if (phase === 0) {
      timer = window.setTimeout(() => setPhase(1), 3000);
    } else if (phase === 1) {
      timer = window.setTimeout(() => setPhase(2), 1000);
    } else if (phase === 2) {
      timer = window.setTimeout(() => setPhase(3), 3000);
    }

    return () => window.clearTimeout(timer);
  }, [phase]);

  return (
    <section className="relative w-full h-screen overflow-hidden pt-[80px]">
      {phase < 3 ? (
        <>
          {/* First Background Image */}
          <div
            className={`absolute inset-0 ${
              phase === 2
                ? "animate-to-right-and-back"
                : phase === 0
                ? "animate-from-right-and-back"
                : "bg-black"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center`}
              style={{ backgroundImage: `url(${imageOne})` }}
            ></div>
          </div>

          {/* First Text Container */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-6 bg-black bg-opacity-50">
            <div
              className={`${
                phase === 2
                  ? "animate-to-left-and-back"
                  : phase === 0
                  ? "animate-from-left-and-back"
                  : ""
              }`}
            >
              <h1 className="hero-text text-4xl md:text-5xl font-bold text-white mb-4">
                Building Dreams, Creating Reality
              </h1>
              <p className="text-lg md:text-xl text-white">
                Your trusted partner in construction excellence.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Second Background Image */}
          <div className="absolute inset-0 animate-from-right-and-back">
            <div
              className={`absolute inset-0 bg-cover bg-center`}
              style={{ backgroundImage: `url(${imageTwo})` }}
            ></div>
          </div>

          {/* Second Text Container */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-6 bg-black bg-opacity-50">
            <div className="animate-from-left-and-back">
              <h1 className="hero-text text-4xl md:text-5xl font-bold text-white mb-4">
                Excellence in Every Build
              </h1>
              <p className="text-lg md:text-xl text-white">
                Quality craftsmanship and innovative solutions.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
