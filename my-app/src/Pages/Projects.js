import React, { useEffect, useState } from "react";
import RockPaperScissors from '../Images/RockPaperScissors.jpg';
import TicTacToe from '../Images/TicTacToe.png';
import Portfolio from '../Images/Portfolio.PNG';
import '../Components/Projects.css';

export default function Projects() {
  const projects = [
    {
      image: TicTacToe,
      title: "Tic-Tac-Toe",
      description: "This project is a classic implementation of the popular game Tic-Tac-Toe. It provides a fun and interactive experience where two players take turns marking their respective symbols (X and O) on a 3x3 grid. ",
      technologies: "",
      demoLink: "https://play.google.com/store/apps/details?id=com.WallinBrothers.tictactoe&hl=en_US&gl=US",
      repo: "https://github.com/BrettWallin/Tic-Tac-Toe",
      type: "mobile"
    },
    {
      image: RockPaperScissors,
      title: "Rock Paper Scissors",
      description: "Experience the classic game of Rock Paper Scissors in a digital format. This project brings the timeless hand game to life with vibrant graphics and smooth gameplay.",
      technologies: "",
      demoLink: "https://play.google.com/store/apps/details?id=com.wallinsoftware.rockpaperscissors&hl=en_US&gl=US",
      repo: "https://github.com/dwallin88/rock-paper-scissors",
      type: "mobile"
    },
    {
      image: Portfolio,
      title: "Portfolio",
      description: "Welcome to my personal portfolio website, a showcase of my skills, projects, and achievements. This website serves as a digital representation of my professional profile, highlighting my expertise and accomplishments in the field.",
      technologies: "",
      demoLink: "https://brettwallin.com",
      repo: "https://github.com/BrettWallin/react-portfolio-website",
      type: "website"
    }
   
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animateProjects, setAnimateProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const projectSection = document.getElementById("projects-section");

      if (projectSection && !animateProjects) {
        const sectionTop = projectSection.offsetTop;
        const sectionHeight = projectSection.offsetHeight;
        const windowHeight = window.innerHeight;

        const triggerOffset = windowHeight * 0.8;

        if (scrollPosition > sectionTop - triggerOffset && scrollPosition < sectionTop + sectionHeight) {
          setAnimateProjects(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateProjects]);


  const renderProject = (project, index) => {
    const isActive = index === currentProjectIndex;
    const isBlurred = Math.abs(index - currentProjectIndex) === 1 || (index === 0 && currentProjectIndex === projects.length - 1) || (index === projects.length - 1 && currentProjectIndex === 0);

    const titleStyle = {
      fontWeight: "bold",
      fontSize: "20px"
    }

    const handleClick = () => {
      setCurrentProjectIndex(index);
    }

    return (
      <div
        id="projects"
        key={index}
        className={`project-card ${isActive ? "active" : ""} ${
          isBlurred ? "blur" : ""
        } ${project.type}`}
        onClick={handleClick}
      >
        <img src={project.image} alt={`project-${index}`} className="project-image" />
        <p style={titleStyle}>{project.title}</p>
        <p>{project.description}</p>
        <p>{project.technologies}</p>
        <div className="button-container">
          <button className="project-button" onClick={() => window.open(project.demoLink, "_blank")}>View Project</button>
          <button className="project-button" onClick={() => window.open(project.repo, "_blank")}>View GitHub</button>
        </div>
      </div>
    );
  };

  return (
    <div className="project-container">
      <h1 className="projects-title">My Projects</h1>
      <div className={`projects ${animateProjects ? "projects-animate active" : ""}`} id="projects-section">
        <div className="project-cards">
          {projects.map(renderProject)}
        </div>
      </div>
    </div>
  );
}
