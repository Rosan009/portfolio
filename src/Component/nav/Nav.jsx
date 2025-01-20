import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="logo">
        <a href="#home">
          <img src="channels4_profile-removebg-preview.png" alt="Logo" />
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home" className="link">Home</a>
        </li>
        <li className={activeSection === 'skill' ? 'active' : ''}>
          <a href="#skill" className="link">Skill</a>
        </li>
        <li className={activeSection === 'project' ? 'active' : ''}>
          <a href="#project" className="link">Project</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact" className="link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
