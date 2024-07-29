import { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm"; // Make sure the path is correct
// import Map from "../components/Map";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import styles from "../components/Map.module.scss";
import "../styles/animations.css";
export default function Contact() {
  const contactFormRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const contactFormElement = contactFormRef.current;
    const mapElement = mapRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);

          if (entry.isIntersecting) {
            if (entry.target.id === "contactLeftContainer") {
              entry.target.classList.add("animate-from-left");
            } else if (entry.target.id === "contactRightContainer") {
              entry.target.classList.add("animate-from-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold to determine when the element should start the animation
      }
    );

    if (contactFormElement) observer.observe(contactFormElement);
    if (mapElement) observer.observe(mapElement);

    return () => {
      if (contactFormElement) observer.unobserve(contactFormElement);
      if (mapElement) observer.unobserve(mapElement);
    };
  }, []);

  return (
    <>
      <div id="contact" className="p-8">
        <div className="text-center text-3xl font-semibold mb-8">
          Contact Us
        </div>
        <div className="flex justify-center mb-8 space-x-6 text-center">
          <div id="address" className="text-lg w-[200px]">
            <div className="rounded-full bg-[#ff792d] mx-auto w-[50px] h-[50px] flex justify-center items-center text-black">
              <IoLocationSharp />
            </div>
            <p className="mt-2 text-[#ff792d]">Address:</p>
            <p className="mt-2">123 Main Street, Berlin, Germany</p>
          </div>
          <div id="phone" className="text-lg w-[200px]">
            <div className="rounded-full bg-[#ff792d] mx-auto w-[50px] h-[50px] flex justify-center items-center text-black">
              <FaPhone />
            </div>
            <p className="mt-2 text-[#ff792d]">Phone:</p>
            <p className="mt-2">+ (123) 456-7890</p>
          </div>
          <div id="email" className="text-lg w-[200px]">
            <div className="rounded-full bg-[#ff792d] mx-auto w-[50px] h-[50px] flex justify-center items-center text-black">
              <SiMinutemailer />
            </div>
            <p className="mt-2 text-[#ff792d]">Email:</p>
            <p className="mt-2">contact@example.com</p>
          </div>
        </div>
        <div
          id="getInTouch"
          className="text-3xl font-semibold mb-8l text-center mb-24"
        >
          Get in touch with us
        </div>
        <div className="flex">
          <div
            id="contactLeftContainer"
            ref={contactFormRef}
            className="w-full md:w-1/2 pr-4"
          >
            <ContactForm />
          </div>
          <div
            id="contactRightContainer"
            ref={mapRef}
            className="w-full md:w-1/2 pl-4"
          >
            <div id="map" className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23818.466109979227!2d13.389314000000001!3d52.514664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2071b82d9efb5%3A0x1e2c0e1d3739d730!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1652330584621!5m2!1sen!2sus&markers=color:red%7Clabel:%7C52.521917,13.413215"
                width="100%"
                height="498"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
