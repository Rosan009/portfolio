import React from 'react';
import "./Project.css";
import githubIcon from '.././Img/download (2).png'; // Adjust the path to your GitHub icon

export default function Project() {
    const projects = [
        {
            title: "Food Shop",
            img: "src/Component/Img/Screenshot from 2024-07-29 14-17-30.png",
            description: "This website is created using HTML, CSS, and JS. It can be used in real life for small food shops.",
            github: "https://github.com/Rosan009/food-shop"
        },
        {
            title: "Form Layout",
            img: "src/Component/Img/Screenshot from 2024-07-29 14-20-31.png",
            description: "This project uses form layout. The tree depends on the fruit. You draw your form layout on your canvas. It will calculate how many trees are placed in your form.",
            github: "https://github.com/Rosan009/form-layout"
        },
        {
            title: "Tic-tac-toe",
            img: "src/Component/Img/Screenshot from 2024-07-29 14-13-34.png",
            description: "This is a gaming project using React JS. The game depends on the player's move. The player will win or draw depending on their move.",
            github: "https://github.com/Rosan009/tic-tac-toe"
        },
        {
            title: "Investment Calculator",
            img: "src/Component/Img/Screenshot from 2024-07-29 14-15-31.png",
            description: "The Investment Calculator is useful for everyone. It will calculate annual investment based on the amount invested and the duration.",
            github: "https://github.com/Rosan009/React-Investment-Calculator"
        }
    ];
           
    return (
        <div>
            <h1 className="project-title">My Projects</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.img} alt={`${project.title} image`} />
                        <div className="title-container">
                            <h2>{project.title}</h2>
                        </div>
                        <div className="overlay">
                            <p>{project.description}</p>
                            <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub link" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
