import React, { useEffect } from 'react';
import "./Project.css";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

// Font Awesome Icons
import { FaHamburger, FaRegBuilding, FaGamepad, FaCalculator, FaShoppingCart, FaUserGraduate, FaUtensils, FaClipboardList } from 'react-icons/fa'; // Updated icons

export default function Project() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

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
            icon: <FaUserGraduate />, // Icon for Student Mark (Tic-Tac-Toe)
            description: "This is a gaming project using React JS. The game depends on the player's move. The player will win or draw depending on their move.",
            github: "https://github.com/Rosan009/tic-tac-toe"
        },
        {
            title: "ecommerce",
            icon: <FaShoppingCart />, 
            description: "The Investment Calculator is useful for everyone. It will calculate annual investment based on the amount invested and the duration.",
            github: "https://github.com/Rosan009/React-Investment-Calculator"
        },
        {
            title: "food-recipe",
            icon: <FaUtensils />, 
            description: "The Investment Calculator is useful for everyone. It will calculate annual investment based on the amount invested and the duration.",
            github: "https://github.com/Rosan009/React-Investment-Calculator"
        },
        {
            title: "task-management-system",
            icon: <FaClipboardList />, 
            description: "The Investment Calculator is useful for everyone. It will calculate annual investment based on the amount invested and the duration.",
            github: "https://github.com/Rosan009/React-Investment-Calculator"
        }
    ];

    return (
        <div>
            <div className="container-project">
                <h1 className="project-title">My Projects</h1>
                <div className="projects">
                    {projects.map((project, index) => (
                        <div 
                            className="project" 
                            key={index}
                            data-aos="fade-up" // Add fade-up animation on scroll
                        >
                            <div className="project-icon">
                                {project.icon}
                            </div>
                            <div className="title-container">
                                <h2>{project.title}</h2>
                            </div>
                            <div className="overlay">
                                <p>{project.description}</p>
                                <a 
                                    href={project.github} 
                                    className="github-link" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
