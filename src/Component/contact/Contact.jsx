import React from "react";
import "./Contact.css"; // Include your updated CSS file
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaCode, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-name">
        <strong>Name:</strong> N. Rosan
      </p>
      <div className="contact-details">
        <p>
          <FaCode className="contact-icon blue-icon" /> <strong>Role:</strong> Java Full Stack Developer
        </p>
        <p>
          <FaMapMarkerAlt className="contact-icon blue-icon" /> Tirunelveli, Tamil Nadu, 627414
        </p>
        <p>
          <FaEnvelope className="contact-icon blue-icon" />{" "}
          <a href="mailto:rosannatarajan.n@gmail.com">rosannatarajan.n@gmail.com</a>
        </p>
        <p>
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
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/rosan-natarajan09"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://wa.me/919025735617"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaWhatsapp className="icon whatsapp-icon" />
        </a>
      </div>
    </div>
  );
};
