import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience">
      <h2 className="head" data-aos="fade-down">Internship Experience</h2>

      <div className="internship-container">
        <div className="internship-experience" data-aos="fade-right">
          <h3>Sri Nandha Infotech</h3>
          <p>FullStack Development (15 days)</p>
          <p>May 2024</p>
          <div className="more-content">
            <ul>
              <li>Built dynamic website components such as sliders, modals, and interactive menus using JavaScript, enhancing user experience and engagement.</li>
              <li>Utilized JavaScript to integrate third-party APIs, fetching and displaying real-time data (e.g., weather, news) dynamically without page reloads.</li>
              <li>Designed and implemented responsive content forms using JavaScript, featuring real-time validation and dynamic field adjustments based on user input.</li>
            </ul>
          </div>
        </div>

        <div className="internship-experience" data-aos="fade-left">
          <h3>CodeBlind Technologies</h3>
          <p>Web Development (15 days)</p>
          <p>September 2023</p>
          <div className="more-content">
            <ul>
              <li>Mastered advanced JavaScript concepts, including closures, callbacks, promises, and async/await, enhancing code efficiency and performance.</li>
              <li>Developed dynamic web applications using React, components, props, state, and hooks to create responsive user interfaces.</li>
              <li>Integrated third-party APIs using JavaScript, utilizing fetch() and axios to dynamically retrieve and display data, with error handling and loading states.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
