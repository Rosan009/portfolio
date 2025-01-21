import React from 'react';
import '../content/Content.css';
import { FaEnvelope, FaPhoneAlt, FaFileDownload } from 'react-icons/fa';
import profileImage from '../Img/IMG_20240217_221023_251-removebg-preview.png'; // Adjust the path as necessary

export default function App() {
  return (
    <div className="content-wrapper">
      <img className="styled-image" src={profileImage} alt="Rosan's Profile" />
      <div className="container-wrapper">
        <h1 className="title">Hi, I'm Rosan</h1>
        <h2 className="subtitle">Java Full Stack Developer</h2>
        <p className="description">
          I am a Java Full Stack Developer with expertise in building dynamic and responsive web applications. My skill set includes proficiency in both front-end and back-end development, allowing me to create seamless and user-centric solutions. I am passionate about coding and solving complex challenges. I have successfully worked on 4 projects, all of which are showcased on my GitHub profile.I have a strong foundation in Java, Spring Boot, React, and PostgreSQL.
        </p>
        <div className="contact">
      <a href="/path/to/resume.pdf" download className="contact-link">
        <FaFileDownload className="icon" />
        Resume
      </a>
      <a href="tel:+919025735617" className="contact-link">
        <FaPhoneAlt className="icon" />
        Contact
      </a>
      <a href="mailto:rosannatarajan.n@gmail.com" className="contact-link">
        <FaEnvelope className="icon" />
        Email
      </a>
    </div>
      </div>
    </div>
  );
}

