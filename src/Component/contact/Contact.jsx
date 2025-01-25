import React, { useEffect } from "react";
import "./Contact.css"; // Include your updated CSS file
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaCode, FaGithub, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <div className="contact-container" data-aos="fade-up">
      <h1 className="contact-title" data-aos="fade-up">Contact Me</h1>
      <p className="contact-name" data-aos="fade-up">
        <strong>Name:</strong> N. Rosan
      </p>
      <div className="contact-details">
        <p data-aos="fade-up">
          <FaCode className="contact-icon blue-icon" /> <strong>Role:</strong> Java Full Stack Developer
        </p>
        <p data-aos="fade-up">
          <FaMapMarkerAlt className="contact-icon blue-icon" /> Tirunelveli, Tamil Nadu, 627414
        </p>
        <p data-aos="fade-up">
          <FaEnvelope className="contact-icon blue-icon" />{" "}
          <a href="mailto:rosannatarajan.n@gmail.com">rosannatarajan.n@gmail.com</a>
        </p>
        <p data-aos="fade-up">
          <FaPhoneAlt className="contact-icon blue-icon" />{" "}
          <a href="tel:+919025735617">+91-9025735617</a>
        </p>
      </div>
      {/* GitHub, LinkedIn, and WhatsApp Icons */}
      <div className="contact-icons">
        <a
          href="https://github.com/Rosan009"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          data-aos="fade-up"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/rosan-natarajan09"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          data-aos="fade-up"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://wa.me/919025735617"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          data-aos="fade-up"
        >
          <FaWhatsapp className="icon whatsapp-icon" />
        </a>
      </div>
    </div>
  );
};
