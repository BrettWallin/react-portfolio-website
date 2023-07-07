import React from "react";
import '../Components/Navbar.css';

export default function Navbar() {
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      let offset = 0;

      if (targetId === "#projects") {
        offset = -240;
      } else if (targetId === "#about") {
        offset = -100;
      } else if (targetId === "#resume") {
        offset = -50;
      } else if (targetId === "#contact") {
        offset = -50; 
      }

      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetPosition + offset, behavior: "smooth" });
    }
  }

  return (
    <div className="navbar">
      <h4 className="nav-contents"><a href="#about" onClick={scrollToSection} style={{ textDecoration:"none", color:"white"}}>About Me</a></h4>
      <h4 className="nav-contents"><a href="#projects" onClick={scrollToSection} style={{ textDecoration:"none", color:"white" }}>Projects</a></h4>
      <h4 className="nav-contents"><a href="#resume" onClick={scrollToSection} style={{ textDecoration:"none", color:"white" }}>Resume</a></h4>
      <h4 className="nav-contents"><a href="#contact" onClick={scrollToSection} style={{ textDecoration:"none", color:"white" }}>Contact Me</a></h4>
    </div>
  )
}

