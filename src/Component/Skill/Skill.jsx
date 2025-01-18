import React, { useEffect } from 'react';
import './Skill.css';

const skills = [
  { name: 'HTML', percentage: '90%', img: 'src/Component/Img/images-removebg-preview.png' },
  { name: 'CSS', percentage: '80%', img: 'src/Component/Img/images__1_-removebg-preview.png' },
  { name: 'JavaScript', percentage: '80%', img: 'src/Component/Img/png-clipart-javascript-logo-product-design-brand-angularjs-dashboard-templates-angle-text-thumbnail-removebg-preview.png' },
  { name: 'React', percentage: '77%', img: 'src/Component/Img/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail-removebg-preview.png' },
  { name: 'Java', percentage: '70%', img: 'src/Component/Img/java-removebg-preview.png' },
  { name: 'SpringBoot', percentage: '75%', img: 'src/Component/Img/spring Boot.png' },
  { name: 'MySQL', percentage: '73%', img: 'src/Component/Img/download__1_-removebg-preview.png' },
  { name: 'Git', percentage: '60%', img: 'src/Component/Img/images__2_-removebg-preview.png' } // Added Git skill
];

export default function Skill() {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    progressBars.forEach((bar, index) => {
      bar.style.width = skills[index].percentage;
    });
  }, []);

  return (
    <>
     <h1>My Skills</h1>
     <div className="skills-wrapper">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-image-wrapper">
            <img src={skill.img} alt={skill.name} className="skill-image" />
            <span className="skill-name">{skill.name}</span>
          </div>
          <div className="skill-info">
            <div className="skill-progress-container">
              <div className="skill-progress">
                <div className="skill-progress-bar"></div>
              </div>
              <span className="skill-percentage">{skill.percentage}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
