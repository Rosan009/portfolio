import React, { useEffect } from 'react';
import './Skill.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaDatabase, FaAws } from 'react-icons/fa'; // Import AWS icon
import { SiSpringboot } from 'react-icons/si';

const skills = [
  { name: 'HTML', percentage: '90%', icon: <FaHtml5 /> },
  { name: 'CSS', percentage: '80%', icon: <FaCss3Alt /> },
  { name: 'JavaScript', percentage: '80%', icon: <FaJs /> },
  { name: 'React', percentage: '77%', icon: <FaReact /> },
  { name: 'Java', percentage: '70%', icon: <FaJava /> },
  { name: 'SpringBoot', percentage: '75%', icon: <SiSpringboot /> },
  { name: 'PostgreSQL', percentage: '73%', icon: <FaDatabase /> },
  { name: 'Git', percentage: '60%', icon: <FaGitAlt /> },
  { name: 'AWS', percentage: '65%', icon: <FaAws /> } // Added AWS skill
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
    <div className="container-skill">
    <h1 className="skills-title">My Skills</h1>
      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon-wrapper">
              {skill.icon && <span className="skill-icon">{skill.icon}</span>}
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
    </div>
     
    </>
  );
}
