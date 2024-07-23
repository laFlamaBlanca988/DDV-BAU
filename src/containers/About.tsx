import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = aboutRef.current; // Copy the ref to a local variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className="p-20">
      <h1
        className={`text-6xl text-center mb-10 ${
          isInView ? "slide-in-from-right" : ""
        }`}
      >
        About Us
      </h1>
      <p
        className={`text-xl leading-normal max-w-[1000px] text-center m-auto ${
          isInView ? "animate-from-bottom-left" : ""
        }`}
      >
        At our Construction Company, we are dedicated to turning your vision
        into reality. With years of experience and a commitment to excellence,
        we specialize in delivering high-quality construction services. Our team
        of skilled professionals ensures that every project is completed on
        time, within budget, and to the highest standards. From residential to
        commercial projects, we prioritize safety, integrity, and customer
        satisfaction in everything we do. Trust us to build your future.
      </p>
    </div>
  );
}
