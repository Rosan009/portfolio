import React from 'react';
import "./Project.css";

// Font Awesome Icons (New Icons)
import { FaHamburger, FaRegBuilding, FaGamepad, FaCalculator, FaClipboardList } from 'react-icons/fa'; // New icons

export default function Project() {
    const projects = [
        {
            title: "Food Shop",
            icon: <FaHamburger />, // Icon for Food Shop
            description: "This website is created using HTML, CSS, and JS. It can be used in real life for small food shops.",
            github: "https://github.com/Rosan009/food-shop"
        },
        {
            title: "form-layout",
            icon: <FaRegBuilding />, // Icon for Form Layout
            description: "This project uses form layout. The tree depends on the fruit. You draw your form layout on your canvas. It will calculate how many trees are placed in your form.",
            github: "https://github.com/Rosan009/form-layout"
        },
        {
            title: "student-mark",
            icon: <FaGamepad />, // Icon for Student Mark (Tic-Tac-Toe)
            description: "This is a gaming project using React JS. The game depends on the player's move. The player will win or draw depending on their move.",
            github: "https://github.com/Rosan009/tic-tac-toe"
        },
        {
            title: "ecommerce",
            icon: <FaCalculator />, // Icon for Ecommerce
            description: "The Investment Calculator is useful for everyone. It will calculate annual investment based on the amount invested and the duration.",
            github: "https://github.com/Rosan009/React-Investment-Calculator"
        },
        {
            title: "food-recipe",
            icon: <FaHamburger />, // Icon for Food Recipe
            description: "The Investment Calculator is useful for everyone. It will calculate annual investment based on the amount invested and the duration.",
            github: "https://github.com/Rosan009/React-Investment-Calculator"
        },
        {
            title: "task-management-system",
            icon: <FaClipboardList />, // Icon for Task Management System
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
                        <div className="project-icon">{project.icon}</div> {/* Display the new icon */}
                        <div className="title-container">
                            <h2>{project.title}</h2>
                        </div>
                        <div className="overlay">
                            <p>{project.description}</p>
                            <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
