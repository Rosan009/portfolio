import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Content.css';
import { FaEnvelope, FaPhoneAlt, FaFileDownload } from 'react-icons/fa';
import profileImage from '../Img/IMG-20240908-WA0021-removebg.png'; // Adjust the path as necessary
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 100000 }); // Initialize AOS with a default animation duration
  }, []);

  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img 
        className="styled-image" 
        src={profileImage} 
        alt="Rosan's Profile" 
        data-aos="fade-in" 
      />

      {/* Text Content */}
      <div className="container-wrapper" data-aos="fade-up">
        <h1 className="title">Hi, I'm Rosan</h1>
        <h2 className="subtitle">Java Full Stack Developer</h2>
        <p className="description">
          I am a Java Full Stack Developer with expertise in building dynamic and responsive web applications. My skill set includes proficiency in both front-end and back-end development, allowing me to create seamless and user-centric solutions. I am passionate about coding and solving complex challenges. I have successfully worked on 4 projects, all of which are showcased on my GitHub profile. I have a strong foundation in Java, Spring Boot, React, and PostgreSQL.
        </p>

        {/* Contact Links */}
        <div className="contact" data-aos="fade-left">
          <a href="/resume-rosan.pdf" download className="contact-link">
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
