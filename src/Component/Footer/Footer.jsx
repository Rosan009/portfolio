import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-content">
        <h1>Let'as Talk</h1>
             <div className="aboutlog">
                        <a href="tel:+919025735617" id="tel">
                          <img src="src/Component/Img/download-removebg-preview.png" alt="" />
                          </a>
                        <a href="mailto:rosannatarajan@gmail.com" id="tel">
                          <img src="src/Component/Img/646094-removebg-preview.png" alt="" />
                          </a>
                        <a href="https://github.com/Rosan009">
                          <img src="src/Component/Img/download (2).png" alt="" />
                          </a>
                        <a href="https://www.linkedin.com/in/rosan-natarajan-0a474a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                          <img src="src/Component/Img/download (3).png" alt="" />
                        </a>
                </div>
      <p>&copy; 2024 Rosan's Portfolio. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
