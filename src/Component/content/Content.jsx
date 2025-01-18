import React from 'react';
import '../content/Content.css';

export default function App() {
  return (
    <div className="content-wrapper">
      <img
        className="styled-image"
        src="src/Component/Img/IMG_20240217_221023_251-removebg-preview.png"
        alt="Your Image"
      />
      <h1 className="title">Hi, I'm Rosan</h1>
      <h2 className="subtitle">Full Stack Developer</h2>
      <p className="description">
        I specialize in building dynamic and responsive web applications, handling both front-end and back-end development.
        With a passion for coding and solving complex challenges, I deliver seamless solutions that enhance user experience and drive business growth.
      </p>
    </div>
  );
}
