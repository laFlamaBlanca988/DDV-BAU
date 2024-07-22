import React from "react";

interface HeroContentProps {
  image: string;
  phase: number;
  title: string;
  subtitle: string;
}

export const HeroContent: React.FunctionComponent<HeroContentProps> = ({
  image,
  phase,
  title,
  subtitle,
}) => {
  return (
    <>
      {/* Background Image */}
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
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>

      {/* Text Container */}
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
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </>
  );
};
